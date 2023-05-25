import { useState } from "react";
import Style from "./SearchBar.module.css";

function SearchBar({ onSearch }) {
  const [name, setName] = useState("");
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input
        type="search"
        onChange={handleChange}
        className={Style.input}
        placeholder="Buscar..."
      />
      <button
        onClick={() => {
          onSearch(name);
        }}
        className={Style.button}
      >
        Buscar
      </button>
    </div>
  );
}

export default SearchBar;
