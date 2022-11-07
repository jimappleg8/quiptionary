const express = require('express')

const definitionSource = require("../controllers/definitionSource.controller.js");

const router = express.Router();

router.get("/build", definitionSource.buildDefinitionSources);

router.post("/", definitionSource.createDefinitionSource);
router.put("/:definitionId/:sourceId", definitionSource.updateDefinitionSource);
router.delete("/:definitionId/:sourceId", definitionSource.deleteDefinitionSource);

module.exports = router
