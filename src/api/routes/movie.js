const router = require("express").Router();

const { saveMovie, getMovies } = require("../controller/movieController");

router.post("/movies/saveMovie", saveMovie);
router.get("/movies/getMovies", getMovies);

module.exports = router;
