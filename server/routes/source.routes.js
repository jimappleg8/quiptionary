const express = require('express')

const sources = require("../controllers/source.controller.js");

const router = express.Router();

router.post("/", sources.createSource);
router.put("/:id", sources.updateSource);
router.delete("/:id", sources.deleteSource);
router.get("/:id", sources.getSourceById);

module.exports = router
