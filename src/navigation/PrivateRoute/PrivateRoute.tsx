import { Navigate } from 'react-router-dom';

import { routeConstants } from 'navigation/routeConstants';

export const PrivateRoute = ({ component: Component, ...rest }: any) => (
  localStorage.getItem('user') ? (
    <Component {...rest} />
  ) : (
    <Navigate to={routeConstants.login.route} />
  )
);