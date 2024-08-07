const express = require('express')
const router = express.Router()
const controller = require('../controllers/UserController')
const db = require('../config/db');
module.exports = router
router.get('/entity/:type', async(req ,res)=>{
    var type =  req.params.type
    var data;
    try {
        if(type == 100){
            const result = await db.query("SELECT * FROM mas_department WHERE type='100' ");
            res.json(result.rows); 
        }
        else if(type == 200){
            const result = await db.query("SELECT * FROM mas_department WHERE  type='200'");
            res.json(result.rows); 
        }
        else{
            const result = await db.query("SELECT * FROM mas_department");
            res.json(result.rows); 
        }
        //console.log(result)
      } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      }
      //console.log(result.rows)
    return data;

});
router.get('/entity/:entityId',async(req,res)=>{
      const entityId =  req.params.entityId
      data.entityId = entityId
      return data.entityId
      
});
router.put('/entity/:entityId', async(req ,res)=>{
      const data =  JSON.parse(req.body);
      data.entityId = data

      return   res.status(200),
               res.body = JSON.stringify({
               data
               })
      

});

