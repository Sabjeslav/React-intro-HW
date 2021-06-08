import React from 'react';
import style from './Spinner.module.sass';

export default function Spinner () {
  return (
    <div className={style.ldsRing}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
