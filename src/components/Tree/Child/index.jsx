import React from 'react';
import SubChild from '../SubChild';

function Child (props) {
  const style = {
    border: '3px solid',
    padding: '20px',
  };
  return (
    <div style={style}>
      <SubChild />
    </div>
  );
}

export default Child;
