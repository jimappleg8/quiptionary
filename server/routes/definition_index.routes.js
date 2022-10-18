const express = require('express')

const definition_index = require("../controllers/definition_index.controller.js");

const router = express.Router();

router.post("/", definition_index.createDefinitionIndex);
router.delete("/:id", definition_index.deleteDefinitionIndex);

module.exports = router
