const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
  
const app = express()
const port = process.env.PORT || 3000

app.use(express.json()) 

app.post('/users', (req, res) => {
    const user = new User({
        "name": "chijioke joseph",
        "email": "joseph@gmail.com",
        "password": "joe182crazy"
    })

    user.save().then(() => {
       res.send(user)
    }).catch(() => {

    })
})

app.listen(port, () => {
    console.log('Server is connected on port ' + port)
})