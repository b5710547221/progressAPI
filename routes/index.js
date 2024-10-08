const express = require('express')
const router = express.Router()
router.use('api/v1', require('./entity'))
router.use('api/v1', require('./information'))
router.use('api/v1', require('./register'))
router.use('api/v1', require('./report'))
router.use('api/v1', require('./server'))
router.use('api/v1', require('./timeslots'))
router.use('api/v1', require('./token'))
router.use('api/v1', require('./users'))

module.exports = router