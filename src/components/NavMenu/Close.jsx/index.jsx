import React from 'react';
import Hamburger from 'hamburger-react';

function Close ({ isOpen, setOpen }) {
  return <Hamburger toggled={isOpen} toggle={setOpen} />;
}

export default Close;
