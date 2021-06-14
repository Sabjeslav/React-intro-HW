import React from 'react'
import Child from '../Child'

function SubParent() {
  const style = {
    border: '3px solid',
    padding: '20px',
  };
  return (
    <div style={style}>
      <Child />
    </div>
  )
}

export default SubParent
