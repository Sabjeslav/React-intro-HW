import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import { UserContext } from '../../../contexts';

function onlyAdmin (WrappedComponent) {
  return function OnlyAdminComponent (props) {
    const user = useContext(UserContext);

    if (user.isAdmin) {
      return <WrappedComponent {...props} />;
    } else {
      return <Redirect to='/' />;
    }
  };
}

export default onlyAdmin;
