import React from 'react';
import style from './ResponsiveMediaWrapper.module.sass';
import cx from 'classnames';
import PropTypes from 'prop-types';

function ResponsiveMediaWrapper ({ className, children, ...restProps }) {
  return (
    <div className={cx(style.outerWrapper, className)} {...restProps}>
      <div className={style.innerWrapper}>{children}</div>
    </div>
  );
}

ResponsiveMediaWrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element,
};

export default ResponsiveMediaWrapper;
