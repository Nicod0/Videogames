import Cards from "../Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getVideogames } from "../../Redux/Actions";
import Ordered from "../Filters/filter";
import style from "./Page.module.css";
import videoPrincipal from "../../imagenes/tunel_fondo.mp4";

const Page = () => {
  const dispatch = useDispatch();
  const allVideogames = useSelector((state) => state.filteredVideogames);
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
    <div className={style.container}>
      <video className="video" autoPlay loop muted>
        <source src={videoPrincipal} type="video/mp4" />
      </video>
      <div className={style.page}>
        <div className={style.titulos}>
          <h1 className={style.heading}>Videojuegos</h1>
          <Ordered />
        </div>
        <div className={style.section}>
          <button
            className={style.button}
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            ANTERIOR
          </button>
          <span className={style.pageNumber}>{currentPage}</span>
          <button
            className={style.button}
            onClick={nextPage}
            disabled={currentPage === totalPages}
          >
            SIGUIENTE
          </button>
          <div className={style.paginado}>
            <Cards allVideogames={currentGames} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
