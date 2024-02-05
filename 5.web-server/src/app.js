const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();

// ------------------- Define paths for express config -----------------------------------------
// console.log(__dirname);
// console.log(__filename);
const publicDirPath = path.join(__dirname, "/../public");
const viewsPath = path.join(__dirname, "../template/views");
const partialsPath = path.join(__dirname, "../template/partials");

// ------------------- Setting up handlers and views path  -----------------------------------------
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// ------------------- Setup static directory server -----------------------------------------
app.use(express.static(publicDirPath));

app.get("", (req, res) => {
  res.render("index.hbs", {
    title: "Weather",
    name: "Andrew",
  });
});

app.get("/about", (req, res) => {
  res.render("about.hbs", {
    title: "About Me",
    name: "Andrew",
  });
});

app.get("/help", (req, res) => {
  res.render("help.hbs", {
    title: "Help",
    message: "helping messages here",
    name: "Andrew",
  });
});

app.get("/weather", (req, res) => {
  // res.send('Weather page');
  res.send({
    location: "Philidophia",
    forecast: 50,
  });
});

app.get("/help/*", (req, res) => {
  res.render("page404.hbs", {
    title: 404,
    erroMessage: "article not found",
  });
});

app.get("*", (req, res) => {
  res.render("page404.hbs", {
    title: 404,
    erroMessage: "page not found 404",
  });
});

app.listen("3000", () => {
  console.log("server is up at poert 3000");
});
