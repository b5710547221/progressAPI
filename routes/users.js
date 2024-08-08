const express = require('express')
const router = express.Router()
const db = require('../config/db');
module.exports = router

router.get('/users/:userId',async(req,res)=>{
  return res.status(200),
         userId,
         entityId
});

router.post('/users',async(req,res)=>{
    const  uid  = req.body.uid
    return res.status(200)
  });

router.put('/users',async(req,res)=>{
    const  uid  = req.body.uid
    return res.status(200)
  });