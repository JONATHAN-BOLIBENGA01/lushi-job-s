// controleur
const express = require('express')
const message = require('../model/messagemodel')

const messageControlleur = express.Router();

messageControlleur.get('/:userId',async(req, res)=>{
    const userId = req.params.userId
    const messages = await message.find({
        sender_id:userId, 
        recipient_id: userId 
    })
    res.json(messages)
} )

messageControlleur.post('/', async(req, res)=>{
    //const {sender_id, recipient_id, text} = req.body
    const message = await message.findOne({ 
        sender_id:req.session.userId,
        recipient_id:req.session.userId
    })

      if(message){
        res.status(400).json({message: " ces message existe dejas "})
    }else{
        const Newmessage =  new message({
            sender_id: req.session.userId,
            recipient_id: req.params.recipientId,
            text: req.body.text
        })
    }
    
    await Newmessage.save();
    res.status(201).json(Newmessage);
})

messageControlleur.post('/:mssageId', async(req, ress)=>{
    //const message_id = req.params.mssageId;
    const message = await message.Newmessage.findOne({_id:req.params.mssageId});
    
    if(message){
        await message.deleteOne();
        res.statuts(200).json();
    }else{
        res.status(404).json({message: " ce message n’existe pas "})
    }
})

module.exports = messageControlleur






