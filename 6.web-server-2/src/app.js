const path = require("path");
const express = require("express");
const hbs = require("hbs");
const geocode = require("./utils/geoCode");
const forecast = require("./utils/foreCast");

const app = express();

// Define paths for Express config

const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Andrew Mead",
  });
  // res.send(__dirname)
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Andrew Mead",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    helpText: "This is some helpful text.",
    title: "Help",
    name: "Andrew Mead",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({ error: "please provide address" });
  }

  geocode(req.query.address, (error, data) => {
    if (error) {
      res.send({ error });
      return;
    }
    // res.send(`data: ${data}`);
    forecast(data.lat, data.long, (error, forecastData) => {
      if (error) {
        res.send({ error });
        return;
      }

      res.send({
        forecast: forecastData,
        location: data.location,
        address: req.query.address,
      });
      // res.send(`data: ${data.location}`);
      // res.send(`data: ${forecastData}`);
    });
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Andrew Mead",
    errorMessage: "Help article not found.",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Andrew Mead",
    errorMessage: "Page not found.",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});
