const { Op } = require("sequelize");
const db = require("../models");
const Definition = db.definition;
const DefinitionIndex = db.definition_index;
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
    entry_word: body.entry_word,
    part_of_speech: body.part_of_speech,
    plural: body.plural ? body.plural : 0,
    definition: body.definition,
    original_quote: body.original_quote,
    author: body.author,
    verified: body.verified ? body.verified : 0,
    source_id: body.source_id,
    source_date: body.source_date,
    source_description: body.source_description,
    other_sources: body.other_sources,
    definition_type: body.definition_type,
    keywords: body.keywords,
    categories: body.categories,
    source : body.source,
    context: body.context,
    sort: body.sort,
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
  
  await Definition.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num != 1) {
        res.send({
          message: `Cannot update definition with id=${id}. Maybe definition was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating definition with id=" + id
      });
    });
    
  const results = req.body;
  results.id = id;
  //console.log(results);
  updateSearchIndex(results);
    
  res.send({
    message: "Definition was updated successfully."
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

getDefinitionById = async (req, res) => {
  const id = req.params.id;

  await Definition.findByPk(id)
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
        [Op.eq]: stemWords[i]
      })
    }
    
    await Definition.findAll({
      attributes: [
        'id', 'entry_word', 'part_of_speech', 'plural', 'definition', 'author'
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
        if (row.dataValues.entry_word === words) {
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
    where: { definition_id: defn.id }
  })

  // gather and stem the relevant words from three fields
  const words = searchIndexing.stemWords(
    searchIndexing.phraseToArray(defn.entry_word)
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
    const definition_index = {
      definition_id: defn.id,
      word: stemWord,
    }
    // save the definition_index record
    await DefinitionIndex.create(definition_index)
    .catch(err => {
      console.log(err.message || "Some error occurred while creating the definition index.");
    });
  };
}

// -----------------------------------------------------

deleteSearchIndex = async (id) => {

  await DefinitionIndex.destroy({
    where: { definition_id: id }
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
  getDefinitionById,
  searchDefinitions,
  indexDefinitions
};
