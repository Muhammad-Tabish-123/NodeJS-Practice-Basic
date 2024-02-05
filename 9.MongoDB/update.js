const fnDbConnection=require('./utils/conn');
const fnCollection=require('./utils/collection');
const collectionName='product';


async function fnUpdate(){
    const db=await fnDbConnection();
    const collection=fnCollection(collectionName,db);
    const response= await collection.updateMany({name:"max 4"},
    {$set:{name:"max pro 4", price:400}});
    // console.log(response);
    if(response.matchedCount){
        console.log("--Item Updated--");
    }else{
        console.log("--No data found for updating--")
    }
}

fnUpdate();