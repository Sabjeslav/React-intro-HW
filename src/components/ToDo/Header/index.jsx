import React from 'react';
import { format, getDate, getMonth } from 'date-fns';
import style from './Header.module.sass';

function Header () {
  const currentDate = Date.now();
  return (
    <div className={style.headerContainer}>
      <div className={style.currentDate}>
        <div className={style.number}>{format(currentDate, 'd')}</div>
        <div className={style.monthWrapper}>
          <div className={style.month}>{format(currentDate, 'MMM')}</div>
          <div>{format(currentDate, 'yyy')}</div>
        </div>
      </div>
      <div className={style.currentDay}>{format(currentDate, 'EEEE')}</div>
    </div>
  );
}

export default Header;
