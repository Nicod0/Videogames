import { Link } from "react-router-dom";
import styles from "./Card.module.css";

const Card = ({ id, name, imagen, genero }) => {
  return (
    <Link to={`/detail/${id}`} className={styles.link}>
      <div className={styles.card}>
        <div className={styles.card_container}>
          <div className={styles.card}>
            <div className={styles.img_content}>
              <img className={styles.img} src={imagen} alt="" />
            </div>
            <div className={styles.content}>
              <p className={styles.heading}>{name}</p>
              <p>{genero}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
