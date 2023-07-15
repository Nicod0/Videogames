import {
  ORDER,
  GET_VIDEOGAMES,
  ORDER_BY_RATING,
  FILTER_BY_GENRE,
  FILTER_BY_ORIGIN,
  GET_GENRES,
} from "../Actions";

const initialState = {
  allVideogames: [],
  allGenres: [],
  filteredVideogames: [],
  orderedVideogames: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        allVideogames: action.payload,
        filteredVideogames: action.payload,
        orderedVideogames: action.payload.slice(),
      };

    case ORDER:
      const sortedVideogames = [...state.filteredVideogames];
      console.log("hola");
      return {
        ...state,
        filteredVideogames:
          action.payload === "asc"
            ? sortedVideogames.sort((a, b) => a.name.localeCompare(b.name))
            : sortedVideogames.sort((a, b) => b.name.localeCompare(a.name)),
      };

    case ORDER_BY_RATING:
      const ratingVideogames = [...state.filteredVideogames];
      return {
        ...state,
        filteredVideogames:
          action.payload === "mayor"
            ? ratingVideogames.sort((a, b) => b.rating - a.rating)
            : ratingVideogames.sort((a, b) => a.rating - b.rating),
      };
    case FILTER_BY_GENRE:
      const genre = action.payload;
      const videogamesGenre = [...state.allVideogames];
      if (genre === "all") {
        return {
          ...state,
          filteredVideogames: videogamesGenre,
        };
      } else {
        const filteredByGenre = videogamesGenre.filter(
          (game) => game.genero && game.genero.includes(genre)
        );

        return {
          ...state,
          filteredVideogames: filteredByGenre,
        };
      }
    case FILTER_BY_ORIGIN:
      const origin = action.payload;
      if (origin === "all") {
        return {
          ...state,
          filteredVideogames: state.allVideogames,
        };
      }
      if (action.payload === "Database") {
        const filteredByOrigin = state.allVideogames.filter((game) =>
          isNaN(game.id)
        );
        return {
          ...state,
          filteredVideogames: filteredByOrigin,
        };
      } else {
        const filteredByOrigin = state.allVideogames.filter(
          (game) => !isNaN(game.id)
        );
        return {
          ...state,
          filteredVideogames: filteredByOrigin,
        };
      }
    case GET_GENRES: {
      return {
        ...state,
        allGenres: action.payload,
      };
    }

    default:
      return { ...state };
  }
};

export default rootReducer;
