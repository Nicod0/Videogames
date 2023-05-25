import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addVideogame } from "../../Redux/Actions/index";
import styles from "./Form.module.css";

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
    generos: [],
  });
  const [errors, setErrors] = useState({
    name: "Nombre requerido",
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
      if (input.name.trim() !== "") {
        setErrors({ ...errors, name: "" });
      } else {
        setErrors({ ...errors, name: "Nombre requerido" });
      }
      return;
    }

    if (name === "imagen") {
      const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
      if (input.imagen.trim() !== "" && urlRegex.test(input.imagen)) {
        setErrors({ ...errors, imagen: "" });
      } else {
        setErrors({ ...errors, imagen: "Imagen requerida en formato URL" });
      }
      return;
    }

    if (name === "descripcion") {
      if (input.descripcion.length > 15) {
        setErrors({ ...errors, descripcion: "" });
      } else {
        setErrors({
          ...errors,
          descripcion: "La descripción debe tener al menos 15 caracteres",
        });
      }
      return;
    }

    if (name === "plataformas") {
      if (input.plataformas.trim() !== "") {
        setErrors({ ...errors, plataformas: "" });
      } else {
        setErrors({ ...errors, plataformas: "Plataformas requeridas" });
      }
      return;
    }

    if (name === "fechaDeLanzamiento") {
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
      if (
        input.fechaDeLanzamiento.trim() !== "" &&
        dateRegex.test(input.fechaDeLanzamiento)
      ) {
        setErrors({ ...errors, fechaDeLanzamiento: "" });
      } else {
        setErrors({
          ...errors,
          fechaDeLanzamiento:
            "Fecha de lanzamiento requerida en formato 'yyyy-mm-dd'",
        });
      }
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
    const value = parseInt(event.target.value, 10);
    setRating(value);
    setState({
      ...state,
      rating: value,
    });
  };

  const handleGenreChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedGenres([...selectedGenres, value]);
      setState((prevState) => ({
        ...prevState,
        generos: [...prevState.generos, value],
      }));
    } else {
      setSelectedGenres(selectedGenres.filter((genre) => genre !== value));
      setState((prevState) => ({
        ...prevState,
        generos: prevState.generos.filter((genre) => genre !== value),
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addVideogame(state));
  };
  console.log(state);
  console.log(selectedGenres);
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Guarda un videojuego!!</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.label}>
              Name:
            </label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              className={styles.input}
            />
            {errors["name"]}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="imagen" className={styles.label}>
              Imagen:
            </label>
            <input
              type="text"
              name="imagen"
              onChange={handleChange}
              className={styles.input}
            />
            {errors["imagen"]}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="descripcion" className={styles.label}>
              Descripcion:
            </label>
            <textarea
              name="descripcion"
              cols="30"
              rows="10"
              onChange={handleChange}
              className={styles.input}
            />
            {errors["descripcion"]}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="plataformas" className={styles.label}>
              Plataformas:
            </label>
            <input
              type="text"
              name="plataformas"
              onChange={handleChange}
              className={styles.input}
            />
            {errors["plataformas"]}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="fechaDeLanzamiento" className={styles.label}>
              Fecha de lanzamiento:
            </label>
            <input
              type="text"
              name="fechaDeLanzamiento"
              onChange={handleChange}
              className={styles.input}
            />
            {errors["fechaDeLanzamiento"]}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="rating" className={styles.label}>
              Rating:
            </label>
            <select
              name="rating"
              onChange={handleRatingChange}
              className={styles.input}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className={styles.checkboxGroup}>
            <div>
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
        <button disabled={disable()} type="submit" className={styles.button}>
          Guardar
        </button>
      </form>
    </div>
  );
};
export default Form;
