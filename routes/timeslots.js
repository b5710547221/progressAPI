const express = require('express')
const router = express.Router()
const db = require('../config/db');
module.exports = router
router.get('/timeslots/:entityId',async(req,res)=>{
  return res.status(200)
    
});

router.get('/timeslots?date=:date',async(req,res)=>{
    try{
   
    }catch(err){
        console.log(err)
        res.status(500).send("ระบบมีปัญหา")
    }
    return res.status(200)
      
  });

 
router.get('/timeslots/:entityId/:date',async(req,res)=>{
    try{
        const entityId = req.params.entityId
        const date = req.params.date
    }catch(err){
        console.log(err)
        res.status(500).send("ระบบมีปัญหา")
    }
   
    return res.status(200)
      
  });
 
router.post('/timeslots',async(req,res)=>{
    try{
        const entityId = req.body.entityId
        const dateList = req.body.date
        const timeslot = req.body.timeslot
    }catch(err){
        console.log(err)
        res.status(500).send("ระบบมีปัญหา")
    }
   
    return res.status(200)
      
  });

router.put('/timeslots',async(req,res)=>{
    try{
        const entityId = req.body.entityId
        const date = req.body.date
        const time = req.body.timeslot
        const action = req.body.action
        const value = req.body.value
    }catch(err){
        console.log(err)
        res.status(500).send("ระบบมีปัญหา")
    }
   
    return res.status(200)
      
  });
