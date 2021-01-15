const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(bodyParser.json());
