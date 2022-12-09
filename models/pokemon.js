const mongoose = require("mongoose")
 const Schema = mongoose.Schema
 const model = mongoose.model

 const pokemonSchema = new mongoose.Schema({
   name: { type: String, required: true },
   img: { type: String, required: true },
 });
 
 // Creating Pokemon model : We need to convert our schema into a model-- will be stored in 'pokemon' collection.  Mongo does this for you automatically
// Models are fancy constructors compiled from Schema definitions
// An instance of a model is called a document.
// Models are responsible for creating and reading documents from the underlying MongoDB Database
// from here: https://mongoosejs.com/docs/models.html
 const Pokemon = mongoose.model("Pokemon", pokemonSchema)


//make this exportable to be accessed in `app.js`
 module.exports = Pokemon