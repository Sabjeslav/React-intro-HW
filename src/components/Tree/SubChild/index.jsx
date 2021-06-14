import React, { useContext } from 'react';
import UserCardPage from '../../../pages/UserCardPage';
import { UserContext } from '../../../contexts';

function SubChild (props) {
  const style = {
    border: '3px solid',
    padding: '20px',
  };
  const user = useContext(UserContext);
  return (
    <div style={style}>
      <UserCardPage user={user} />
    </div>
  );
}

export default SubChild;
