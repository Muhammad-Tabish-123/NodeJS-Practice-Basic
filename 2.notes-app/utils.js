console.log("utilities");

const fname = "Alpha";

// module.exports = fname;

const add = function (a, b) {
  return a + b;
};

// module.exports = add;

module.exports = {
  fname: fname,
  add: add,
};
