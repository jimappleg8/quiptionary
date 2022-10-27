const express = require('express');
const cors = require('cors');

const db = require('./models');
const definitionRouter = require("./routes/definition.routes");
const definitionIndexRouter = require("./routes/definitionIndex.routes");
const definitionSourceRouter = require("./routes/definitionSource.routes");
const sourceRouter = require("./routes/source.routes");

const app = express();

let corsOptions = {
  origin: ["http://localhost:3000", "http://localhost:8081"]
}

app.use(cors(corsOptions));

/*
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000")
  res.header("Access-Control-Allow-Origin", "http://localhost:8081")
})
*/

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// sync the db model with the database
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  })

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Quitionary API." });
})

app.use('/api/definitions', definitionRouter);
app.use('/api/definition-index', definitionIndexRouter);
app.use('/api/definition-source', definitionSourceRouter);
app.use('/api/sources', sourceRouter);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server os running on port ${PORT}.`);
});
