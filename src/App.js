import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeContext } from './contexts';

import style from './App.module.sass';
import constants from './constants.js';

import SignUpForm from 'components/forms/SignUpForm';
import TodoPage from 'pages/TodoPage';
import NavMenu from './components/NavMenu';
import CounterPage from './pages/CounterPage';
import UserLoader from './components/UserLoader';
import PhonesLoader from './components/PhonesLoader';
import MouseTrackerPage from './pages/MouseTrackerPage';
import Tree from './components/Tree';
import Home from './pages/Home';
import Chat from './components/Chat';

const { THEMES } = constants;

function App () {
  const [theme, setTheme] = useState(THEMES.DARK);
  return (
    <>
      <BrowserRouter>
        <ThemeContext.Provider value={[theme, setTheme]}>
          {/* <Header /> */}
          <NavMenu />
          <div className={style.pageWrapper}>
            <Switch>
              <Route path='/signup' component={SignUpForm} />
              <Route path='/counter' component={CounterPage} />
              <Route path='/users' component={UserLoader} />
              <Route path='/phones' component={PhonesLoader} />
              <Route path='/tracker' component={MouseTrackerPage} />
              <Route path='/userCard' component={Tree} />
              <Route path='/chat' component={Chat} />
              <Route path='/todo' component={TodoPage} />
              <Route exact path='/' component={Home} />
              <Route path='*' component={Error} />
            </Switch>
          </div>
        </ThemeContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
