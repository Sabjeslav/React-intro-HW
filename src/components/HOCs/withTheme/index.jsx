import React, { useContext } from 'react';
import { ThemeContext } from '../../../contexts';

function withTheme (WrappedComponent) {
  return function ComponentWithTheme (props) {
    const [theme, setTheme] = useContext(ThemeContext);
    return <WrappedComponent theme={theme} setTheme={setTheme} {...props} />;
  };
}

export default withTheme;
