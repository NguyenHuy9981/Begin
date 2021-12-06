const Whey = require('../models/Whey')
const { mongooseToObject } = require('../../until/mongoose.js')
const { mutiplemongooseToObject } = require('../../until/mongoose.js')

class NewsController {

    show(req, res, next) {

        Whey.findOne({ slug: req.params.slug })
            .then(whey => res.render('wheys/show', {whey: mongooseToObject(whey)}))

            
            .catch(error => next(error))
    }


    edit(req, res, next) {

        Whey.findById(req.params.id)
            .then(whey => res.render('wheys/edit', {whey: mongooseToObject(whey)}))
            
            .catch(error => next(error))
    }


    update(req, res, next) {

        Whey.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/store/wheys'))
    }

    delete(req, res, next) {

        Whey.deleteOne({ id: req.params.id  })
            .then(() => res.redirect('/me/store/wheys'))
    }

    create(req, res, next) {
        
        res.render('wheys/create')
        
    }


    store(req, res, next) {

        const whey = new Whey(req.body);
        whey.save()
            .then(() => res.redirect('/me/store/wheys'))
    }

    checkForm(req, res, next) {

        switch(req.body.action) {
            case 'delete':
            Whey.deleteOne({ _id: {$in: req.body.WheyIds} })
            .then(() => res.redirect('/me/store/wheys'))
            break
        }

    }
    
    
}

module.exports = new NewsController