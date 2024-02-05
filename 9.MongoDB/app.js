const fnDbConnection = require("./utils/conn");
const fnCollection = require("./utils/collection");
// D:\Tabish\DataBase\mongodb\bin\mongod.exe --dbpath D:\Tabish\DataBase\mongodb-data

const fnGetData = async function () {
  fnDbConnection()
    .then((db) => {
      const collection = fnCollection("product", db);
      const result = collection.find().toArray();
      return result;
    })
    .then((result) => console.log(result));
};

fnGetData();
