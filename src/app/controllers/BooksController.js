const Book = require('../models/Book')
const { mongooseToObject } = require('../../until/mongoose.js')
const { mutiplemongooseToObject } = require('../../until/mongoose.js')



class BooksController {

    libary(req, res, next) {
       
        Book.find({})
            .then(books => res.render('book/libary', {books: mutiplemongooseToObject(books)}))

            
    }

    show(req, res, next) {
       
        Book.findOne({ slug: req.params.slug })
            .then(book => res.render('book/show', {book: mongooseToObject(book)}))

            
    }

    create(req, res, next) {
        res.render('book/create')

    }

    store(req, res, next) {
        
        const book = new Book(req.body);
        book.save()
            .then(() => res.redirect('/books/stored'))

    }


    stored(req, res, next) {
        Book.find({})
            .then(books => res.render('book/stored', {books: mutiplemongooseToObject(books)}))
            
            
    }

    edit(req, res, next) {
       
        Book.findById(req.params.id)
            .then(book => res.render('book/edit', {book: mongooseToObject(book)}))

            
    }

    update(req, res, next) {
       
        Book.updateOne({ id: req.params.id }, req.body)
            .then(() => res.redirect('/books'))

            
    }


    delete(req, res, next) {
       
        Book.deleteOne({ id: req.params.id })
            .then(() => res.redirect('/books/stored'))

            
    }

    checkSubmit(req, res, next) {
       switch(req.body.action) {
           case 'delete':
            Book.deleteMany({ _id: {$in: req.body.bookIds} })
            .then(() => res.redirect('/books/stored'))

            break
            
       }
        
            
    }

}

module.exports = new BooksController