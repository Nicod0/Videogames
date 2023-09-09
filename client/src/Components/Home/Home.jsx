import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import videoHome from "../../imagenes/meteoros.mp4";

const Home = () => {
  return (
    <div className={styles.container}>
      <video className={styles.video} autoPlay loop muted>
        <source src={videoHome} type="video/mp4" />
      </video>
      <div className={styles.content}>
        <div className={styles.centered}>
          <h1 className={styles.title}>VIDEOGAMES</h1>
          <p className={styles.text}>Discover the best game for you!</p>
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
