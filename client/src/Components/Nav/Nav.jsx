import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";

const Nav = ({ onSearch }) => {
  return (
    <div className={style.container}>
      <div className={style.playContainer}>
        <h2 className={style.title}>PLAY</h2>
      </div>
      <div className={style.navLinks}>
        <Link to="/page" className={style.link}>
          Home
        </Link>
        <Link to="/form" className={style.link}>
          Create Game
        </Link>
      </div>
      <div className={style.searchbar}>
        <SearchBar onSearch={onSearch} />
      </div>
    </div>
  );
};

export default Nav;
