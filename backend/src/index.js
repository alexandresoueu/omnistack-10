const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://calexandredev:HicuHC04zsDIhQu2@cluster0-xc7ik.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

app.use(express.json())
app.use(routes)

app.listen(3333)
