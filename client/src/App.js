import "./App.css";
import Nav from "./Components/Nav/Nav";
import Detail from "./Components/Detail/Detail";
import Form from "./Components/Form/Form";
import Page from "./Components/Page/Page";
import Home from "./Components/Home/Home";
import {
  Router,
  Route,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";

function App() {
  const [videogame, setVideogame] = useState([]);

  const onSearch = (id) => {
    if (videogame.find((game) => game.id === id)) {
      return alert("Juego repetido");
    }

    fetch(`http://localhost:3001/rickandmorty/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setVideogame((oldGames) => [...oldGames, data]);
        } else {
          alert("algo salió mal");
        }
      });
  };

  const onClose = (id) => {
    setVideogame(videogame.filter((game) => game.id !== id));
  };

  const { pathname } = useLocation();
  return (
    <div className="App">
      <h1>Henry Videogames</h1>
      {pathname !== "/" && <Nav onSearch={onSearch} />}
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/page" element={<Page />} />
        <Route path="/detail:id" element={<Detail />} />
        <Route path="/form" element={<Form />} />
      </Router>
    </div>
  );
}

export default App;
