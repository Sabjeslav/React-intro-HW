import React from 'react';
import style from './UserCard.module.sass'

function UserCard ({
  user: { firstName, lastName, age, email, id, imageSrc },
}) {
  return (
    <article className={style.userCard}>
      <img className={style.userPicture} src={imageSrc} alt={firstName}></img>
      <h2>
        {firstName}
        {lastName}
      </h2>
      <ul>
        <li>Age: {age}</li>
        <li>Email: {email}</li>
        <li>ID: {id}</li>
      </ul>
    </article>
  );
}

export default UserCard;
