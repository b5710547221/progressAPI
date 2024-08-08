const express = require('express')
const router = express.Router()
const db = require('../config/db');
module.exports = router

router.post('/token',async(req,res)=>{
      const idCardNumber = req.body.idCardNumber
      const entityId = req.body.entityId
      const date =  req.body.date
      
      return res.status(200)
});
