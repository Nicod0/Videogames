import { useDispatch } from "react-redux";
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
    <div>
      <div>
        <select onChange={handleOrder} name="ordenamiento" id="order">
          <option defaultChecked value="0">
            -
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
            -
          </option>
          <option value="mayor">Mayor rating</option>
          <option value="menor">Menor rating</option>
        </select>
      </div>
      <div>
        <select onChange={handleFilterGenre} name="filtro_genero" id="genre">
          <option defaultChecked value="all">
            Todos los géneros
          </option>
          <option value="Action">Action</option>
          <option value="Indie">Indie</option>
          {/* Agrega aquí los demás géneros */}
        </select>
      </div>
      <div>
        <select onChange={handleFilterOrigin} name="filtro_origen" id="origin">
          <option defaultChecked value="all">
            Todos los orígenes
          </option>
          <option value="API">API</option>
          <option value="Database">Database</option>
          {/* Agrega aquí los demás orígenes */}
        </select>
      </div>
    </div>
  );
};

export default Ordered;
