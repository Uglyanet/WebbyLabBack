const express = require("express");
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

const MONGODB_URI = `mongodb+srv://Maximilian99:Maximilian99@cluster0-q0bjd.mongodb.net/test?retryWrites=true&w=majority`;



const app = express();
mongoose.connect(MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

mongoose.connection.on('connected', () => {
    console.log('DB is connected')
});

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json());
app.use("/api", require("./api"));

app.listen(4000, () => {
    console.log("server is running on port 4000");
});