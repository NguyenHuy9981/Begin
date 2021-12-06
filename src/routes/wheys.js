const express = require('express')
const router = express.Router()
const wheyController = require('../app/controllers/WheyController')

router.post('/checkForm', wheyController.checkForm)
router.post('/create', wheyController.store)
router.get('/create', wheyController.create)
router.get('/:id/edit', wheyController.edit)
router.put('/:id/update', wheyController.update)
router.delete('/:id/delete', wheyController.delete)
router.get('/:slug', wheyController.show)

module.exports = router