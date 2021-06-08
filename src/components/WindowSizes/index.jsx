import React, { useState, useEffect } from 'react';

export default function WindowSizes () {
  const [windowWidth, setWindowWidth] = useState(null);
  const [windowHeight, setWindowHeight] = useState(null);

  const resizeHandler = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  useEffect(() => {
    resizeHandler();
  }, [windowHeight, windowWidth]);

  return (
    <div>
      <div>Current width is : {windowWidth} px</div>
      <div>Current height is : {windowHeight} px</div>
    </div>
  );
}
