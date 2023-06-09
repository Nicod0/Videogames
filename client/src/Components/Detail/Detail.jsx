import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Style from "./Detail.module.css";

const Detail = (props) => {
  const allVideogames = useSelector((state) => state.allVideogames);
  const { id } = useParams();
  const [videogame, setVideogame] = useState({});

  useEffect(() => {
    setVideogame(allVideogames.find((game) => game.id == id));
  }, []);

  return (
    <div className={Style.container}>
      {videogame.name ? (
        <>
          <h2>{videogame.name}</h2>
          <p>id: {videogame.id} </p>
          <p>Plataformas: {videogame.plataformas}</p>
          <p>
            Descripcion:{" "}
            {videogame.descripcion ? (
              <>
                <p>{videogame.descripcion} </p>
              </>
            ) : (
              <p>No hay descripción</p>
            )}
          </p>
          <p>Fecha de lanzamiento: {videogame.fechaDeLanzamiento}</p>
          <p>Rating: {videogame.rating}</p>
          <p>Generos: {videogame.genero} </p>
          <img src={videogame.imagen} alt="img" />
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default Detail;
