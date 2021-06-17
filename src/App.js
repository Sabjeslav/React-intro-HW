import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';

import style from './App.module.sass';
import constants from './constants.js';
import NavMenu from './components/NavMenu';
import CounterPage from './pages/CounterPage';
import RegForm from './components/RegistrationForm';
import UserLoader from './components/UserLoader';
import PhonesLoader from './components/PhonesLoader';
import MouseTrackerPage from './pages/MouseTrackerPage';
import Tree from './components/Tree';
import { UserContext, ThemeContext } from './contexts';
import Home from './pages/Home';
import onlyAdmin from './components/HOCs/onlyAdmin';
import CatWithMouse from './components/CatWithMouse';
import Chat from './components/Chat';

const { THEMES } = constants;

function App () {
  const [theme, setTheme] = useState(THEMES.DARK);
  const [user, setUser] = useState({
    id: 1,
    firstName: 'John',
    lastName: 'Smith',
    age: 54,
    email: 'randommail@bingus.net',
    imageSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAlcNfK3wxWHcur7up9cJFuXldKTw7huhFnuDHIx3v2lZh6raXyJRY8qbhT7v4akonsGQ&usqp=CAU',
    isAdmin: false,
  });

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <UserContext.Provider value={user}>
          {/* <Header /> */}
          <NavMenu />
          <div className={style.pageWrapper}>
            <Switch>
              <Route path='/signup' component={RegForm} />
              <Route path='/counter' component={CounterPage} />
              <Route path='/users' component={UserLoader} />
              <Route path='/phones' component={PhonesLoader} />
              <Route path='/tracker' component={MouseTrackerPage} />
              <Route path='/userCard' component={Tree} />
              <Route path='/chat' component={Chat} />
              <Route path='/admin' component={onlyAdmin(AdminPage)} />
              <Route exact path='/' component={Home} />
              <Route path='*' component={Error} />
            </Switch>
          </div>
        </UserContext.Provider>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

/* <BrowserRouter>
        <ThemeContext.Provider value={[theme, setTheme]}>
          <UserContext.Provider value={user}>
            <Header />
            <Switch>
              <Route path='/signup' component={RegForm} />
              <Route path='/counter' component={CounterPage} />
              <Route path='/users' component={UserLoader} />
              <Route path='/phones' component={PhonesLoader} />
              <Route path='/tracker' component={MouseTrackerPage} />
              <Route path='/userCard' component={Tree} />
              <Route path='/chat' component={Chat} />
              <Route path='/admin' component={onlyAdmin(AdminPage)} />
              <Route exact path='/' component={Home} />
              <Route path='*' component={Error} />
            </Switch>
          </UserContext.Provider>
        </ThemeContext.Provider>
      </BrowserRouter> */

const AdminPage = () => {
  return <div>Admin Page</div>;
};

const Error = props => {
  return <div>404 Not found</div>;
};

export default App;
