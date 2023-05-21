import { Link } from "react-router-dom";
import style from "./Card.module.css";
const Card = ({ id, name, imagen, genero, onClose }) => {
  return (
    <div className={style.container}>
      <button
        onClick={() => {
          onClose(id);
        }}
      >
        X
      </button>
      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
      </Link>
      <p>Generos: {genero}</p>
      <img src={imagen} alt="" />
    </div>
  );
};
export default Card;
