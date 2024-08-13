const express = require('express')
const router = express.Router()
const db = require('../config/db');
module.exports = router

router.post('/report/reserved',async(req,res)=>{
    try{
        const entityId = req.body.entityId
        const date = req.body.date
    }catch(err){
        console.log(err)
        res.status(500).send("ระบบมีปัญหา")
    }
   
   return res.status(200)
    
});

router.get('/register/:userId?entityId=:entityId',async(req,res)=>{
    try{

    }catch(err){
        console.log(err)
        res.status(500).send("ระบบมีปัญหา")
    }
    return;
    
});

router.post('/register',async(req,res)=>{
    try{
        const userId  = req.body.userId
        const entity = req.body.entity
    }catch(err){
        console.log(err)
        res.status(500).send("ระบบมีปัญหา")
    }
   
    
});

