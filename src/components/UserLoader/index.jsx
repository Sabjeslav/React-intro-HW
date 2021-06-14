import React, { useState, useEffect } from 'react';
import Spinner from '../Spinner';
import DataProvider from '../DataProvider';

function UserLoader () {
  const load = () => {
    return fetch('./users.json').then(res => res.json());
  };
  const renderUsers = ({ data, isFetching, error }) => {
    if (!isFetching && data) {
      return (
        <div>
          {data.map(({ id, name }) => (
            <div key={id}>
              ID: {id}, Name: {name}
            </div>
          ))}
        </div>
      );
    } else if (error) return <div>Error</div>;
    return <Spinner />;
  };

  return <DataProvider render={renderUsers} loadData={load} />;
}

export default UserLoader;
