 function fnCollection(collectionName,db){
    const collection=db.collection(collectionName);
    // console.log(collection);
    return collection;
}

module.exports=fnCollection;