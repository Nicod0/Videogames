import { useState } from "react";

function SearchBar({ onSearch }) {
  const [name, setName] = useState("");
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input type="search" onChange={handleChange} />
      <button
        onClick={() => {
          onSearch(name);
        }}
      >
        Agregar
      </button>
    </div>
  );
}

export default SearchBar;
