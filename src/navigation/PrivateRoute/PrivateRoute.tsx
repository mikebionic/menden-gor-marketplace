import { Redirect, Route } from 'react-router-dom';

import { routeConstants } from 'navigation/routeConstants';

export const PrivateRoute = ({ component: Component, ...rest }: any) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem('user') ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: routeConstants.root.route,
            state: { from: props.location },
          }}
        />
      )
    }
  />
);
