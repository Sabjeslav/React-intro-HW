import React from 'react';
import style from './UserContainer.module.sass';

function UserContainer ({ user: { firstName, lastName, imageSrc } }) {
  return (
    <div className={style.userContainer}>
      <img src={imageSrc} alt={firstName} />
      <span>
        {firstName} {lastName}
      </span>
    </div>
  );
}

export default UserContainer;
