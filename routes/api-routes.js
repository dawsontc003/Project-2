// still need db table names,
// id, ans1, ans2, ans3, ans4, ans5, userName, points, animalImage, animalData

// Requiring our models
const db = require("../models");

// Routes
module.exports = (app) => {
  // GET route for recent results
  app.get("/", (req, res) => {
    // findAll returns all entries for a table when used with no options
    db.Results.findAll({}).then((data) => {
      // We have access to the todos as an argument inside of the callback function
      res.json(data);
    });
  });

  // POST route for questions
  app.post("/api/questions", (req, res) => {});

  // GET route for result
  app.get("/api/result/:id", (req, res) => {});

  // PUT route - update
  app.put("/api/revise", (req, res) => {
    // Use the sequelize update method to update quiz answer
    db.Revise.update(
      { text: req.body.text, complete: req.body.complete },
      { where: { id: req.body.id } }
    ).then((data) => res.json(data));
  });

  // GET route for recent results
  app.get("/api/recents", (req, res) => {
    // findAll returns all entries for a table when used with no options
    db.Recents.findAll({}).then((data) => {
      // We have access to the todos as an argument inside of the callback function
      res.json(data);
    });
  });

  // We need a delete

  app.delete("/api/recents/:id", (req, res) => {});
};
