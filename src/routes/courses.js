const express = require('express')
const router = express.Router()
const courseController = require('../app/controllers/CourseController')

router.post('/checkSubmit', courseController.checkSubmit)
router.get('/create', courseController.create)
router.post('/store', courseController.store)
router.get('/stored', courseController.stored)
router.get('/:id/edit', courseController.edit)
router.put('/:id/update', courseController.update)
router.delete('/:id/delete', courseController.delete)
router.get('/:slug', courseController.show)


module.exports = router