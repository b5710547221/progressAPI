const express = require('express')
const router = express.Router()
const controller = require('../controllers/UserController')
const db = require('../config/db');
module.exports = router

router.get('/information/:entityId/:type', async(req ,res)=>{
    try{
        const entityId = req.params.entityId
        const type = req.params.type
        const hash_key = `${entityId}:${type}`
    }catch(err){
        console.log(err)
        res.status(500).send("ระบบมีปํญหา")
    }
   
    return  entityId,type


});
router.post('/information', async(req ,res)=>{
    try{
        const entityId = req.params.entityId
        const type = req.params.type
    }catch(err){
        console.log(err)
        res.status(500).send("ระบบมีปัญหา")
    }
   
    
    return entityId,type,res.status(200).statusMessage("ok")

});

