import React, { useState, useRef, useEffect } from 'react';
import Close from './Close.jsx';
import NavItem from '../Header/NavItem';
import style from './NavMenu.module.sass';
import cx from 'classnames';

function NavMenu () {
  const navRef = useRef(null);
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    const handleClick = ({ target }) => {
      if (isOpen && !navRef.current.contains(target)) {
        setOpen(false);
      }
    };
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [isOpen]);
  return (
    <nav className={cx(style.navMenu, { [style.opened]: isOpen })} ref={navRef}>
      <Close isOpen={isOpen} setOpen={setOpen} />
      {isOpen && (
        <ul className={style.list}>
          <NavItem to='/'>Home</NavItem>
          <NavItem to='/signup'>Sign Up Page</NavItem>
          <NavItem to='/userlist'> Users Page</NavItem>
          <NavItem to='/counter'>Counter</NavItem>
          <NavItem to='/users'>UserLoader</NavItem>
          <NavItem to='/tracker'>Tracker</NavItem>
        </ul>
      )}
    </nav>
  );
}

export default NavMenu;
