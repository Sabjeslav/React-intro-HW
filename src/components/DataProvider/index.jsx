import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function DataProvider (props) {
  const { render, loadData } = props;
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    load();
  }, []);

  const load = () => {
    setIsFetching(true);
    loadData()
      .then(data => {
        setData(data);
      })
      .catch(e => setError(e))
      .finally(() => {
        setIsFetching(false);
      });
  };
  return render({ data, error, isFetching });
}

DataProvider.propTypes = {
  render: PropTypes.func,
  loadData: PropTypes.func.isRequired,
};

export default DataProvider;
