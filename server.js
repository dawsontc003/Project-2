const express = require("express");
const path = require("path");
// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8000;

// Environmental variables for storing API keys
// require("dotenv").config();
// const apiKeyM = process.env.API_KEY_MERRIAM;
// const apiKeyP = process.env.API_KEY_PEXELS;

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

const hbs = exphbs.create({});

hbs.handlebars.registerHelper({
  eq: (v1, v2) => v1 === v2,
  ne: (v1, v2) => v1 !== v2,
  lt: (v1, v2) => v1 < v2,
  gt: (v1, v2) => v1 > v2,
  lte: (v1, v2) => v1 <= v2,
  gte: (v1, v2) => v1 >= v2,
  and() {
    return Array.prototype.every.call(arguments, Boolean);
  },
  or() {
    return Array.prototype.slice.call(arguments, 0, -1).some(Boolean);
  },
});

// hbs.handlebars.registerHelper("ifCond", function (v1, operator, v2, options) {
//   switch (operator) {
//     case "==":
//       return v1 == v2 ? options.fn(this) : options.inverse(this);
//     case "===":
//       return v1 === v2 ? options.fn(this) : options.inverse(this);
//     case "!=":
//       return v1 != v2 ? options.fn(this) : options.inverse(this);
//     case "!==":
//       return v1 !== v2 ? options.fn(this) : options.inverse(this);
//     case "<":
//       return v1 < v2 ? options.fn(this) : options.inverse(this);
//     case "<=":
//       return v1 <= v2 ? options.fn(this) : options.inverse(this);
//     case ">":
//       return v1 > v2 ? options.fn(this) : options.inverse(this);
//     case ">=":
//       return v1 >= v2 ? options.fn(this) : options.inverse(this);
//     case "&&":
//       return v1 && v2 ? options.fn(this) : options.inverse(this);
//     case "||":
//       return v1 || v2 ? options.fn(this) : options.inverse(this);
//     default:
//       return options.inverse(this);
//   }
// });

app.use(express.static("public/assets"));

// Static directory
app.use(express.static(path.join(__dirname, "public"), { index: "_" }));

// Routes
require("./routes/api-routes.js")(app);
// require("./routes/third-party-api-routes");

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
});
