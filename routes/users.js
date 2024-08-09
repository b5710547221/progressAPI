const express = require('express')
const router = express.Router()
const db = require('../config/db');
module.exports = router

router.get('/users/:userId',async(req,res)=>{
    try{
        const idCardNumber = req.body.idCardNumber
        const entityId = req.body.entityId
        const date =  req.body.date
      }catch(err){
        console.log(err);
        res.status(500).send("ระบบมีปัญหา")
      }
  return res.status(200),
         userId,
         entityId
});

router.post('/users',async(req,res)=>{
    try{
        const  uid  = req.body.uid
      }catch(err){
        console.log(err);
        res.status(500).send("ระบบมีปัญหา")
      }
  
    return res.status(200)
  });

router.put('/users',async(req,res)=>{
    try{
        const  userId  = req.body.uid
        const key_to_update = req.body.key_to_update
      }catch(err){
        console.log(err);
        res.status(500).send("ระบบมีปัญหา")
      }
   
    return res.status(200)
  });