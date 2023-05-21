const { Genre } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;

const getAllGenres = async () => {
  const genres = await Genre.findAll();

  if (genres.length > 0) {
    return genres;
  } else {
    const response = (
      await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
    ).data.results;

    const mappedGenres = response.map((genre) => {
      return {
        name: genre.name,
      };
    });

    await Genre.bulkCreate(mappedGenres);

    const savedGenres = await Genre.findAll();
    return savedGenres;
  }
};

module.exports = {
  getAllGenres,
};
