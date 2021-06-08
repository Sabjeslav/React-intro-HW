import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Link, Router } from 'react-router-dom';

import './App.css';
// import UserCard from "./components/UserList/UserCard";
// import Aloha from "./components/AlohaDashboard/Aloha";
// import SelectedUserList from "./components/SelectedUserList";
// import Timer from "./components/Timer";
// import UserList from "./components/UserList";
// import RegForm from "./components/RegistrationForm";
// import ResponsiveMediaWrapper from "./components/ResponsiveMediaWrapper";
// import Calendar from './components/Calendar';
// import UserLoader from './components/UserLoader';
// import WindowSizes from './components/WindowSizes';

// const usersDB = [
//   {
//     id: 1,
//     firstName: 'John',
//     lastName: 'Smith',
//   },
//   {
//     id: 2,
//     firstName: 'Bob',
//     lastName: 'Black',
//   },
//   {
//     id: 3,
//     firstName: 'Dwayne',
//     lastName: 'Rock',
//   },
// ];

function App (props) {
  // const [users, setUsers] = useState(
  //   usersDB.map(user => ({
  //     ...user,
  //     isSelected: false,
  //   }))
  // );
  // const [isHidden, setIsHidden] = useState(false);
  // const hideHandler = () => setIsHidden(!isHidden);

  // const registerUser = user => {
  //   const newUsersArray = [...users];
  //   const lastId = newUsersArray.reduce(
  //     (acc, currentValue) => (currentValue.id > acc ? currentValue.id : acc),
  //     0
  //   );
  //   newUsersArray.push({ ...user, id: lastId + 1 });
  //   setUsers(newUsersArray);
  // };

  // const user = {
  //   id: 3,
  //   firstName: 'Dwayne',
  //   lastName: 'Rock',
  // };

  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/contacts'>Contacts</Link>
            </li>
            <li>
              <Link to='/About'>About</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/contacts' component={Contacts} />
          <Route path='/about' component={About} />
          <Route path='*' component={Error} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

const Home = () => <div>Home</div>;
const About = props => {
  console.log('About props:', props);
  setTimeout(() => {
    props.history.push('/');
  }, 5000);
  return <div>About</div>;
};
const Contacts = props => {
  console.log('Contacts:', props);
  return <div>Contacts</div>;
};
const Error = props => {
  return <div>404 Not found</div>;
};

export default App;
