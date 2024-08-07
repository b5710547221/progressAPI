const express = require('express')
const router = express.Router()
module.exports = router
router.use('/api/v1/', require('./users'))
router.use('/api/v1/', require('./information'))
router.use('/api/v1/', require('./register'))