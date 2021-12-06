const newsRouter = require('./news.js')
const siteRouter = require('./site.js')
const coursesRouter = require('./courses.js')
const wheysRouter = require('./wheys.js')
const meRouter = require('./me.js')
const booksRouter = require('./books.js')

function route(app) {

    app.use('/books', booksRouter)

    app.use('/news', newsRouter);

    app.use('/courses', coursesRouter);

    app.use('/me', meRouter)
    
    app.use('/wheys', wheysRouter);

    app.use('/',siteRouter);
     

}

module.exports = route
