import React from 'react';
import Spinner from '../Spinner';
import DataProvider from '../DataProvider';
import { useData } from '../../hooks';

function UserLoader () {
  const load = () => {
    return fetch('./users.json').then(res => res.json());
  };

  const { data, error, isFetching } = useData(load);

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
}

export default UserLoader;
