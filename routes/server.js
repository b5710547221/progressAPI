const express = require('express')
const router = express.Router()
const db = require('../config/db');
module.exports = router

router.get('/server/opentime',async(req,res)=>{
  return res.status(200)
    
});
