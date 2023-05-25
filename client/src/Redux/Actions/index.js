import axios from "axios";
export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const ORDER = "ORDER";
export const ORDER_BY_RATING = "ORDER_BY_RATING";
export const FILTER_BY_GENRE = "FILTER_BY_GENRE";
export const FILTER_BY_ORIGIN = "FILTER_BY_ORIGIN";

export const addVideogame = (info) => {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "http://localhost:3001/videogames/",
        info
      );
      console.log(response);
      alert("usuario creado correctamente");
    } catch (error) {
      alert(error.response.data.error);
    }
  };
};

export const getVideogames = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/videogames");
      return dispatch({
        type: GET_VIDEOGAMES,
        payload: response.data,
      });
    } catch (error) {
      alert(error.response.data.error);
    }
  };
};

export const order = (order) => {
  return async function (dispatch) {
    return dispatch({
      type: ORDER,
      payload: order,
    });
  };
};

export const orderByRating = (rating) => {
  return async function (dispatch) {
    return dispatch({
      type: ORDER_BY_RATING,
      payload: rating,
    });
  };
};
export const filterByGenre = (genre) => {
  return async function (dispatch) {
    return dispatch({
      type: FILTER_BY_GENRE,
      payload: genre,
    });
  };
};

export const filterByOrigin = (origin) => {
  return async function (dispatch) {
    return dispatch({
      type: FILTER_BY_ORIGIN,
      payload: origin,
    });
  };
};
