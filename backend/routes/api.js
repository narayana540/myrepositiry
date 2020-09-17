const express=require('express');
const router=express.Router();
// const bodyparser=require('body-parser');
const User=require('../models/user');
const jwt=require('jsonwebtoken');
const { send } = require('process');


function verifyToken(req,res,next){
    if(!req.headers.authorization){
      res.status(401).send("unauthorized request");
    }
    let token=req.headers.authorization.split(' ')[1];
    if(token===null){
      res.status(401).send("unauthorized request");
    }
    let payload=jwt.verify(token,'secretkey');
    if(!payload){
      res.status(401).send("unauthorized request");
    }
   
    req.userId=payload.subject;
    next();
       
}

router.get('/',(req,res) => {
    res.send("this is from api");
});
router.post('/register',(req,res)=>{
   let userData=req.body;
//    [
//        {'email':'narayan@gmail.com','password':'password@123'},
//        {'email':'naveen@gmail.com','password':'password@540'}
//     ];
//     res.send(userdata);
//     console.log(userdata);
   let user=new User(userData);
   user.save((err,registeredUser)=>{
     if(err){
         console.log("Error is"+err);
     }
     else{
        const payload={subject:registeredUser._id};
        const token=jwt.sign(payload,'secretkey');

        res.status(200).send({token});
     }
   })
});

router.post('/login',(req,res)=>{
   let userData=req.body;
    User.findOne({email:userData.email},(err,user)=>{
       if(!user){
          res.status(401).send('Invalid email');
       }else
       if(user.password!=userData.password){
         res.status(401).send('Invalid password');
       }
       else{
         const payload={subject:user._id};
         const token=jwt.sign(payload,'secretkey');
          res.status(200).send({token});
       }
    })

});

router.get('/events',verifyToken,(req,res)=>{

   let eventsData=
   [
      {
         "id":"1",
         "name":"Auto Expo",
         "description":"Lorem Ipsum",
         "date":"2020-03-18T22:43:45.511z"
      },
      {
         "id":"2",
         "name":"Auto Expo",
         "description":"Lorem Ipsum",
         "date":"2020-03-18T22:43:45.511z"
      },
      {
         "id":"3",
         "name":"Auto Expo",
         "description":"Lorem Ipsum",
         "date":"2020-03-18T22:43:45.511z"
      },
      {
         "id":"4",
         "name":"Auto Expo",
         "description":"Lorem Ipsum",
         "date":"2020-03-18T22:43:45.511z"
      },
      {
         "id":"5",
         "name":"Auto Expo",
         "description":"Lorem Ipsum",
         "date":"2020-03-18T22:43:45.511z"
      },
      {
         "id":"6",
         "name":"Auto Expo",
         "description":"Lorem Ipsum",
         "date":"2020-03-18T22:43:45.511z"
      },

   ]
   res.json(eventsData);
});

router.get('/events-special',(req,res)=>{

   let eventsData=
   [
      {
         "id":"1",
         "name":"Ato Expo",
         "description":"Lorem Ipsum",
         "date":"2020-03-18T22:43:45.511z"
      },
      {
         "id":"2",
         "name":"Ato Expo",
         "description":"Lorem Ipsum",
         "date":"2020-03-18T22:43:45.511z"
      },
      {
         "id":"3",
         "name":"Ato Expo",
         "description":"Lorem Ipsum",
         "date":"2020-03-18T22:43:45.511z"
      },
      {
         "id":"4",
         "name":"Ato Expo",
         "description":"Lorem Ipsum",
         "date":"2020-03-18T22:43:45.511z"
      },
      {
         "id":"5",
         "name":"Ato Expo",
         "description":"Lorem Ipsum",
         "date":"2020-03-18T22:43:45.511z"
      },

   ]
   res.json(eventsData);
});

module.exports=router;