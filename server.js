const express = require('express')
const mongoose = require('mongoose')

const app = express()

const URL = ``
const connetionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(URL, connetionParams)
    .then(() => console.log("Connected to database")) 
    .catch(err => console.error(`Connection to db failed. ${err}`))


app.listen(3000, () => {
    console.log(`Server up and running..`)
});
