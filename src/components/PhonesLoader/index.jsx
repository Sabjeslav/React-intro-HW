import React from 'react';
import DataProvider from '../DataProvider';
import Spinner from '../Spinner';

function PhonesLoader () {
  const load = () => {
    return fetch('./phones.json').then(res => res.json());
  };
  const renderPhones = ({ data, isFetching, error }) => {
    if (!isFetching && data) {
      return (
        <div>
          {data.map(({ id, name, price }) => (
            <div key={id}>
              ID: {id}, Name: {name}, Price: {price}
            </div>
          ))}
        </div>
      );
    } else if (error) return <div>Error</div>;
    return <Spinner />;
  };

  return <DataProvider render={renderPhones} loadData={load} />;
}

export default PhonesLoader;
