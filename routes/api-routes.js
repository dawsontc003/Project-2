// // Requiring our models
const db = require("../models");
// require("dotenv").config();
// const apiKeyM = process.env.API_KEY_MERRIAM;
// const axios = require("axios").default;

// Routes
module.exports = (app) => {
  // static home page
  app.get("/", (req, res) => {
    res.render("home");
  });
  // questions page
  app.get("/api/questions", (req, res) => {
    db.Animaldb.findAll({}).then((data) => {
      const hbsObject = {
        animalObj: data,
      };
      res.render("questions", hbsObject);
    });
  });

  // POST route for questions after START
  app.post("/api/questions", (req, res) => {
    db.Animaldb.create({
      name: req.body.name,
      a_1: req.body.a_1,
      a_2: req.body.a_2,
      a_3: req.body.a_3,
      result: req.body.result,
      score: req.body.score,
    }).then((data) => res.json(data));
    res.render("questions");
  });

  // PUT route - update currently updates whatever key:values are passed into it
  app.put("/api/questions/:id", (req, res) => {
    db.Animaldb.update(req.body, {
      where: {
        id: req.params.id,
      },
    }).then((data) => res.json(data));
  });

  // GET route for results
  app.get("/api/results/:id", (req, res) => {
    db.Animaldb.findOne({
      where: { id: req.params.id },
    }).then((data) => {
      const resultAnimal = {
        animalObj: data,
      };
      res.render("results", resultAnimal);
    });
  });

  // GET route for Recent results
  app.get("/api/recents", (req, res) => {
    // findAll returns all entries for a table when used with no options
    db.Animaldb.findAll({}).then((data) => {
      // We have access to the recents as an argument inside of the callback function
      const hbsObject = {
        animalObj: data,
      };
      res.render("recents", hbsObject);
    });
  });

  // Delete route for Reset
  app.delete("/api/recents/:id", (req, res) => {
    console.log("todos ID:");
    console.log(req.params.id);
    db.Animaldb.destroy({
      where: {
        id: req.params.id,
      },
    }).then(() => res.end());
  });

  // const Merriam = (searchTerm) => {
  //   axios
  //     .get(
  //       `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${searchTerm}?key=${apiKeyM}`
  //     )
  //     .then((response) => {
  //       console.log(response.data[0].shortdef[0]);
  //       console.log(response.headers);
  //     });
  // };
};
