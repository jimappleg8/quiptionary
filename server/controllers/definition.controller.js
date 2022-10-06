const db = require("../models");
const Definition = db.definition;

// -----------------------------------------------------

createDefinition = async (req, res) => {
  // Validate request
  console.log(req.body);
  if (!req.body.definition) {
    res.status(400).send({
      message: "Content can not be empty."
    });
    return;
  }
  
  // Create a definition object
  const definition = {
    entry_word: req.body.entry_word,
    part_of_speech: req.body.part_of_speech,
    plural: req.body.plural ? req.body.plural : 0,
    definition: req.body.definition,
    original_quote: req.body.original_quote,
    author: req.body.author,
    verified: req.body.verified ? req.body.verified : 0,
    source_id: req.body.source_id,
    source_date: req.body.source_date,
    source_description: req.body.source_description,
    other_sources: req.body.other_sources,
    definition_type: req.body.definition_type,
    keywords: req.body.keywords,
    categories: req.body.categories,
    source : req.body.source,
    context: req.body.context,
    sort: req.body.sort,
    game: req.body.game ? req.body.game : 'N',
  };

  // save to the database
  await Definition.create(definition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the definition."
      });
    });
};

// -----------------------------------------------------

updateDefinition = async (req, res) => {
  const id = req.params.id;

  await Definition.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Definition was updated successfully."
        });
      } else {
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
};

// -----------------------------------------------------

deleteDefinition = async (req, res) => {
  const id = req.params.id;

  await Definition.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Definition was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete definition with id=${id}. Maybe definition was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete definition with id=" + id
      });
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

module.exports = {
  createDefinition,
  updateDefinition,
  deleteDefinition,
  getDefinitions,
  getDefinitionById
};
