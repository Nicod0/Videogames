import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const Detail = (props) => {
  const allVideogames = useSelector((state) => state.allVideogames);
  const { id } = useParams();
  const [videogame, setVideogame] = useState({});
  useEffect(() => {
    setVideogame(allVideogames.find((game) => game.id == id));
  }, []);
  return (
    <div>
      {videogame.name ? (
        <>
          <h2>{videogame.name}</h2>
          <p>id:{videogame.id} </p>
          <p>Plataformas: {videogame.plataformas}</p>
          <p>
            Descripcion:{" "}
            {videogame.descripcion ? (
              <>
                <p>{videogame.descripcion} </p>
              </>
            ) : (
              <p>No hay descripcion</p>
            )}
          </p>
          <p>Fecha de lanzamiento: {videogame.fechaDeLanzamiento}</p>
          <p>Rating: {videogame.rating}</p>
          <p>Generos: {videogame.generos} </p>
          <img src={videogame.imagen} alt="img" />
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};
export default Detail;
