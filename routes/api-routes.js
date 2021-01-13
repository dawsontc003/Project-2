// still need db table names,
// id, ans1, ans2, ans3, ans4, ans5, userName, points, animalImage, animalData

// Requiring our models
const db = require("../models");

// Routes
module.exports = (app) => {
  // POST route for questions after START
  app.post("/api/questions", (req, res) => {
    db.Quiz.create({
      text: req.body.text,
      complete: req.body.complete,
    }).then((data) => res.json(data));
  });

  // PUT route - update
  app.put("/api/revise", (req, res) => {
    // Use the sequelize update method to update quiz answers
    db.Revise.update(
      { text: req.body.text, complete: req.body.complete },
      { where: { id: req.body.id } }
    ).then((data) => res.json(data));
  });

  // GET route for Recent results
  app.get("/api/recents", (req, res) => {
    // findAll returns all entries for a table when used with no options
    db.Recents.findAll({}).then((data) => {
      // We have access to the recents as an argument inside of the callback function
      res.json(data);
    });
  });

  // Delete route for Reset
  app.delete("/api/recents/:id", (req, res) => {
    console.log("todos ID:");
    console.log(req.params.id);
    db.Restart.destroy({
      where: {
        id: req.params.id,
      },
    }).then(() => res.end());
  });
};
