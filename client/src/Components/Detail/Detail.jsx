import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Style from "./Detail.module.css";
import videoPrincipal from "../../imagenes/fondo.mp4";

const Detail = (props) => {
  const allVideogames = useSelector((state) => state.allVideogames);
  const { id } = useParams();
  const [videogame, setVideogame] = useState({});

  useEffect(() => {
    setVideogame(allVideogames.find((game) => game.id == id));
  }, []);

  const genre = videogame.genres
    ? videogame.genres.map((genre) => genre.name).join(", ")
    : "";
  return (
    <div>
      <video className={Style.video} autoPlay loop muted>
        <source src={videoPrincipal} type="video/mp4" />
      </video>
      <div className={Style.container}>
        {videogame.name ? (
          <>
            <div className={Style.texto}>
              <h2 className={Style.titulo}>{videogame.name}</h2>
              <div className={Style.info}>
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
                <p>Generos: {genre} </p>
              </div>
            </div>
            <img src={videogame.imagen} alt="img" className={Style.imagen} />
          </>
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    </div>
  );
};

export default Detail;
