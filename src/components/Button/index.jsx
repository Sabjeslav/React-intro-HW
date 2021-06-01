import React from "react";
import style from "./button.module.css";

function Button(props) {
  const { caption, handler } = props;
  return (
    <button className={style.button} onClick={handler}>
      {caption}
    </button>
  );
}

export default Button;
