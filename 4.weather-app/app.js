const { default: chalk } = require("chalk");
const request = require("request");
const fs = require("fs");
const geocode = require("./utils/geoCode");
const forecast = require("./utils/foreCast");

if (!process.argv[2] || process.argv[2] == "") {
  console.log(chalk.red.bold.inverse("Provide city name!"));
} else {
  geocode(process.argv[2], (error, data) => {
    if (error) {
      console.log(chalk.red.inverse(`Error: ${error}`));
      return;
    }
    // console.log(chalk.green.inverse(`data: ${data}`));
    forecast(data.lat, data.long, (error, forecastData) => {
      if (error) {
        console.log(chalk.red.inverse(`Error: ${error}`));
        return;
      }
      console.log(chalk.green.inverse.bold(`data: ${data.location}`));
      console.log(chalk.green.inverse(`data: ${forecastData}`));
    });
  });
}
