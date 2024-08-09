const express = require('express')
const router = express.Router()
const db = require('../config/db');
module.exports = router

router.get('/server/opentime',async(req,res)=>{
    try{
   
    }catch(err){
        console.log(err)
        res.status(500).send("ระบบมีปัญหา")
    }
   
    return res.status(200)
    
});
