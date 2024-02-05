const fnDbConnection=require('./utils/conn');
const fnCollection=require('./utils/collection');
const collectionName='product';


async function fnDelete(){
    const db=await fnDbConnection();
    const collection=fnCollection(collectionName,db);
    const response= await collection.deleteMany({name:"max pro 4"});
    // console.log(response);
    if(response.deletedCount){
        console.log("--Item Deleted--");
    }else{
        console.log("--No data found to delete--")
    }
}

fnDelete();