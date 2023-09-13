import { useState } from "react";
import style from "./SearchBar.module.css";

function SearchBar({ onSearch }) {
  const [name, setName] = useState("");
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    // <div className={style.input_wrapper}>
    //   <button
    //     className={style.icon}
    //     onClick={() => {
    //       onSearch(name);
    //     }}
    //   >
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       height="25px"
    //       width="25px"
    //     >
    //       <path
    //         stroke-linejoin="round"
    //         stroke-linecap="round"
    //         stroke-width="1.5"
    //         stroke="#fff"
    //         d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
    //       ></path>
    //       <path
    //         stroke-linejoin="round"
    //         stroke-linecap="round"
    //         stroke-width="1.5"
    //         stroke="#fff"
    //         d="M22 22L20 20"
    //       ></path>
    //     </svg>
    //   </button>
    //   <input
    //     placeholder="search a game"
    //     onChange={handleChange}
    //     className={style.input}
    //     type="search"
    //   />
    // </div>
    <div className={style.container}>
      <input
        type="search"
        name="text"
        className={style.input}
        onChange={handleChange}
        placeholder="search a game"
      />
      <button
        className={style.search__btn}
        onClick={() => {
          onSearch(name);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="22"
          height="22"
        >
          <path
            d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
            fill="#efeff1"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default SearchBar;
