import React from 'react';
import { useMouse } from '../../hooks';

function MouseTracker () {
  const { x, y } = useMouse();
  return (
    <div style={{ height: '100vh' }}>
      <h1>Move the mouse around!</h1>
      <p>
        The current mouse position is ({x}, {y})
      </p>
    </div>
  );
}

export default MouseTracker;
