import React from 'react';
import SubParent from '../SubParent';

function Parent (props) {
  const style = {
    border: '3px solid',
    padding: '20px',
  };
  return (
    <div style={style}>
      <SubParent />
    </div>
  );
}

export default Parent;
