const express = require('express')
const mongoose = require('mongoose')
const users = require('./routes/users')

const app = express()

const URL = `mongodb+srv://user1:kAuaV2zr0pm30QsV@cluster0.0l8d3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const connetionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}

mongoose.connect(URL, connetionParams)
    .then(() => console.log("Connected to database"))
    .catch(err => console.error(`Connection to db failed. ${err}`))

app.use(express.json())
app.use('/api/users', users)


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server up and running on port ${port}..`)
});
