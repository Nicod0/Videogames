import Card from "../Card/Card";
import style from "./Cards.module.css";

const Cards = ({ allVideogames, onClose }) => {
  return (
    <div className={style.container}>
      {allVideogames.map(({ id, name, imagen, genero }) => {
        return (
          <Card
            id={id}
            key={id}
            name={name}
            imagen={imagen}
            genero={genero}
            onClose={onClose}
          />
        );
      })}
    </div>
  );
};
export default Cards;
