import React, { useState } from "react";
import "./App.css";
import SelectedUserList from "./components/SelectedUserList";
import Timer from "./components/Timer";
import UserList from "./components/UserList";

const usersDB = [
  {
    id: 1,
    firstName: "John",
    secondName: "Smith",
  },
  {
    id: 2,
    firstName: "Bob",
    secondName: "Black",
  },
  {
    id: 3,
    firstName: "Dwayne",
    secondName: "Rock",
  },
];

function App(props) {
  const [users, setUsers] = useState(
    usersDB.map((user) => ({
      ...user,
      isSelected: false,
    }))
  );
  const [isHidden, setIsHidden] = useState(false);
  const hideHandler = () => setIsHidden(!isHidden);
  return (
    <>
      <main>
        <button onClick={hideHandler}>Hide</button>
        {!isHidden && <UserList users={users} setUsers={setUsers} />}
      </main>
      <footer>
        <SelectedUserList users={users} />
      </footer>
      <Timer />
    </>
  );
}

/*class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false,
      users: usersDB.map((user) => ({
        ...user,
        isSelected: false,
      })),
    };
  }

  setUsers = (newUsers) => this.setState({ users: newUsers });

  hideHandler = () => {
    this.setState({
      isHidden: !this.state.isHidden,
    })
  }

  render() {
    const { users, isHidden } = this.state;
    return (
      <>
        <main>
          <button onClick={this.hideHandler}>Hide</button>
          {!isHidden && <UserList users={users} setUsers={this.setUsers} />}
        </main>
        <footer>
          <SelectedUserList users={users} />
        </footer>
      </>
    );
  }
}*/

export default App;
