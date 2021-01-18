const express = require("express");
const path = require("path");
// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8000;

// Environmental variables for storing API keys
require("dotenv").config();
const apiKeyM = process.env.API_KEY_MERRIAM;
const apiKeyTwo = process.env.API_KEY_TWO;

// Requiring our models for syncing
const db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
const exphbs = require("express-handlebars");

// found this to fix our rendering issue here: http://www.prowebguru.com/2020/08/nodejs-express-handlebars-access-denied-resolve-property-solution/#.YAEjeuhKhPY

app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
  })
);
app.set("view engine", "handlebars");

// Static directory
app.use(express.static(path.join(__dirname, "public"), { index: "_" }));

// Routes
require("./routes/api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
});
