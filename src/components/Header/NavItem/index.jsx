import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './NavItem.module.sass';
import cx from 'classnames';

function NavItem ({ className, activeClassName, to, children, ...other }) {
  return (
    <NavLink to={to}>
      <div
        className={cx(style.navItem, className)}
        {...other}
      >
        {children}
      </div>
    </NavLink>
  );
}

NavItem.defaultProps = {
  to: '/',
  children: 'NavLink',
};

NavItem.propTypes = {
  className: PropTypes.string,
  activeClassName: PropTypes.string,
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavItem;
