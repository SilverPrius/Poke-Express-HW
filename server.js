//Load express
const express = require('express')

//Create express app
const app = express()

//Set port
const port = 3000

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

app.listen(port, () => {
    console.log(`Listening to port ${port}` )
})