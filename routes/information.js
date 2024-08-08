const express = require('express')
const router = express.Router()
const controller = require('../controllers/UserController')
const db = require('../config/db');
module.exports = router

router.get('/information/:entityId/:type', async(req ,res)=>{
    const entityId = req.params.entityId
    const type = req.params.type
    const hash_key = `${entityId}:${type}`
    return  entityId,type


});
router.post('/information', async(req ,res)=>{
    const entityId = req.params.entityId
    const type = req.params.type
    
    return entityId,type,res.status(200).statusMessage("ok")

});

