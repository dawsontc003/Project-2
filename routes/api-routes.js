// // Requiring our models
const db = require("../models");

// Routes
module.exports = (app) => {
  // POST route for questions after START
  app.post("/api/questions", (req, res) => {
    db.Animaldb.create({
      name: req.body.name,
      a_1: req.body.a_1,
      a_2: req.body.a_2,
      a_3: req.body.a_3,
      score: req.body.score,
    }).then((data) => res.json(data));
    // console.log("post route worked");
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
      const hbsObject = {
        animalObj: data,
      };

      res.render("index", hbsObject);
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
