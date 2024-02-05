const fnDbConnection=require('./utils/conn');
const fnCollection=require('./utils/collection');
const collectionName='product';

async function fnInsertData(){
    const db=await fnDbConnection();
    const collection= fnCollection(collectionName,db);
    const response=await collection.insertMany([
    {name:"max 4",brand:"micromax" ,price:220 ,category:"mobile" },
    {name:"max 5",brand:"micromax" ,price:220 ,category:"mobile" },
    {name:"max 6",brand:"micromax" ,price:220 ,category:"mobile" },
    ]);
    if(response.acknowledged){
        console.log("--Data Inserted--");
    }
}

fnInsertData();