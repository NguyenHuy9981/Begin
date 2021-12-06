const express = require('express')
const router = express.Router()
const meController = require('../app/controllers/MeController')

router.get('/store/wheys', meController.wheysstore)



module.exports = router