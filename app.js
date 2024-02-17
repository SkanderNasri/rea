// Initialise Express

const express = require('express');
const app = express();


// Create a simple Route ==> sends Skander whenever someone makes a call
app.get('/names', (rep, res) => {
    res.send('Skander');
});


// Initialising a listening port
app.listen(5000, () => {
    console.log("Server is runnig on port 5000");
});