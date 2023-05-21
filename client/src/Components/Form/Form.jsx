import { useState } from "react";
import { useDispatch } from "react-redux";
import { addVideogame } from "../../Redux/Actions/index";

const Form = () => {
  const dispatch = useDispatch();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [rating, setRating] = useState(1);
  const [state, setState] = useState({
    name: "",
    imagen: "",
    descripcion: "",
    plataformas: "",
    fechaDeLanzamiento: "",
  });
  const [errors, setErrors] = useState({
    name: "Nombre requirido",
    imagen: "Imagen requerida en formato URL",
    descripcion: "Descricpcion requerida",
    plataformas: "Plataformas requeridas",
    fechaDeLanzamiento: "Fecha de lanzamiento requerida",
  });
  const disable = () => {
    let disabled = true;
    for (let error in errors) {
      if (errors[error] === "") {
        disabled = false;
      } else {
        disabled = true;
        break;
      }
    }
    return disabled;
  };
  const validate = (input, name) => {
    if (name === "name") {
      if (input.name !== "") setErrors({ ...errors, name: "" });
      else setErrors({ ...errors, name: "Nombre requirido" });
      return;
    }
    if (name === "imagen") {
      if (input.imagen !== "") setErrors({ ...errors, imagen: "" });
      else setErrors({ ...errors, imagen: "imagen requerida en formato URL" });
      return;
    }
  };
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState({
      ...state,
      [name]: value,
    });
    validate(
      {
        ...state,
        [name]: value,
      },
      name
    );
  };

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value, 10));
  };

  const handleGenreChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedGenres([...selectedGenres, value]);
    } else {
      setSelectedGenres(selectedGenres.filter((genre) => genre !== value));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addVideogame(state));
  };

  return (
    <div>
      <h1>Guarda un videojuego!!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" onChange={handleChange} />
            {errors["name"]}
          </div>
          <div>
            <label htmlFor="imagen">Imagen:</label>
            <input type="text" name="imagen" onChange={handleChange} />
            {errors["imagen"]}
          </div>
          <div>
            <label htmlFor="descripcion">Descripcion:</label>
            <textarea
              name="descripcion"
              cols="30"
              rows="10"
              onChange={handleChange}
            />
            {errors["descripcion"]}
          </div>
          <div>
            <label htmlFor="plataformas">Plataformas:</label>
            <input type="text" name="plataformas" onChange={handleChange} />
            {errors["plataformas"]}
          </div>
          <div>
            <label htmlFor="fechaDeLanzamiento">Fecha de lanzamiento:</label>
            <input
              type="text"
              name="fechaDeLanzamiento"
              onChange={handleChange}
            />
            {errors["fechaDeLanzamiento"]}
          </div>
          <div>
            <label htmlFor="rating" onChange={handleRatingChange}>
              Rating:
            </label>
            <select name="rating" onChange={handleRatingChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div>
            <div>
              <label htmlFor="generos">Generos:</label>
              <label>
                <input
                  type="checkbox"
                  value="Action"
                  checked={selectedGenres.includes("Action")}
                  onChange={handleGenreChange}
                />
                Action
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="Indie"
                  checked={selectedGenres.includes("Indie")}
                  onChange={handleGenreChange}
                />
                Indie
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="Adventure"
                  checked={selectedGenres.includes("Adventure")}
                  onChange={handleGenreChange}
                />
                Adventure
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="RPG"
                  checked={selectedGenres.includes("RPG")}
                  onChange={handleGenreChange}
                />
                RPG
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="Strategy"
                  checked={selectedGenres.includes("Strategy")}
                  onChange={handleGenreChange}
                />
                Strategy
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="Shooter"
                  checked={selectedGenres.includes("Shooter")}
                  onChange={handleGenreChange}
                />
                Shooter
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="Casual"
                  checked={selectedGenres.includes("Casual")}
                  onChange={handleGenreChange}
                />
                Casual
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="Simulation"
                  checked={selectedGenres.includes("Simulation")}
                  onChange={handleGenreChange}
                />
                Simulation
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="Puzzle"
                  checked={selectedGenres.includes("Puzzle")}
                  onChange={handleGenreChange}
                />
                Puzzle
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="Arcade"
                  checked={selectedGenres.includes("Arcade")}
                  onChange={handleGenreChange}
                />
                Arcade
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="Platformer"
                  checked={selectedGenres.includes("Platformer")}
                  onChange={handleGenreChange}
                />
                Platformer
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="Massively Multiplayer"
                  checked={selectedGenres.includes("Massively Multiplayer")}
                  onChange={handleGenreChange}
                />
                Massively Multiplayer
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="Racing"
                  checked={selectedGenres.includes("Racing")}
                  onChange={handleGenreChange}
                />
                Racing
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="Sports"
                  checked={selectedGenres.includes("Sports")}
                  onChange={handleGenreChange}
                />
                Sports
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="Fighting"
                  checked={selectedGenres.includes("Fighting")}
                  onChange={handleGenreChange}
                />
                Fighting
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="Family"
                  checked={selectedGenres.includes("Family")}
                  onChange={handleGenreChange}
                />
                Family
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="Board Games"
                  checked={selectedGenres.includes("Board Games")}
                  onChange={handleGenreChange}
                />
                Board Games
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="Educational"
                  checked={selectedGenres.includes("Educational")}
                  onChange={handleGenreChange}
                />
                Educational
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="Card"
                  checked={selectedGenres.includes("Card")}
                  onChange={handleGenreChange}
                />
                Card
              </label>
            </div>
          </div>
        </div>
        <button disabled={disable()} type="submit">
          Guardar
        </button>
      </form>
    </div>
  );
};
export default Form;
