const {
  getAllVideogames,
  createVideogameDB,
  getVideogameById,
} = require("../controllers/videogamesControllers");

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
  const { name, descripcion, plataformas, imagen, fechaDeLanzamiento, rating } =
    req.body;
  try {
    const response = await createVideogameDB(
      name,
      descripcion,
      plataformas,
      imagen,
      fechaDeLanzamiento,
      rating
    );
    return res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getVideogamesHandler,
  getVideogameByIdHandler,
  postVideogameHandler,
};
