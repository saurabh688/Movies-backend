const mongoose = require("mongoose");
const schema = mongoose.Schema;

const SavedMovieSchema = new schema(
  {
    id: { type: String },
    movieName: { type: String },
  },
  {
    timestamps: true,
  }
);

const savedMovie = mongoose.model('savedMovies', SavedMovieSchema);
module.exports = savedMovie;
