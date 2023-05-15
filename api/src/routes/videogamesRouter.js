const { Router } = require("express");
const videogamesRouter = Router();
const {
  getVideogamesHandler,
  getVideogameByIdHandler,
  postVideogameHandler,
} = require("../handlers/videogamesHandler");

videogamesRouter.get("/", getVideogamesHandler);
videogamesRouter.get("/:id", getVideogameByIdHandler);
videogamesRouter.post("/", postVideogameHandler);

module.exports = videogamesRouter;
