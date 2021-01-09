// Requiring our models
const db = require("../models");

// Routes
module.exports = (app) => {
  // GET route for sql data
  app.get("/", (req, res) => {});

  // POST
  app.post("/api/todos", (req, res) => {});

  app.delete("/api/todos/:id", (req, res) => {});

  // PUT route
  app.put("/api/todos", (req, res) => {});
};
