require('dotenv').config()

// Dependencies
const mongoose = require("mongoose")
const Pokemon = require("./models/pokemon.js")
const methodOverride = require('method-override')

//Load express
const express = require('express')

// Global configuration -tell Mongoose where to connect with Mongo and have it connect with the sub-database tweets(if it doesn't exist, it will be created)
const mongoURI = process.env.MONGO_URI
const db = mongoose.connection
//Create express app

const app = express()


//Set port
const port = 3000

// Connect to Mongo
mongoose.connect(mongoURI)
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })

// Connection Error/Success
// Define callback functions for various events
db.on("error", (err) => console.log(err.message + " is mongod not running?"))
db.on("open", () => console.log("mongo connected: ", mongoURI))
db.on("close", () => console.log("mongo disconnected"))

//Set up middleware
app.use(methodOverride('_method'))

app.use((req, res, next) => {
    console.log('I run for all routes')
    next()
})

app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

mongoose.set('strictQuery', true)

//Setup jsx view engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// Setting up Mongoose
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connection.once('open', () => {
    console.log('connected to mongo')
})

// Index route = Show all records
app.get('/pokemon', (req, res) => {
    Pokemon.find({}, (error, pokemon) => {
        res.render('Index', {
            pokemon: pokemon // getting all pokemons from db to pass as props
        })
    })
})

//New - GET A FORM TO CREATE A NEW RECORD
app.get('/pokemon/new', (req, res) => {
    res.render('New')
})

//Delete - DELETE
app.delete('/pokemon/:id', (req, res) => {
    Pokemon.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/pokemon')//redirect back to pokemon index
    })
})

//Update - MODIFYING A RECORD
app.put('/pokemon/:id', (req, res) => {
    Pokemon.findByIdAndUpdate(req.params.id, req.body, (err, updatedPokemon) => {
        console.log(updatedPokemon)
        res.redirect(`/pokemon/${req.params.id}`) //redirecting to the SHOW page
    })
})


//Create - SEND THE FILLED FORM TO DATABASE AND CREATE A NEW RECORD
app.post('/pokemon', (req, res) => {
    let pokemonBody = req.body
    pokemonBody.img = pokemonBody.name
    Pokemon.create(pokemonBody, (error, createdPokemon) => {
        res.redirect('/pokemon')
    })

})

//Edit - GO TO DATABASE AND GET THE RECORD TO UPDATE
app.get('/pokemon/:id/edit', (req, res) => {
    Pokemon.findById(req.params.id, (err, foundPokemon) => { //find the pokemon
        if (!err) {
            res.render(
                'Edit',
                {
                    pokemon: foundPokemon //pass in the found pokemon so we can prefill the form
                }
            )
        } else {
            res.send({ msg: err.message })
        }
    })
})


//Show route = SHOW ME A PARTICULAR RECORD
app.get('/pokemon/:indexOfPokemonsArray', function (req, res) {
    Pokemon.findById(req.params.indexOfPokemonsArray, (err, foundPokemon) => {
        res.render('Show', {
            pokemon: foundPokemon
        })
    })
})


app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})

