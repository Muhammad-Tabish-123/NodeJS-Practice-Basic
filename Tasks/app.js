const url = "https://fakestoreapi.com/products";
const request = require("request");
request("https://fakestoreapi.com/products", function (error, response, body) {
  console.error("error:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  console.log("body:", JSON.parse(body)[0].rating.rate); // Print the HTML for the Google homepage.
  dataParsed = JSON.parse(body);
  dataParsed.forEach((element) => {
    if (
      element.price > 20 &&
      element.rating.rate >= 4 &&
      !element.image == ""
    ) {
      console.log(element);
    }
  });
});
