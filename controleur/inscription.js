const express = require('express')
const user =  require('../model/model')

const inscriptionControlleur = express.Router()

inscriptionControlleur.post ('/', async(req, res)=>{
    const {name, email, password} = req.body;

    const user = await userSchema.findOne({
        name,
        email,
    })
    if(user){
        res.status(400).json({message : 'cet nom d’utilisteur ou cet email existe déjàs'})
        return;
    }
    const newUser = new userSchema({
        name,
        email,
        password
    })
    await newUser.save();
    req.session.user = newUser
     res.redirect('/Acceuil');
})
module.exports = inscriptionControlleur