import { Route, Switch, Redirect } from 'react-router-dom';

import { routeConstants } from 'navigation/routeConstants';
import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegisterPage';

export const UserRoutes = () => {
  return (
    <Switch>
      <Route
        path={routeConstants.login.route}
        exact
        render={() => <LoginPage />}
      />
      <Route
        path={routeConstants.register.route}
        exact
        render={() => <RegisterPage />}
      />

      <Redirect to={routeConstants.root.route} />
    </Switch>
  );
};
