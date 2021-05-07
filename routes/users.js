const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const User = mongoose.model('User', new mongoose.Schema({
    name: String,
    country: String,
    email: String
}));

router.post('/', (req, res) => {
    const user = new User({
        name: req.body.name,
        country: req.body.country,
        email: req.body.email
    });
    await user.save();
    res.send(user);
});
