const mongoose = require('mongoose');
const express = require('express');

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
    res.send(`User ${user['name']} Created`);
});

router.get('/', async (req, res) => {
    let user = await User.find().sort('email')
    res.send(user);
});

router.put('/:email',(req, res) => {
    User.findOne({email: req.params.email}, async function(err, user){
        if (err) return res.status(404).send(`${err}`);
        if (user){
            user['name'] = req.body.name,
            user['email'] = req.body.email,
            user['country'] = req.body.country
            await user.save()
            res.send(`User ${user['email']} Updated`)
        }else{
            if (!user) res.status(404).send(`Not Found!`);
        };
    });
});

router.delete('/:email', async (req, res) => {
    User .findOne({email: req.params.email}, async (err, user) => {
        if (err) return res.status(400).send(`${err}`)
        if (user){
            user.deleteOne({email:user['email']})
            res.send("User Deleted")
        }else{
            if (!user) res.status(404).send("User Not Found!")
        }
        
    })
});

module.exports = router;