import React, { useContext } from 'react';
import cx from 'classnames';
import style from './Header.module.sass';
import NavItem from './NavItem';
import constants from '../../constants';
import withTheme from '../HOCs/withTheme';
import Button from '../Button';
import { WbSunny, Brightness3 } from '@material-ui/icons';
import { ThemeContext } from '../../contexts';
const { THEMES } = constants;

function Header () {
  const [theme, setTheme] = useContext(ThemeContext);
  const isLightTheme = theme === THEMES.LIGHT;
  
  const classes = cx(
    style.navWrapper,
    isLightTheme ? style.lightTheme : style.darkTheme
  );

  const toggleTheme = () => setTheme(isLightTheme ? THEMES.DARK : THEMES.LIGHT);

  return (
    <div>
      <nav>
        <div className={classes}>
          <NavItem to='/'>Home</NavItem>
          <NavItem to='/signup'>Sign Up Page</NavItem>
          <NavItem to='/userlist'> Users Page</NavItem>
          <NavItem to='/counter'>Counter</NavItem>
          <NavItem to='/users'>UserLoader</NavItem>
          <NavItem to='/tracker'>Tracker</NavItem>
          <Button onClick={toggleTheme}>
            {isLightTheme ? (
              <WbSunny style={{ color: 'yellow' }} />
            ) : (
              <Brightness3 />
            )}
          </Button>
        </div>
      </nav>
    </div>
  );
}

export default withTheme(Header);
