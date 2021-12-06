const Whey = require('../models/Whey')
const { mutiplemongooseToObject } = require('../../until/mongoose.js')

class MeController {

    

    wheysstore(req, res, next) {

        Whey.find({})
            .then(wheys => res.render('me/store-wheys', {wheys: mutiplemongooseToObject(wheys)}) )
        
            .catch(error => next(error))
    }


}

module.exports = new MeController