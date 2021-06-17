import { useState, useEffect, useCallback } from 'react';

export function useData (loadData) {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    setIsFetching(true);
    loadData()
      .then(data => setData(data))
      .catch(e => setError(e))
      .finally(() => setIsFetching(false));
  }, []);

  return { data, error, isFetching };
}

export function useMouse () {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleMouseMove = useCallback(event => {
    setX(event.clientX);
    setY(event.clientY);
  }, []);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return { x, y };
}
