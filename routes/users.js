const mongoose = require('mongoose');
const express = require('express');

const router = express.Router();

// User Model

const User = mongoose.model('User', new mongoose.Schema({
    name: {type: String, required: true},
    country: String,
    email: {type: String, unique: true}
}));

router.get('/', async (req, res) => {
    let user = await User.find().sort('email')
    res.send(user);
});

router.post('/', async (req, res) => { 
    let newUser = new User({
        name: req.body.name,
        country: req.body.country,
        email: req.body.email
    });
    user = await newUser.save();
    res.send(user);
    console.log(typeof(newUser))
});

router.put('/:email', async (req, res) => {
    User.findOne({email: req.params.email}, function(err, user){
        if (err) return res.status(404).send(`${err}`);
        if (user){
            user['name'] = req.body.name,
            user['email'] = req.body.email,
            user['country'] = req.body.country
            user.save()
            res.send(user)
        }else{
            if (!user) res.status(404).send(`Not Found!`);
        };
    });
});

module.exports = router;