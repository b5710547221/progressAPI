const express = require('express')
const router = express.Router()
//const controller = require('../controllers/UserController')
const db = require('../config/db');
const TABLE_NAME = 'Q_Timeslot_Time_Level'
const TABLE_Register = 'Q_Register'
module.exports = router

router.get('/register/:userId?entityId=:entityId',async(req,res)=>{
  
    
});

router.post('/register',async(req,res)=>{
    const userId  = req.body.userId
    const entity = req.body.entity
    
});

