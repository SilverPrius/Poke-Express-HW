//Load express
const express = require('express')

//Create express app
const app = express()

const pokemon = []

//Index route = SHOW ALL
app.get('/pokemon/', (req, res) => {
    res.send(pokemon)
})

//New = GET A FORM TO CREATE A NEW RECORD
//Delete - DELETE
//Update - MODIFYING A RECORD
//Create - SEND THE FILLED FORM TO DATABASE AND CREATE A NEW RECORD
//Edit - GO TO DATABASE AND GET THE RECORD TO UPDATE

//Show route = SHOW ME A PARTICULAR RECORD

//Set port
const port = 3000

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

app.listen(port, () => {
    console.log(`Listening to port ${port}` )
})