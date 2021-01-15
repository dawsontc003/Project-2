// // still need db table names,
// //  ans1, ans2, ans3, ans4, ans5, userName, points/score, animalImage, animalData

// // Requiring our models
const db = require("../models");

// Routes
module.exports = (app) => {
  // POST route for questions after START
  app.post("/api/questions", (req, res) => {
    db.Animaldb.create({
      name: req.body.name,
      q_1: req.body.q_1,
      q_2: req.body.q_2,
      q_3: req.body.q_3,
    }).then((data) => res.json(data));
  });

  // PUT route - update
  app.put("/api/revise", (req, res) => {
    // Use the sequelize update method to update quiz answers
    db.Animaldb.update(
      { name: req.body.name, score: req.body.score },
      { where: { id: req.body.id } }
    ).then((data) => res.json(data));
  });

  // GET route for Recent results
  app.get("/api/recents", (req, res) => {
    // findAll returns all entries for a table when used with no options
    db.Animaldb.findAll({}).then((data) => {
      // We have access to the recents as an argument inside of the callback function
      // res.json(data);

      res.render("index", { existingAnimal: data });
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
};
