import { Route, Navigate } from 'react-router-dom';

import { routeConstants } from 'navigation/routeConstants';

export const PrivateRoute = ({ element: Component, ...rest }: any) => (
  <Route
    {...rest}
    render={(props:any) =>
      localStorage.getItem('user') ? (
        <Component {...props} />
      ) : (
        <Navigate
          to={{
            pathname: routeConstants.root.route,
          }}
        />
      )
    }
  />
);
