const express = require('express')
const router = express.Router()
const db = require('../config/db');
module.exports = router

router.post('/token',async(req,res)=>{
      try{
        const idCardNumber = req.body.idCardNumber
        const entityId = req.body.entityId
        const date =  req.body.date
      }catch(err){
        console.log(err);
        res.status(500).send("ระบบมีปัญหา")
      }
     
      
      return res.status(200)
});
