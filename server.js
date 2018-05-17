var express = require("express");
var bodyParser = require("body-parser");
var passport = require("passport");
var jwt = require("jsonwebtoken");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 8080;

var app = express();
app.use(require("serve-static")(__dirname + "/../../public"));
app.use(require("cookie-parser")());
app.use(require("body-parser").urlencoded({ extended: true }));
app.use(
  require("express-session")({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/controller.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
