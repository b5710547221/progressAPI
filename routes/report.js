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
