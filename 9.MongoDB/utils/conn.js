const {MongoClient}=require('mongodb');
const url="mongodb://127.0.0.1:27017";
const client= new MongoClient(url);
let dataBase='e-com';

async function fnDbConnection(){
    const result=await client.connect();
    return result.db(dataBase);
}


module.exports=fnDbConnection;