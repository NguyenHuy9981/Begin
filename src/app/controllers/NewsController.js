const Whey = require('../models/Whey')
const { mutiplemongooseToObject } = require('../../until/mongoose.js')

class NewsController {

    index(req, res, next) {

        Whey.find({})
            .then(wheys => res.render('news', {wheys: mutiplemongooseToObject(wheys)}))

            
            .catch(error => next(error))
    }
}

module.exports = new NewsController