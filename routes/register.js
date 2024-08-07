const express = require('express')
const router = express.Router()
const controller = require('../controllers/UserController')
const db = require('../config/db');
const TABLE_NAME = 'Q_Timeslot_Time_Level'
const TABLE_Register = 'Q_Register'
module.exports = router

router.get('/register/:userId',async(req,res)=>{
   const userId =  req.params.userId;
   const entityId = req.body.entityId || {}
   var params = {
    TableName: TABLE_Register,
    IndexName: 'userId-index',
    KeyConditionExpression: 'userId = :hkey',
    ExpressionAttributeValues: {
        ':hkey': userId,
    }
   }
   var lasyKey = null;
   var res = [];
   do {
       //lasyKey ? (params.ExclusiveStartKey = lasyKey) : null;
       //var data = await dynamodbClient.query(params)
       //res = res.concat(data.Items);
       //lasyKey = data.LastEvaluatedKey;
   } while (data.LastEvaluatedKey);

   if (entityId) {
       res = _.filter(res, r => r.entityId == entityId)
   }

   //let today = getTodayYYYY_MM_DD()
   //res = _.filter(res, r => r.date >= today)

   //return success(res, { cache: 15 })
    
});

router