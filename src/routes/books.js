const express = require('express')
const router = express.Router()
const booksController = require('../app/controllers/BooksController')


router.post('/checkSubmit',booksController.checkSubmit)
router.get('/create',booksController.create)
router.delete('/:id/delete',booksController.delete)
router.post('/store',booksController.store)
router.get('/stored',booksController.stored)
router.get('/:id/edit',booksController.edit)
router.put('/:id/update',booksController.update)
router.get('/:slug',booksController.show)
router.get('/',booksController.libary)



module.exports = router

