const {
  getAllVideogames,
  createVideogameDB,
  getVideogameById,
} = require("../controllers/videogamesControllers");
const { Op } = require("sequelize");
const { Videogame, Genre } = require("../db");

const getVideogamesHandler = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const response = await getAllVideogames(name);
      if (response.length) {
        res.status(200).json(response);
      } else {
        res
          .status(404)
          .json({ message: "No se encontraron videojuegos con ese nombre." });
      }
    } else {
      const response = await getAllVideogames();
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getVideogameByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await getVideogameById(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postVideogameHandler = async (req, res) => {
  const {
    name,
    descripcion,
    plataformas,
    imagen,
    fechaDeLanzamiento,
    rating,
    generos,
  } = req.body;

  try {
    const newVideogame = await Videogame.create({
      name,
      descripcion,
      plataformas,
      imagen,
      fechaDeLanzamiento,
      rating,
    });
    // const response = await createVideogameDB(
    //   name,
    //   descripcion,
    //   plataformas,
    //   imagen,
    //   fechaDeLanzamiento,
    //   rating
    // );
    const genreNames = await Genre.findAll({
      where: {
        id: {
          [Op.in]: generos,
        },
      },
    });
    await newVideogame.addGenre(genreNames);
    // return newVideogame;
    return res.status(200).send("creado correctamente");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getVideogamesHandler,
  getVideogameByIdHandler,
  postVideogameHandler,
};
