import React from 'react';
import { Route as ReactDOMRoute, Redirect } from 'react-router-dom';
import { useAuth } from '../context/Auth';

import { RouteProps } from '../interfaces/Route/route.interface';

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...props
}) => {
  const { state } = useAuth();
  const { signed } = state;

  return (
    <ReactDOMRoute
      {...props}
      render={() => {
        return isPrivate === signed ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: isPrivate ? '/' : '/dashboard' }} />
        );
      }}
    />
  );
};

export default Route;
