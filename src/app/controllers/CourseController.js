const Course = require('../models/Course')
const { mongooseToObject } = require('../../until/mongoose.js')
const { mutiplemongooseToObject } = require('../../until/mongoose.js')

class CourseController {

    show(req, res, next) {

        Course.findOne({ slug: req.params.slug })
            .then(course => 
                res.render('courses/show', {course: mongooseToObject(course)
                })
            )

            .catch(error => next(error))
    }

    
    create(req, res, next) {

        res.render('courses/create')
    }

    
    store(req, res, next) {

        req.body.image = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg`
        const course = new Course(req.body);
        course.save()
            .then(() => res.redirect('/courses/stored'))
    }
    

    
    stored(req, res, next) {
        
        const typeCondition = ['asc', 'desc'].includes(req.query.type)
        let courseSort = Course.find({})
        
        if(req.query.hasOwnProperty('_sort')) {
            courseSort.sort({
                [req.query.column]: typeCondition ? req.query.type : 'asc'
                
                
            })
        }

        courseSort
           .then(courses => {
                res.render('courses/stored', {
                    courses: mutiplemongooseToObject(courses)
                })
           })
           .catch(error => next(error))
    }

    
    edit(req, res, next) {

        Course.findById(req.params.id)
            .then(course => 
                res.render('courses/edit', {course: mongooseToObject(course)
                })
            )

            .catch(error => next(error))
    }

    
    update(req, res, next) {

        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/courses/stored'))

            .catch(error => next(error))
    }


    delete(req, res, next) {

        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))

            .catch(error => next(error))
    }


    checkSubmit(req, res, next) {
        switch(req.body.action) {

            case 'delete':
            Course.deleteMany({ _id: {$in: req.body.courseIds} })
                .then(() => res.redirect('back'))

                .catch(error => next(error))
            break
            case 'edit':  
            Course.findById(req.body.courseIds)
                .then(course => 
                        res.render('courses/edit', {course: mongooseToObject(course)
                        })
                    )
                .catch(error => next(error))
            break   
            
            default: res.json('Lỗi')

        }
           
    }

    
        
    



}

module.exports = new CourseController