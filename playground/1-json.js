const fs = require("fs");
const { json } = require("stream/consumers");
const book = {
  title: "Ego is th Enemy",
  aurthor: "Ryan Holiday",
};

// ----------- Stringify and parsing ------------------------------
// const bookJson = JSON.stringify(book);
// console.log(bookJson);

// const parseData = JSON.parse(bookJson);
// console.log(parseData);
// console.log(parseData.title);

// ---------------- Storing in a file --------------------------
// const bookJson = JSON.stringify(book);
// fs.writeFileSync("1-json.json", bookJson);

// ---------------- Reading from a file --------------------------
// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data);
// console.log(data.title);

// ---------------- Reading from a file --------------------------
// 1---- replacing data in 1-json.json file from provided link  https://gist.github.com/andrewjmead/c7d26a25ddc793f4210201747a9ba429
// 2----change name and age property
// 3----overwrite orignal data
// 4---- test your work

// const dataBuffer = fs.readFileSync("1-json.json");
// let dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);

// data.name = "Alpha";
// data.age = "22";
// dataJSON = JSON.stringify(data);

// fs.writeFileSync("1-json.json", dataJSON);
