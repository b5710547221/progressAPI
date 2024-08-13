var express = require('express');

var bodyParser = require('body-parser');
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const db = require('./config/db');
const path = require('path');

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: " Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple  API application",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Warat",
        url: "",
        email: "",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ['./app.js'],
};


const specs = swaggerJsdoc(options);
//var users = require('./routes/entity');
//var index = require('./routes/index');
var cors = require('cors')
const morgan = require('morgan')
var app = express();
//app.use(require('./routes/index'))

/* app.get('/', async (req, res) => {
    try {
      const result = await db.query('SELECT * FROM mas_department');
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  }); */
app.get('/entity/?type=:type', async(req ,res)=>{
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
app.get('/entity',async(req,res)=>{
  //var data = await db.query('SELECT id FROM "Q_Entity"'); 
  //console.log(data.rows.id)
  //res.json(data.rows);  
  
    try{
       if(result == null){
            const result = await db.query('SELECT id FROM "Q_Entity" WHERE id = req.params.entityId');
            console.log(result.rows)
            res.json(result.rows)
        }else{
            res.send("ไม่มีข้อมูล")
        }
       // const entityId =  req.params.entityId
       // data.id = entityId
       

      }catch(err){
        console.log(err)
        res.status(500).send("ระบบมีปัญหา")
      }
     
   //  return data  
      
});
app.post('/entity',async(req,res)=>{
    var data;
    var entityId = req.body.entityId
    var image = req.body.image
    var organization = req.body.organization
    var mass_department_id = req.body.mass_department_id
    var mass_division_id = req.body.mass_division_id
    var contact = req.body.contact
    var reserve_mode = req.body.reserve_mode
    var reserve_value = req.body.reserve_value
    var reserve_date = req.body.reserve_date
    var entityId = req.body.reserve_time
    var identity_type = req.body.identity_type
    var identity_type_other = req.body.identity_type_other
    var type = req.body.type
    var type_description = req.body.type_description
    var counter_number = req.body.counter_number
    var counter_code = req.body.counter_code
    var price = req.body.price
    var content = req.body.content
    var citizen_contact_phone = req.body.citizen_contact_phone
    var admin_contact_phone = req.body.admin_contact_phone
    var email = req.body.email
    var active = req.body.active
    var created_at = req.body.created_at
    var created_by = req.body.created_by
    var updated_at = req.body.updated_at
    var updated_by = req.body.updated_by
    
    try{

      data.entityId = entityId
      data.image = image
      data.organization =organization
      data.mass_department_id =mass_department_id
      data.mass_division_id =mass_division_id
      data.contact=contact
      data.reserve_date= reserve_date
      data.reserve_mode=reserve_mode
      data.reserve_time= reserve_time
      data.reserve_value=reserve_value
      data.identity_type=identity_type
      data.identity_type_other= identity_type_other
      data.type=type
      data.type_description=type_description
      data.counter_number=counter_number
      data.counter_code=counter_code
      data.price =price
      data.content=content
      data.citizen_contact_phone= citizen_contact_phone
      data.admin_contact_phone=admin_contact_phone
      data.email=email
      data.active=active
      data.created_at=created_at
      data.created_by=created_by
      data.updated_at=updated_at
      data.updated_by=updated_by

      }catch(err){
        console.log(err)
        res.status(500).send("ระบบมีปัญหา")
      }
   
    return res.status(200),data.entityId,"ระบบบันทึกแล้ว"
    
});
app.put('/entity', async(req ,res)=>{
      const data = null;

      

   
      

});
app.get('/information/:entityId/:type', async(req ,res)=>{
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
app.post('/information', async(req ,res)=>{
  try{
      const entityId = req.params.entityId
      const type = req.params.type
  }catch(err){
      console.log(err)
      res.status(500).send("ระบบมีปัญหา")
  }
 
  
  return entityId,type,res.status(200).statusMessage("ok")

});

app.get('/server/opentime',async(req,res)=>{
  try{
 
  }catch(err){
      console.log(err)
      res.status(500).send("ระบบมีปัญหา")
  }
 
  return res.status(200)
  
});
app.get('/timeslots/:entityId',async(req,res)=>{
  return res.status(200)
    
});

app.get('/timeslots?date=:date',async(req,res)=>{
    try{
   
    }catch(err){
        console.log(err)
        res.status(500).send("ระบบมีปัญหา")
    }
    return res.status(200)
      
  });

 
app.get('/timeslots/:entityId/:date',async(req,res)=>{
    try{
        const entityId = req.params.entityId
        const date = req.params.date
    }catch(err){
        console.log(err)
        res.status(500).send("ระบบมีปัญหา")
    }
   
    return res.status(200)
      
  });
 
app.post('/timeslots',async(req,res)=>{
    try{
        const entityId = req.body.entityId
        const dateList = req.body.date
        const timeslot = req.body.timeslot
    }catch(err){
        console.log(err)
        res.status(500).send("ระบบมีปัญหา")
    }
   
    return res.status(200)
      
  });

app.put('/timeslots',async(req,res)=>{
    try{
        const entityId = req.body.entityId
        const date = req.body.date
        const time = req.body.timeslot
        const action = req.body.action
        const value = req.body.value
    }catch(err){
        console.log(err)
        res.status(500).send("ระบบมีปัญหา")
    }
   
    return res.status(200)
      
  });
app.post('/token',async(req,res)=>{
    try{
      const idCardNumber = req.body.idCardNumber
      const entityId = req.body.entityId
      const date =  req.body.date
    }catch(err){
      console.log(err);
      res.status(500).send("ระบบมีปัญหา")
    }
   
    
    return res.status(200)
});
app.get('/users/:userId',async(req,res)=>{
  try{
      const idCardNumber = req.body.idCardNumber
      const entityId = req.body.entityId
      const date =  req.body.date
    }catch(err){
      console.log(err);
      res.status(500).send("ระบบมีปัญหา")
    }
return res.status(200),
       userId,
       entityId
});

app.post('/users',async(req,res)=>{
  try{
      const  uid  = req.body.uid
    }catch(err){
      console.log(err);
      res.status(500).send("ระบบมีปัญหา")
    }

  return res.status(200)
});

app.put('/users',async(req,res)=>{
  try{
      const  userId  = req.body.uid
      const key_to_update = req.body.key_to_update
    }catch(err){
      console.log(err);
      res.status(500).send("ระบบมีปัญหา")
    }
 
  return res.status(200)
});
//app.use('/', index);
app.use(morgan('tiny'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
 
);
//swagger(app)
app.listen(3000, () => console.log('server run listening on port 3000'));









