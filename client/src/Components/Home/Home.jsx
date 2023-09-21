import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import videoHome from "../../imagenes/dardo.mp4";

const Home = () => {
  return (
    <div className={styles.container}>
      <video className={styles.video} autoPlay loop muted>
        <source src={videoHome} type="video/mp4" />
      </video>
      <div className={styles.content}>
        <div className={styles.centered}>
          <h1 className={styles.title}>¡Bienvenido a mi aplicación!</h1>
          <p className={styles.text}>
            Sumérgete en el emocionante mundo de los videojuegos, explora una
            amplia variedad de todos los géneros, desde acción y aventuras hasta
            rompecabezas y simuladores. <br></br> <br></br>Mi aplicación te
            permite acceder a una impresionante biblioteca de juegos,
            mostrándote detalles esenciales como el nombre, el género, las
            plataformas disponibles y la clasificación de cada juego. Además,
            puedes crear tus propias listas de juegos favoritos y seguir
            descubriendo nuevas joyas del mundo de los videojuegos. <br></br>{" "}
            <br></br>¡Comienza a explorar el emocionante universo de los
            videojuegos como nunca antes!
          </p>
          <Link to="/page">
            <button data-text="Awesome" className={styles.button}>
              <span className={styles.actual_text}>&nbsp;iniciar&nbsp;</span>
              <span className={styles.hover_text} aria-hidden="true">
                &nbsp;iniciar&nbsp;
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
