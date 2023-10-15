const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const DB_URL = "mongodb+srv://oguzburhan:Sakarya101..@cluster0.8zkqxda.mongodb.net/"
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongoose.Promise = global.Promise;

// TODO - Update your mongoDB Atals Url here to Connect to the database
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


app.get('/', (req, res) => {
    res.send("<h1>Welcome to Note taking application - Week06 Exercise</h1>");
});

app.post('/', (req, res) => {
    // Handle the POST request
    res.send("Received POST request on root");
});

app.put('/', (req, res) => {
    // Handle the PUT request
    res.send("Received PUT request on root");
});


app.listen(8082, () => {
    console.log("Server is listening on port 8082");
});