import { Component } from 'react';
import AlohaSortedList from './SortedAlohaList';

class AlohaDashboard extends Component {
  constructor (props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          firstName: 'John',
          secondName: 'Smith',
        },
        {
          id: 2,
          firstName: 'Bob',
          secondName: 'Black',
        },
        {
          id: 3,
          firstName: 'Dwayne',
          secondName: 'Rock',
        },
      ],
    };
  }

  setUsers = users => {
    this.setState({
      users,
    });
  };

  render () {
    const { users } = this.state;
    return (
      <>
        <AlohaSortedList users={users} setUsers={this.setUsers} />
      </>
    );
  }
}

export default AlohaDashboard;
