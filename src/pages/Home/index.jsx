import React, { useContext } from 'react';
import cx from 'classnames';
import style from './Home.module.sass';
import { ThemeContext } from '../../contexts';
import constants from 'constants.js';

const { THEMES } = constants;

function Home () {
  const [theme, setTheme] = useContext(ThemeContext);

  const isLightTheme = theme === THEMES.LIGHT;
  return (
    <>
      <div
        className={cx(
          style.container,
          isLightTheme ? style.lightTheme : style.darkTheme
        )}
      >
        Home Page
      </div>
    </>
  );
}

export default Home;
