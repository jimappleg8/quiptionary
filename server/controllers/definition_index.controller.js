const db = require("../models");
const DefinitionIndex = db.definition_index;

// -----------------------------------------------------

createDefinitionIndex = async (req, res) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a valid index record.',
    })
  }

  // Create a definition object
  const definition_index = {
    definition_id: body.definition_id,
    word: body.word
  };

  // save to the database
  await DefinitionIndex.create(definition_index)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the definition index."
      });
    });
};

// -----------------------------------------------------

updateDefinitionIndex = async (req, res) => {
  const id = req.params.id;

  await DefinitionIndex.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Definition index was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update definition index with id=${id}. Maybe definition index was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating definition index with id=" + id
      });
    });
};

// -----------------------------------------------------

deleteDefinitionIndex = async (req, res) => {
  const id = Number(req.params.id);

  await DefinitionIndex.destroy({
    where: { definition_id: id }
  })
    .then(num => {
      if (num >= 1) {
        res.send({
          message: `Definition index was deleted successfully! (${num} records found)`
        });
      } else {
        res.send({
          message: `Cannot delete definition index with id=${id}. Maybe definition index was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete definition index with id=" + id
      });
    });
};

// -----------------------------------------------------

getDefinitionIndexByDefinitionId = async (req, res) => {
  const definition_id = req.params.id;

  await DefinitionIndex.findAll({ 
    where: {
      definition_id: definition_id
    }})
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find definition index with definition_id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving definition index with definition_id=" + id
      });
    });
};

// -----------------------------------------------------

module.exports = {
  createDefinitionIndex,
  updateDefinitionIndex,
  deleteDefinitionIndex,
  getDefinitionIndexByDefinitionId
};
