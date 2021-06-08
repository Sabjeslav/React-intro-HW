import React from 'react';
import cx from 'classnames';
import style from './FormInput.module.sass';

function FormInput (props) {
  const {
    name,
    value,
    onChange = () => {},
    validationRegex,
    placeholder,
    type = 'text',
  } = props;
  const isValid = value.length === 0 || validationRegex.test(value);
  return (
    <input
      name={name}
      value={value}
      onChange={onChange}
      className={cx(style.regInput, { [style.invalidInput]: !isValid })}
      type={type}
      placeholder={placeholder}
    />
  );
}

export default FormInput;
