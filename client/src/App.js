import "./App.css";
import Nav from "./Components/Nav/Nav";
import Detail from "./Components/Detail/Detail";
import Form from "./Components/Form/Form";
import Page from "./Components/Page/Page";
import Home from "./Components/Home/Home";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const allVideogames = useSelector((state) => state.allVideogames);
  const onSearch = (name) => {
    if (name) {
      const game = allVideogames.find((game) =>
        game.name.toLowerCase().includes(name.toLowerCase())
      );
      if (game) {
        navigate(`/detail/${game.id}`);
      } else {
        alert("No se encontró ningún juego con ese nombre");
      }
    } else {
      alert("Ingresa un nombre de juego");
    }
  };
  return (
    <div className="App">
      {pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page" element={<Page />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
};

export default App;
