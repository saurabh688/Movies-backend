const savedMovie = require("../model/savedMovies");

const saveMovieService = async (data) => {
  try {
    const addMovie = new savedMovie(data);
    const response = await addMovie.save();
    console.log(response);
    return {
        success: true,
        message: 'Movie saved',
        data: response
    };
  } catch (error) {
    return {
      success: false,
      message: error,
    };
  }
};
const getMovieService = async (data) => {
  try {
    const result = await savedMovie.find({});
    // console.log(result);
    return {
        success: true,
        message: 'List of movies found!',
        data: result
    };
  } catch (error) {
    return {
      success: false,
      message: error,
    };
  }
};

module.exports = {
  saveMovieService,
  getMovieService,
};
