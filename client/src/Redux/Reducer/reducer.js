import { FILTERS, GET_VIDEOGAMES } from "../Actions";

const initialState = {
  allVideogames: [],
  allGenres: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        allVideogames: action.payload,
      };
    case FILTERS:
      break;

    default:
      return { ...state };
  }
};

export default rootReducer;
