//Load express
const express = require('express')

//Create express app
const app = express()

const pokemon = require('./models/pokemon.js')

//Set port
const port = 3000

//Setup jsx view engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


//Index route = SHOW ALL
app.get('/pokemon/', (req, res) => {
    res.render('Index', { pokemon: pokemon })
})

//New - GET A FORM TO CREATE A NEW RECORD
//Delete - DELETE
//Update - MODIFYING A RECORD
//Create - SEND THE FILLED FORM TO DATABASE AND CREATE A NEW RECORD
//Edit - GO TO DATABASE AND GET THE RECORD TO UPDATE

//Show route = SHOW ME A PARTICULAR RECORD
app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon/:id', (req, res) => {
    res.render('Show', { pokemon: pokemon[req.params.id] })
})


app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})

