//app.js
const express = require('express');
const app = express();
const ejs = require('ejs');
const db = require('./model/db');
const messageControlleur = require('./controleur/message');
const inscriptionControlleur = require('./controleur/inscription');
const connectionController = require('./controleur/user');




// connection avec ma db
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
});

// mes middleware
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use('connexion', connectionController)
app.use('messages', messageControlleur)
app.use('inscription', inscriptionControlleur)










const port = 3001 
app.listen(port, () => console.log(" serveur lancer au port : " + " " + port))