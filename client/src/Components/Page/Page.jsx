import Cards from "../Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getVideogames } from "../../Redux/Actions";
import Ordered from "../Filters/filter";
import style from "./Page.module.css";
import imgfondo from "../../imagenes/star-wars.jpg";
import Loading from "./Loading";

const Page = () => {
  const dispatch = useDispatch();
  const allVideogames = useSelector((state) => state.filteredVideogames);
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 15;
  const [loading, setLoading] = useState(true);

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
    dispatch(getVideogames()).then(() => {
      setLoading(false);
    });
  }, [dispatch]);

  return (
    <>
      <img src={imgfondo} className={style.fondo} alt="fondo" />
      <div className={style.principal}>
        <div className={style.titulos}>
          <h1 className={style.heading}>Videojuegos</h1>
        </div>
        <div className={style.page}>
          <div className={style.section}>
            <div className={style.buttons}>
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
              <div className={style.filtros}>
                <Ordered />
              </div>
            </div>
            <div className={style.paginado}>
              {loading ? <Loading /> : <Cards allVideogames={currentGames} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
