import axios from "axios";
export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const FILTERS = "FILTERS";

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

export const filter = (filter) => {
  return async function (dispatch) {
    return dispatch({
      type: FILTERS,
      payload: filter,
    });
  };
};
