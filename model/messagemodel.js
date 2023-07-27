// le model pour le message 

const mongoose = require('mongoose');
const messageSchema = mongoose.Schema({
    sender_id: {
        type: mongoose.Types.ObjectId,
        required: true,
    },

    recipient_id: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    
    text : {
        type : String,
        required: true,
    },

    creatd_at:{
        type: Date,
        default : Date.now(),
    }
})


const message = mongoose.model('message', messageSchema)