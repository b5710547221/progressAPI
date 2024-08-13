const express = require('express')
const router = express.Router()
const controller = require('../controllers/UserController')
const db = require('../config/db');
module.exports = router
router.get('/entity?type=:type', async(req ,res)=>{
    var type =  req.query.type
    var data;
    try {
        if(type == 100){
            const result = await db.query("SELECT * FROM mas_department WHERE type='100' ");
            data = result.rows;
            res.json(result.rows); 
        }
        else if(type == 200){
            const result = await db.query("SELECT * FROM mas_department WHERE  type='200'");
            data = result.rows;
            res.json(result.rows); 
        }
        else{
            const result = await db.query("SELECT * FROM mas_department");
            data = result.rows;
            res.json(result.rows); 
        }
        //console.log(result)
      } catch (err) {
        console.error(err);
        res.status(500).send("ระบบมีปัญหา")
      }
      //console.log(result.rows)
    return data;

});
router.get('entity/:entityId',async(req,res)=>{
    var data = await db.query('SELECT id FROM "Q_Entity"'); 
    console.log(data.rows)
    res.json(data); 
    //const entityId = parseInt(req.params.entityId)
    //res.status(200).json(data.rows)
    //console.log(data)
    /* try{
        if(data.id === req.params.entityId){
            console.log(data)
            res.json(data.rows)
        }else{
            res.send("ไม่มี")
        }
       // const entityId =  req.params.entityId
       // data.id = entityId
       

      }catch(err){
        console.log(err)
        res.status(500).send("ระบบมีปัญหา")
      }
     */
      return data  
      
});
router.post('/entity',async(req,res)=>{
    var data;
    try{
        const entityId = "1234"
        data.entityId = entityId

      }catch(err){
        console.log(err)
        res.status(500).send("ระบบมีปัญหา")
      }
   
    return res.status(200),data.entityId,"ระบบใช้ได้"
    
});
router.put('/entity', async(req ,res)=>{
      const data =  req.body

      

   
      

});

