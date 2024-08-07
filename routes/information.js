const express = require('express')
const router = express.Router()
const controller = require('../controllers/UserController')
const db = require('../config/db');
module.exports = router

router.get('/information/:entityId/:type', async(req ,res)=>{
    const entityId = req.params.entityId
    const type = req.params.type
    const hash_key = `${entityId}:${type}`
    return  hash_key


});
router.post('/information/:entityId', async(req ,res)=>{
    const data = req.body
    const entityId = `${data.entityId}:${data.type}`
    entityId = data
    return res.status(200).statusMessage("ok")

});

