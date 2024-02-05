const request = require("request");

const forecast = function (longArg, latArg, callBack) {
  const urlWeather = `http://api.weatherstack.com/current?access_key=${Your_Key_Here}&query=${longArg},${latArg}`;
  request({ url: urlWeather, json: true }, function (error, response, body) {
    // console.log(response.body);
    if (error) {
      callBack(`Error: Can not connect to ${error.hostname}`, undefined);
    } else if (response.body.success === false) {
      callBack(`Error: Can not find location`, undefined);
    } else {
      const data = response.body.current;
      // console.log(chalk.green.inverse(`Location Found`));
      callBack(
        undefined,
        `It is currently ${data.temperature} degrees outside and it feels like ${data.feelslike} degrees outside.`
      );
    }
  });
};

module.exports = forecast;
