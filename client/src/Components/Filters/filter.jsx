import { useDispatch } from "react-redux";
import style from "./filter.module.css";
import {
  order,
  orderByRating,
  filterByGenre,
  filterByOrigin,
} from "../../Redux/Actions";

const Ordered = () => {
  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(order(event.target.value));
  };

  const handleOrderRating = (event) => {
    let ratingOrder = "mayor";
    if (event.target.value === "menor") {
      ratingOrder = "menor";
    }
    dispatch(orderByRating(ratingOrder));
  };

  const handleFilterGenre = (event) => {
    const genre = event.target.value;
    dispatch(filterByGenre(genre));
  };

  const handleFilterOrigin = (event) => {
    const origin = event.target.value;
    dispatch(filterByOrigin(origin));
  };

  return (
    <div className={style.container}>
      <div className={style.separador}>
        <div>
          <select onChange={handleOrder} name="ordenamiento" id="order">
            <option defaultChecked value="0">
              Cualquier orden
            </option>
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>
        </div>
        <div>
          <select
            onChange={handleOrderRating}
            name="ordenamiento_rating"
            id="rating"
          >
            <option defaultChecked value="0">
              Cualquier rating
            </option>
            <option value="mayor">Mayor rating</option>
            <option value="menor">Menor rating</option>
          </select>
        </div>
      </div>
      <div className={style.separador_dos}>
        <div>
          <select onChange={handleFilterGenre} name="filtro_genero" id="genre">
            <option defaultChecked value="all">
              Todos los géneros
            </option>
            <option value="Action">Action</option>
            <option value="Indie">Indie</option>
            <option value="Adventure">Adventure</option>
            <option value="RPG">RPG</option>
            <option value="Strategy">Strategy</option>
            <option value="Shooter">Shooter</option>
            <option value="Casual">Casual</option>
            <option value="Simulation">Simulation</option>
            <option value="Puzzle">Puzzle</option>
            <option value="Arcade">Arcade</option>
            <option value="Platformer">Platformer</option>
            <option value="Massively Multiplayer">Massively Multiplayer</option>
            <option value="Racing">Racing</option>
            <option value="Sports">Sports</option>
            <option value="Fighting">Fighting</option>
            <option value="Family">Family</option>
            <option value="Board Games">Board Games</option>
            <option value="Educational">Educational</option>
            <option value="Card">Card</option>
          </select>
        </div>
        <div>
          <select
            onChange={handleFilterOrigin}
            name="filtro_origen"
            id="origin"
          >
            <option defaultChecked value="all">
              Todos los orígenes
            </option>
            <option value="API">API</option>
            <option value="Database">Database</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Ordered;
