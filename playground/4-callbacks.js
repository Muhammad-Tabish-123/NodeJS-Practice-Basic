const geocode = function (address, callBack) {
  setTimeout(() => {
    data = {
      lat: 0,
      long: 0,
    };

    callBack(data);
  }, 2000);
};

geocode("ajoasjsnsaij", function (data) {
  console.log(data);
});

// ---------------------------------------------------------------
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = function (arg1, arg2, callback) {
  setTimeout(() => {
    callback(arg1 + arg2);
  }, 2000);
};

add(1, 4, (sum) => {
  console.log(sum); // Should print: 5
});
