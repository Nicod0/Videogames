import React from "react";
import style from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={style.spinner}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loading;
