import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
function MouseMoveHandler ({ render }) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleMouseMove = event => {
    setX(event.clientX);
    setY(event.clientY);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return render({ x, y });
}

MouseMoveHandler.propTypes = {
  render: PropTypes.func.isRequired,
};

export default MouseMoveHandler;
