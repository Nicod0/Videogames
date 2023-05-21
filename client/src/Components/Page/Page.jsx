import Cards from "../Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getVideogames } from "../../Redux/Actions";
import Filter from "../Filters/filter";

const Page = () => {
  const dispatch = useDispatch();
  const allVideogames = useSelector((state) => state.allVideogames);
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 15;

  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = allVideogames.slice(indexOfFirstGame, indexOfLastGame);
  const totalPages = Math.ceil(allVideogames.length / gamesPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    dispatch(getVideogames());
  }, []);
  return (
    <div>
      <h1>Videojuegos</h1>
      <Filter />
      <Cards allVideogames={currentGames} />
      <div>
        <button onClick={prevPage} disabled={currentPage === 1}>
          Anterior
        </button>
        <span>{currentPage}</span>
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Siguiente
        </button>
      </div>
    </div>
  );
};
export default Page;
