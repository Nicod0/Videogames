import { useDispatch } from "react-redux";
import { filter } from "../../Redux/Actions";

const Filtered = () => {
  const dispatch = useDispatch();

  const filters = (event) => {
    dispatch(filter(event.target.value));
  };

  return (
    <div>
      <div>
        <select onChange={filters} name="ordenamiento" id="order">
          <option defaultChecked value="0">
            -
          </option>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
      </div>
      <div>
        <select onChange={filters} name="rating" id="rat">
          <option defaultChecked value="0">
            -
          </option>
          <option value="mayor">Mayor</option>
          <option value="menor">Menor</option>
        </select>
      </div>
    </div>
  );
};
export default Filtered;
