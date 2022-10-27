const db = require("../models");
const Definition = db.definition;
const DefinitionSource = db.definitionSource;

// -----------------------------------------------------

updateDefinitionSource = async (req, res) => {
  const definitionId = req.params.definitionId;
  const sourceId = req.params.sourceId;
  const body = req.body
  
  if (!body) {
    return res.status(400).send({
      message: `Cannot update definition source with definitionId/sourceId=${definitionId}/${sourceId}. The request body is empty.`
    });
  }
  
  let definitionSource = await DefinitionSource.findOne({
    where: {
      definitionId: definitionId,
      sourceId: sourceId
    }
  });
  if (definitionSource === null) {
    return res.status(404).send({
        message: `Definition source with definitionId/sourceId=${definitionId}/${sourceId}. was not found.`
      });
  };
  
  definitionSource.set(req.body);
  
  definitionSource = await definitionSource.save()
    .then(data => {
      res.status(200)
        .send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err + ` Error updating definition source with definitionId/sourceId=${definitionId}/${sourceId}.`
      });
    });
};

// -----------------------------------------------------

// This is a temporary function and should be removed once the dictionarySource table is stable.

buildDefinitionSources = async (req, res) => {
  
  // get all definitions IDs
  const defIds = await Definition.findAll({ attributes: ['id', 'source_id'] });

  let i = 0;
  for (const def of defIds) {
    // create a definitionSources object
    const definitionSource = {
      definitionId: def.id,
      sourceId: def.source_id
    };
    // save to the database
    await DefinitionSource.create(definitionSource)
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the definition source."
        });
      });
    i++;
  };
  
  res.send("Definition source table was generated successfully! " + i + " records were generated.");
}


// -----------------------------------------------------

module.exports = {
  updateDefinitionSource,
  buildDefinitionSources
};