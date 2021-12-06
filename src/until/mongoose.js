module.exports = {

    mutiplemongooseToObject: function(mongooses) {
        return mongooses.map(mongoose => mongoose.toObject())
    },

    mongooseToObject: function(mongoose) {
        return mongoose.toObject() 
    }

}