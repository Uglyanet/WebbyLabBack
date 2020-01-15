const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FilmsSchema = new Schema({
    title: String,
    release_year: Number,
    format: String,
    stars: Array
});

const Film = mongoose.model("film", FilmsSchema);

module.exports = Film;