const request = require("request");

const geocode = function (locationName, callBack) {
  const urlGeocoding = `http://api.positionstack.com/v1/forward?access_key=${Your_Key_Here}&query="${locationName}"&limit=1`;
  request({ url: urlGeocoding, json: true }, function (error, response, body) {
    if (error) {
      callBack(`Can not connect to ${error.hostname}, undefined`);
    } else if (response.body.error || response.body.data.length == 0) {
      callBack("Can not find location", undefined);
    } else {
      // console.log(chalk.green.inverse(`Location Found`));
      const lat = response.body.data[0].latitude;
      const long = response.body.data[0].longitude;
      const lable = response.body.data[0].label;
      const locationObj = {
        lat: lat,
        long: long,
        location: lable,
      };
      callBack(undefined, locationObj);
    }
  });
};

module.exports = geocode;
