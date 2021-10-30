import { Route, Switch } from 'react-router-dom';

import { User } from 'components/User';
import { MainPage } from 'pages/MainPage';
import { PrivateRoute } from 'navigation/PrivateRoute';

import { routeConstants } from 'navigation/routeConstants';

export const AppRoutes: React.FC = ({ props }: any) => {
  return (
    <>
      <Switch>
        <Route
          path={routeConstants.root.route}
          exact
          render={() => <MainPage />}
        />
        <PrivateRoute component={User} {...props} />
      </Switch>
    </>
  );
};
