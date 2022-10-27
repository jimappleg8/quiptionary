const express = require('express')

const definitionSource = require("../controllers/definitionSource.controller.js");

const router = express.Router();

router.get("/build", definitionSource.buildDefinitionSources);

router.put("/:definitionId/:sourceId", definitionSource.updateDefinitionSource);

module.exports = router
