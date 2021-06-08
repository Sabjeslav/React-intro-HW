import React from 'react';

function SelectedUserList (props) {
  const { users } = props;
  const selectedUsers = users.filter(user => user.isSelected);
  return (
    <div>
      {selectedUsers.map(({ firstName, secondName }) => (
        <span key='id'>
          {firstName} {secondName}
        </span>
      ))}
    </div>
  );
}

export default SelectedUserList;
