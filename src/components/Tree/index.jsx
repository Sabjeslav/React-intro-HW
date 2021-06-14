import React from 'react';
import Parent from './Parent';
import cx from 'classnames';
import withTheme from '../HOCs/withTheme';
import style from './Tree.module.sass';
import constants from '../../constants';
const { THEMES } = constants;

function Tree ({ theme }) {
  const classes = cx(style.container, {
    [style.lightTheme]: theme === THEMES.LIGHT,
    [style.darkTheme]: theme === THEMES.DARK,
  });
  return (
    <div className={classes}>
      <Parent />
    </div>
  );
}

export default withTheme(Tree);
