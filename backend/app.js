const express=require('express');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const cors=require('cors');


const api=require('./routes/api');
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