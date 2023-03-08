const userController = require('../controllers/user')
const express = require('express')
const router = express.Router()

router.get('/', userController.show)
 
module.exports = router
