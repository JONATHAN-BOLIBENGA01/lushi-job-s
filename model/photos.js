const mongoose = require('mongoose');

const pohtoSchema = mongoose.Schema({
    photo:{
        type: String,
        required: true,
    },

    description:{
        type: String,
        required: true,
        
    },     
                       
    creatadAt:{
        type: Date,
        default: Date.now(),
    }

})

module.exports = mongoose.model('photos', pohtoSchema)