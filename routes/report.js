const express = require('express')
const router = express.Router()
const db = require('../config/db');
module.exports = router

router.post('/report/reserved',async(req,res)=>{
   const entityId = req.body.entityId
   const date = req.body.date
   return res.status(200)
    
});
