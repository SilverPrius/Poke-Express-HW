// Require mongoose
require('dotenv').config()

// Dependencies
const mongoose = require("mongoose")
const Pokemon = require("./pokemon.js")

// Global configuration -tell Mongoose where to connect with Mongo and have it connect with the sub-database tweets(if it doesn't exist, it will be created)
const mongoURI = process.env.MONGO_URI
const db = mongoose.connection

// Connect to Mongo
mongoose.connect(mongoURI)

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })


// Connection Error/Success
// Define callback functions for various events
db.on("error", (err) => console.log(err.message + " is mongod not running?"))
db.on("open", () => console.log("mongo connected: ", mongoURI))
db.on("close", () => console.log("mongo disconnected"))

const pokemon = [
    { name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur" },
    { name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur" },
    { name: "charmander", img: "http://img.pokemondb.net/artwork/charmander" },
    { name: "charizard", img: "http://img.pokemondb.net/artwork/charizard" },
    { name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle" },
    { name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle" }
];

// Creating many pokemon
Tweet.insertMany(manyPokemon)

    // if database transaction succeeds
    .then((pokemon) => {
        console.log(pokemon)
    })

    // if database transaction succeeds
    .then((pokemon) => {
        console.log(pokemon)
    })
    // if database transaction fails
    .catch((error) => {
        console.log(error)
    })
    // close db connection either way
    .finally(() => {
        db.close()
    })