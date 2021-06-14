import React, { useContext } from 'react';
import cx from 'classnames';
import style from './Home.module.sass';
import { ThemeContext } from '../../contexts';
import constants from '../../constants';
import Button from '../../components/Button';

const { THEMES } = constants;

function Home () {
  const [theme, setTheme] = useContext(ThemeContext);
  const isLightTheme = theme === THEMES.LIGHT;
  const toggleTheme = () => {
    setTheme(isLightTheme ? THEMES.DARK : THEMES.LIGHT);
  };
  return (
    <>
      <div
        className={cx(
          style.container,
          isLightTheme ? style.lightTheme : style.darkTheme
        )}
      >
        Home Page <br />
      <Button className="blueBtn" onClick={toggleTheme}> Change Theme </Button>
      </div>
    </>
  );
}

export default Home;
