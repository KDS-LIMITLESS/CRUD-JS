const mongoose = require('mongoose');
const express = require('express');
const { response } = require('express');

const router = express.Router();

// User Model

const User = mongoose.model('User', new mongoose.Schema({
    name: {type: String, required: true},
    country: String,
    email: {type: String, unique: true}
}));


router.post('/', async (req, res) => { 
    let newUser = new User({
        name: req.body.name,
        country: req.body.country,
        email: req.body.email
    });
    user = await newUser.save();
    res.status(200).send({"message": "Succesful", user,  "User Created": "100%"});
});

router.get('/', async (req, res) => {
    User.find(async (err, users) => {
        if (err) return res.status(500).send({"message": "Server Error", "Error": err})
        if (users) res.status(200).send({"message": "Succesful", users});
    }).sort('email')
});

router.put('/:email',(req, res) => {
    User.findOne({email: req.params.email}, async (err, user) => {
        if (err) return res.status(404).send(`${err}`);
        if (user){
            user['name'] = req.body.name,
            user['email'] = req.body.email,
            user['country'] = req.body.country
            await user.save()
            res.status(200).send({"message": "Succesful", user, "User Updated": "100%"});
        }else{
            if (!user) res.status(404).send({"message": "Error", "Data": "User Not Found"});
        };
    });
});

router.delete('/:email', (req, res) => {
    User .findOne({email: req.params.email}, (err, user) => {
        if (err) return res.status(400).send(`${err}`)
        if (user){
            user.deleteOne({email:user['email']})
            res.status(200).send({"message": "Succesful", "User Deleted": "100%"});
        }else{
            if (!user) res.status(400).send({"message": "Error", "Data": "User Not Found"});
        }
        
    })
});

module.exports = router;