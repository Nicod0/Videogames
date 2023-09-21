import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addVideogame } from "../../Redux/Actions/index";
import styles from "./Form.module.css";
import { useSelector } from "react-redux";
import { getGenres } from "../../Redux/Actions/index";
import { useEffect } from "react";
import imagen_fondo from "../../imagenes/star-wars.jpg";

const Form = () => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.allGenres);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [rating, setRating] = useState(1);
  const [state, setState] = useState({
    rating: 1,
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
  useEffect(() => {
    dispatch(getGenres());
  }, []);
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

  const handleGenreChange = (e) => {
    const selectedGenre = e.target.value;
    if (selectedGenre === "clean") {
      setState({
        ...state,
        generos: [],
      });
    } else {
      if (!state.generos.includes(selectedGenre)) {
        setState({
          ...state,
          generos: [...state.generos, selectedGenre],
        });
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addVideogame(state));
  };
  console.log(state);
  console.log(selectedGenres);
  return (
    <div>
      <img src={imagen_fondo} className={styles.fondo} alt="" />
      <div className={styles.container}>
        <h1 className={styles.titulo}>Guarda un videojuego!!</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <div className={styles.inputGroup}>
              <div className={styles.grupo}>
                <label htmlFor="name" className={styles.label}>
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  className={styles.input}
                />
                <p className={styles.error}> {errors["name"]}</p>
              </div>
              <div className={styles.grupo}>
                <label htmlFor="imagen" className={styles.label}>
                  Imagen:
                </label>
                <input
                  type="text"
                  name="imagen"
                  onChange={handleChange}
                  className={styles.input}
                />
                <p className={styles.error}>{errors["imagen"]} </p>
              </div>
            </div>

            <div className={styles.inputGroup}>
              <div className={styles.grupo}>
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
                <p className={styles.error}>{errors["descripcion"]} </p>
              </div>

              <div className={styles.grupito}>
                <div className={styles.grupaso}>
                  <label htmlFor="plataformas" className={styles.label}>
                    Plataformas:
                  </label>
                  <input
                    type="text"
                    name="plataformas"
                    onChange={handleChange}
                    className={styles.input}
                  />
                  <p className={styles.error}>{errors["plataformas"]} </p>
                </div>

                <div className={styles.grupaso}>
                  <label htmlFor="fechaDeLanzamiento" className={styles.label}>
                    Fecha de lanzamiento:
                  </label>
                  <input
                    type="text"
                    name="fechaDeLanzamiento"
                    onChange={handleChange}
                    className={styles.input}
                  />
                  <p className={styles.error}>
                    {errors["fechaDeLanzamiento"]}{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.inputGroup}>
              <div className={styles.grupo}>
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
              <div className={styles.grupo}>
                <label htmlFor="" className={styles.label}>
                  Generos:{" "}
                </label>
                <input
                  id="generos"
                  type="text"
                  name="generos"
                  value={state.generos}
                  className={styles.escondido}
                />
                <select
                  name="generos"
                  id="generos"
                  value={state.generos}
                  className={styles.optionGenre}
                  onChange={handleGenreChange}
                  multiple
                >
                  <option value="clean">Clean</option>
                  {genres.map((genre, index) => {
                    return (
                      <option key={index} value={genre.id}>
                        {genre.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
          <button className={styles.button} disabled={disable()} type="submit">
            {" "}
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
};
export default Form;
