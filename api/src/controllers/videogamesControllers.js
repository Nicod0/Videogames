const { Videogame } = require("../db");
const { API_KEY } = process.env;
const axios = require("axios");

const getAllVideogames = async (name) => {
  const videogamesDB = await getVideogamesDB();
  const videogamesApi = await getAllVideogamesApi();
  const allVideogames = [...videogamesDB, ...videogamesApi];

  if (name) {
    const videogamesFiltered = allVideogames.filter((videogame) =>
      videogame.name.toLowerCase().includes(name.toLowerCase())
    );
    if (videogamesFiltered.length) {
      return videogamesFiltered;
    }
  } else {
    return allVideogames;
  }
};

const getAllVideogamesApi = async () => {
  const allVideogamesApi = (
    await axios(`https://api.rawg.io/api/games?key=${API_KEY}`)
  ).data.results;
  const mapApi = allVideogamesApi.map((videogame) => {
    return {
      id: videogame.id,
      name: videogame.name,
      descripcion: videogame.description,
      plataformas: videogame.platforms.map(
        (platform) => platform.platform.name
      ),
      imagen: videogame.background_image,
      fechaDeLanzamiento: videogame.released,
      rating: videogame.rating,
    };
  });
  return mapApi;
};
const getVideogamesDB = async () => {
  const allVideogameDB = await Videogame.findAll();
  return allVideogameDB;
};

const getVideogameById = async (id) => {
  if (isNaN(id)) {
    const videogame = await findByPk(id);
    return videogame;
  }
  const videogame = (
    await axios(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
  ).data;
  const mapVideogame = {
    id: videogame.id,
    name: videogame.name,
    descripcion: videogame.description,
    plataformas: videogame.platforms.map((platform) => platform.platform.name),
    imagen: videogame.background_image,
    fechaDeLanzamiento: videogame.released,
    rating: videogame.rating,
  };
  return mapVideogame;
};

const createVideogameDB = async (
  name,
  descripcion,
  plataformas,
  imagen,
  fechaDeLanzamiento,
  rating
) => {
  const newVideogame = await Videogame.create({
    name,
    descripcion,
    plataformas,
    imagen,
    fechaDeLanzamiento,
    rating,
  });
  return newVideogame;
};

module.exports = {
  getAllVideogames,
  getVideogameById,
  createVideogameDB,
};
