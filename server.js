const http=require('http');
// var express = require('express');
// var app  = express();
const app=require('./backend/app');



const port=process.env.Port||3000;
app.set('port',port);

const server=http.createServer(app);
server.listen(port,()=>{
    console.log("connected to the localhost:"+port);
});


