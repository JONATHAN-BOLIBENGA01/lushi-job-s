
//db.js
const mongoose = require('mongoose')
const uri = 'mongodb+srv://wetokyajonathan:ex2124@apijs.jj2ceuv.mongodb.net/lushiJobs'

mongoose.connect(uri, { useNewUrlParser: true })
    .then(() => console.log("mongodb est connecter"))
    .catch(err => console.error("echec de la connection avec la db "));

module.exports = mongoose.connection


