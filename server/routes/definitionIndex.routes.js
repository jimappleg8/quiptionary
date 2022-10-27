const express = require('express')

const definitionIndex = require("../controllers/definitionIndex.controller.js");

const router = express.Router();

router.post("/", definitionIndex.createDefinitionIndex);
router.delete("/:id", definitionIndex.deleteDefinitionIndex);

module.exports = router
