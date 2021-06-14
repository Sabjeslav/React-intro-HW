import React from "react";
import style from "./ControlledNumInput.module.sass";

export default function ControlledNumInput(props) {
  const { caption, value, setValue, min, max } = props;

  const handleInput = ({ target: { value: newValue } }) => {
    if (isFinite(min) && newValue < min) {
      setValue(Number(min));
    } else if (isFinite(max) && newValue > max) {
      setValue(Number(max));
    } else {
      setValue(Number(newValue));
    }
  };
  const handleFocus = ({ target }) => target.select();
  return (
    <label>
      {caption}
      <input
        type="number"
        onFocus={handleFocus}
        onChange={handleInput}
        onKeyUp={handleInput}
        value={value}
        className={style.input}
      />
    </label>
  );
}