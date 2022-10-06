const express = require('express')

const definitions = require("../controllers/definition.controller.js");

const router = express.Router();

router.post("/", definitions.createDefinition);
router.put("/:id", definitions.updateDefinition);
router.delete("/:id", definitions.deleteDefinition);
router.get("/", definitions.getDefinitions);
router.get("/:id", definitions.getDefinitionById);

module.exports = router
