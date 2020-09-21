const express=require('express');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const cors=require('cors');
const multer=require('multer');

const api=require('./routes/api');
// const { connect } = require('http2');
const app=express();

app.use(bodyparser.json());

app.use(cors());


mongoose.connect("mongodb+srv://narayan:LEwlskhnxOZSpJ1V@cluster0.tqlkx.mongodb.net/authdb?retryWrites=true&w=majority",{ useNewUrlParser: true,useUnifiedTopology: true })
.then(()=>{
    console.log("connected to db");
})
.catch((err)=>{
    console.log(`${err}`);
    console.log("connection failed");
});
app.use('/api',api);
// app.use('/api/register',api);
app.get('/',(req,res)=>{
    res.send("this is from server");
})

module.exports=app;

// function myFunction(x, y, z) { 
//     console.log(x, y, z);
// }
// const args = [0, 1, 2];
// myFunction(...args);

// const dateFields = [1970, 0, 1];  // 1 Jan 1970
// const d = new Date(...dateFields);
// console.log(d);
