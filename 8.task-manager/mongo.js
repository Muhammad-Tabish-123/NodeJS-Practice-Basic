// mongodb://127.0.0.1:27017
// D:\Tabish\DataBase\mongodb >Mongodb path
// D:\Tabish\DataBase\mongodb\bin\mongod.exe --dbpath D:\Tabish\DataBase\mongodb-data

const { MongoClient } = require("mongodb");
// console.log(MongoClient);

const url = `mongodb://127.0.0.1:27017`;
const client = new MongoClient(url);
// console.log(client);

async function getData() {
  let result = await client.connect();
  let db = result.db("e-com");
  // console.log(db);
  let collection = db.collection("product");
  // console.log(collection);
  let response;
  response = await collection.insertOne({
    name: "S24 ultra",
    brand: "samsung",
    price: 500000,
    category: "mobile",
  });
  console.log(response);
  response = await collection.find({}).toArray();
  console.log(response);
}

getData();
