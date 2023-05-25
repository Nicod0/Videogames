import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ onSearch }) => {
  return (
    <div className={style.container}>
      <div className={style.playContainer}>
        <FontAwesomeIcon icon={faPlay} className={style.playIcon} />
        <h2 className={style.title}>PLAY</h2>
      </div>
      <div className={style.navLinks}>
        <Link to="/page">Home</Link>
        <Link to="/form">Create Game</Link>
        <Link to="/detail">Detalle</Link>
      </div>
      <div className={style.searchbar}>
        <SearchBar onSearch={onSearch} />
      </div>
    </div>
  );
};

export default Nav;
