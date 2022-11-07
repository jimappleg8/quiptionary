const { Op } = require('sequelize');
const db = require('../models');
const Definition = db.definition;
const DefinitionIndex = db.definitionIndex;
//const DefinitionSource = db.definitionSource;
const Source = db.source;
const searchIndexing = require('./search-indexing');

// -----------------------------------------------------

createDefinition = async (req, res) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a valid definition record.',
    })
  }

  // Create a definition object
  const definition = {
    entryWord: body.entryWord,
    partOfSpeech: body.partOfSpeech,
    plural: body.plural ? body.plural : 0,
    definition: body.definition,
    originalQuote: body.originalQuote,
    attributedTo: body.attributedTo,
    source_id: body.source_id,
    source_date: body.source_date,
    source_description: body.source_description,
    other_sources: body.other_sources,
    definitionType: body.definitionType,
    keywords: body.keywords,
    categories: body.categories,
    source : body.source,
    context: body.context,
    game: body.game ? body.game : 'N',
  };

  // save to the database
  const newDef = await Definition.create(definition)
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the definition."
      });
    });
  
  updateSearchIndex(newDef);
    
  res.send(newDef);
};

// -----------------------------------------------------

updateDefinition = async (req, res) => {
  const id = req.params.id;
  const body = req.body
  
  if (!body) {
    return res.status(400).send({
      message: `Cannot update definition with id=${id}. The request body is empty.`
    });
  }
  
  let definition = await Definition.findByPk(id);
  if (definition === null) {
    return res.status(404).send({
        message: `Definition with id=${id} was not found.`
      });
  };
  
  definition.set(req.body);
  
  updateSearchIndex(definition.dataValues);
  
  definition = await definition.save()
    .then(data => {
      res.status(200)
        .send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err + ` Error updating definition with id=${id}.`
      });
    });
};

// -----------------------------------------------------

deleteDefinition = async (req, res) => {
  const id = req.params.id;

  await Definition.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num != 1) {
        res.send({
          message: `Cannot delete definition with id=${id}. Maybe definition was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete definition with id=" + id + "(" + err + ")"
      });
    });
    
  deleteSearchIndex(id);
  // deleteDefinitionSources(id);
    
  res.send({
    message: "Definition was deleted successfully!"
  });
};

// -----------------------------------------------------

getDefinitions = async (req, res) => {
  await Definition.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving definitions."
      });
    });
};

// -----------------------------------------------------

getOneDefinition = async (req, res) => {
  await Definition.findOne({
      where: {
        source_description: {
          [Op.ne]: ''
        }
      }
    })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving definition."
      });
    });
};

// -----------------------------------------------------

getDefinitionById = async (req, res) => {
  const id = req.params.id;

  await Definition.findByPk(id, {
    include: Source
  })
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find definition with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving definition with id=" + id
      });
    });
};

// -----------------------------------------------------

searchDefinitions = async (req, res) => {
  const words = req.params.word;
  const wordsArray = searchIndexing.phraseToArray(words);
  
  if (wordsArray != []) {
    
    const stemWords = searchIndexing.stemWords(wordsArray);
    
    const sqlWords = [];
    for (let i = 0; i < stemWords.length; i++) {
      sqlWords.push({
        // "like" allows for capitalized words to be found
        [Op.like]: stemWords[i]
      })
    }
    
    await Definition.findAll({
      attributes: [
        'id', 'entryWord', 'partOfSpeech', 'plural', 'definition', 'attributedTo'
      ],
      include: {
        model: DefinitionIndex,
        attributes: [],
        where: { 
          word: {
            [Op.or]: sqlWords
          }
        },
      }
    })
    .then(data => {
      const matches = [];
      const related = [];
      data.map((row) => {
        if (row.dataValues.entryWord.toLowerCase() === words.toLowerCase()) {
          matches.push(row);
        }
        else {
          related.push(row);
        }
      })
      res.send({
        words: words,
        matches: matches,
        related: related
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving definitions."
      });
    });
  }
};

// -----------------------------------------------------

indexDefinitions = async (req, res) => {
  
  // get all definitions IDs
  const defIds = await Definition.findAll({ attributes: ['id'] });

  let i = 0;
  for (const def of defIds) {
    // get each definition record
    const defn = await Definition.findByPk(def.id)
      .catch(err => {
        console.log(err)
      });
    updateSearchIndex(defn);
    i++;
  };
  
  res.send("Definition index was regenerated successfully! " + i + " records were updated.");
}

// -----------------------------------------------------

updateSearchIndex = async (defn) => {

  // first, delete the old index records if they exist
  await DefinitionIndex.destroy({
    where: { definitionId: defn.id }
  })

  // gather and stem the relevant words from three fields
  const words = searchIndexing.stemWords(
    searchIndexing.phraseToArray(defn.entryWord)
  );
  const cleanDef = searchIndexing.stemWords(
    searchIndexing.removeStopWords(
      searchIndexing.phraseToArray(defn.definition)
    )
  );
  const keywords = searchIndexing.stemWords(
    searchIndexing.phraseToArray(defn.keywords)
  );
  const stems = words.concat(cleanDef, keywords);

  // get rid of any duplicates
  const uniqueStems = [...new Set(stems)];
  
  for (const stemWord of uniqueStems) {
    // Create a definition object
    const definitionIndex = {
      definitionId: defn.id,
      word: stemWord,
    }
    // save the definition_index record
    await DefinitionIndex.create(definitionIndex)
    .catch(err => {
      console.log(err.message || "Some error occurred while creating the definition index.");
    });
  };
}

// -----------------------------------------------------

deleteSearchIndex = async (id) => {

  await DefinitionIndex.destroy({
    where: { definitionId: id }
  })
    .catch(err => {
      console.log(err.message || "Some error occurred while deleting the definition index.");
    });
}

// -----------------------------------------------------

module.exports = {
  createDefinition,
  updateDefinition,
  deleteDefinition,
  getDefinitions,
  getOneDefinition,
  getDefinitionById,
  searchDefinitions,
  indexDefinitions
};
