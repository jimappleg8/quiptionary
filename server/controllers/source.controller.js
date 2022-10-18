const { Sequelize, Op } = require("sequelize");
const db = require("../models");
const Source = db.source;

// -----------------------------------------------------

createSource = async (req, res) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a valid source record.',
    })
  }

  // Create a definition object
  const source = {
    verified: body.verified ? body.verified : 0,
    source_date: body.source_date,
    description: body.description,
    citation: body.citation,
    author: body.author,
    source : body.source
  };

  // save to the database
  await Source.create(source)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the source."
      });
    });
};

// -----------------------------------------------------

updateSource = async (req, res) => {
  const id = req.params.id;
  
  await Source.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num != 1) {
        res.send({
          message: `Cannot update source with id=${id}. Maybe source was not found or req.body is empty!`
        });
      } else {
        res.send({
          message: "Source was updated successfully."
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating source with id=" + id
      });
    });
};

// -----------------------------------------------------

deleteSource = async (req, res) => {
  const id = req.params.id;

  await Source.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num != 1) {
        res.send({
          message: `Cannot delete source with id=${id}. Maybe source was not found!`
        });
      } else {
        res.send({
          message: "Source was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete source with id=" + id + "(" + err + ")"
      });
    });
};

// -----------------------------------------------------

getSources = async (req, res) => {
  await Source.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving sources."
      });
    });
};

// -----------------------------------------------------

getSourceById = async (req, res) => {
  const id = req.params.id;

  await Source.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find source with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving source with id=" + id
      });
    });
};

// -----------------------------------------------------

module.exports = {
  createSource,
  updateSource,
  deleteSource,
  getSources,
  getSourceById
};
