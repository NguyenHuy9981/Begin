const Course = require('../models/Course')
const { mutiplemongooseToObject } = require('../../until/mongoose.js')

class SiteController {

    search(req,res) {
        res.render('search')
    }

    index(req,res,next) {
        
        let perPage = 4; // số lượng sản phẩm xuất hiện trên 1 page
        let page = req.params.page || 1; 

        Course.find({}).skip((perPage * page) - perPage) // Trong page đầu tiên sẽ bỏ qua giá trị là 0
        .limit(perPage)
           .then(courses => {
                res.render('home', {
                    courses: mutiplemongooseToObject(courses)
                })
           })
           .catch(error => next(error))
    }

    
    pagination(req,res,next) {
        
        let perPage = 4; // số lượng sản phẩm xuất hiện trên 1 page
        let page = req.params.page || 1; 

        
        Promise.all([Course.find({}).skip((perPage * page) - perPage).limit(perPage), Course.countDocuments()])
        .then(([courses, count]) =>
            res.render('home', {
                courses: mutiplemongooseToObject(courses),
                count: count / perPage
            })
        )

        /*Course.countDocuments()
        .then(count =>
            console.log(count)
            )
        

        Course.find({}).skip((perPage * page) - perPage) // Trong page đầu tiên sẽ bỏ qua giá trị là 0
        .limit(perPage)
        
           .then(courses => {
                res.render('home', {
                    courses: mutiplemongooseToObject(courses),
                })
           })
           .catch(error => next(error))*/
    }


}

module.exports = new SiteController



