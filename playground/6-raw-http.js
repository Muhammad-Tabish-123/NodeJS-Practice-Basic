const { error } = require('console');
const http= require('http');
const url=`http://api.positionstack.com/v1/forward?access_key=73e333d043b418ee8cd13e16e2deb137&query="Multan"&limit=1`;

const request=http.request(url,(response)=>{

    let data='';

    response.on('data',(chunk)=>{
        console.log(chunk.toString());
        data += chunk;
    })

    response.on('end',()=>{
        console.log(data);
        const body=JSON.parse(data);
        console.log(body);
    })

    response.on('error',(error)=>{
        console.log(error);
    })
})

request.end();


