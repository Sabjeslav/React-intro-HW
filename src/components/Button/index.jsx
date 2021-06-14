import React from 'react';
import style from './button.module.css';
import cx from 'classnames';
import PropTypes from 'prop-types';

function Button (props) {
  const { className, children, ...others } = props;
  return (
    <button
      className={cx(style.blueBtn, className)}
      {...others}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default Button;
