import { Link } from "react-router-dom";
import { useState } from "react";

import style from "./Card.module.css";

const Card = ({ id, name, imagen, genero }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className={`${style.container} ${hovered ? style.hovered : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={`/detail/${id}`} className={style.link}>
        {hovered && <h2>{name}</h2>}
        <img src={imagen} alt="" />
        <p>Generos: {genero}</p>
      </Link>
    </div>
  );
};

export default Card;
