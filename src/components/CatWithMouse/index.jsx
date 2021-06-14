import React from 'react';
import MouseMoveHandler from '../MouseMoveHandler';

function Cat ({ x, y }) {
  const styles = {
    width: '100px',
    height: '100px',
    position: 'fixed',
    objectFit: 'cover',
    top: `${y + 2}px`,
    left: `${x + 2}px`,
    userSelect: 'none',
  };

  return (
    <img
      draggable='false'
      src='https://www.pngkit.com/png/full/24-240091_cat-face-png-grumpy-cat-png.png'
      alt='cat'
      style={styles}
    ></img>
  );
}

function CatWithMouse () {
  const renderFunction = ({ x, y }) => <Cat x={x} y={y} />;
  return <MouseMoveHandler render={renderFunction} />;
}

export default CatWithMouse;
