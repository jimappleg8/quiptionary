const express = require('express');
const cors = require('cors');
const db = require('./models')

const app = express();

let corsOptions = {
  origin: "http://localhost:8081"
}

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// sync the db model with the database
db.sequelize.sync({ force: true })
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

require("./routes/tutorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server os running on port ${PORT}.`);
});
