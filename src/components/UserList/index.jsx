import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserCard, { userPropType } from './UserCard';
import style from './UserList.module.sass';

class UserList extends Component {
  toggleUserSelection = id => {
    const { users, setUsers } = this.props;

    setUsers(
      users.map(user => ({
        ...user,
        isSelected: user.id === id ? !user.isSelected : user.isSelected,
      }))
    );
  };

  mapUser = user => {
    return (
      <UserCard
        key={user.id}
        user={user}
        toggleUserSelection={this.toggleUserSelection}
      />
    );
  };

  render () {
    const { users } = this.props;
    return (
      <section className={style.container}>
        <h1>USER LIST FROM DB:</h1>
        {users.map(this.mapUser)}
      </section>
    );
  }
}

UserList.propTypes = {
  setUsers: PropTypes.func,
  users: PropTypes.arrayOf(userPropType),
};

export default UserList;
