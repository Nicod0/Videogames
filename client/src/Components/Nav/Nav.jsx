import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
const Nav = ({ onSearch }) => {
  return (
    <div>
      <div>
        <Link to="/page">Home</Link>
        <Link to="/form">Create Game</Link>
        <Link to="/detail">Detalle</Link>
      </div>
      <div>
        <SearchBar onSearch={onSearch} />
      </div>
    </div>
  );
};

export default Nav;
