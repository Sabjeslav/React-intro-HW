import React from 'react';
import MouseMoveHandler from '../MouseMoveHandler';

function MouseTracker () {
  const renderFunction = ({ x, y }) => {
    return (
      <div style={{ height: '100vh' }}>
        <h1>Move the mouse around!</h1>
        <p>
          The current mouse position is ({x}, {y})
        </p>
      </div>
    );
  };

  return <MouseMoveHandler render={renderFunction} />;
}

export default MouseTracker;
