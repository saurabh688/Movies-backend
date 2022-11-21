const {
  saveMovieService,
  getMovieService,
} = require("../services/movieService");

const saveMovie = async (req, res) => {
//   console.log("Date:", new Date(), "req.body:", req.body);
  const movieData = req.body;
  const movie = await saveMovieService(req.body);
//   console.log("Date:", new Date(), "response from service:", movie);

  if (movie.success) {
    res.status(201).json(movie);
  } else {
    res.status(404).json(movie);
  }
};
const getMovies = async (req, res) => {
  const movie = await getMovieService();
//   console.log("Date:", new Date(), "response from service:", movie);

  if (movie.success) {
    res.status(200).json(movie);
  } else {
    res.status(404).json(movie);
  }
};

module.exports = {
  saveMovie,
  getMovies,
};
