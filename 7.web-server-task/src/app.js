const path = require("path");
const express = require("express");
const hbs = require("hbs");

// Paths
const staticDirPath = path.join(__dirname, "../web");
const viewsPath = path.join(__dirname, "../template/views");
const partialsPath = path.join(__dirname, "../template/partials");

console.log(staticDirPath);

const app = express();

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(staticDirPath));

app.get("", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/Dice%20Game", (req, res) => {
  res.render("dicee");
  // res.send('dicee page')
});

app.get("/Drum Kit Project", (req, res) => {
  res.render("drum");
});

app.get("/TheProject1", (req, res) => {
  res.render("project");
});

app.listen(3000, () => {
  console.log("app is running at port 3000");
  console.log("http://localhost:3000/");
});
