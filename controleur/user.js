// mon controleur pour la connection des utilisateurs

const express = require('express');
const user = require('../model/model');

const connectionController = express.Router();

 connectionController.post('/', async(req, res) =>{
    const {email, password} = req.body

    const user = await userModel.findOne({email}) 
    // je verifie si l’utilisateur existe et si son  mot de passe est correcte
    if(!user || !user.matchPassword(password)){ 
        res.status(401).json({ message : " mot de passe incorrect ou identifiant " });
        return
    }
    // je cree une nnouvelle session pour l’utilisateur
    req.session.user = user;
     res.redirect('/Acceuil');
})
 module.exports = connectionController

