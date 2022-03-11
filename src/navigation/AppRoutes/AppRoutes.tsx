import { Route, Switch } from 'react-router-dom';

import { User } from 'components/User';
import { MainPage } from 'pages/MainPage';
import { PrivateRoute } from 'navigation/PrivateRoute';

import { routeConstants } from 'navigation/routeConstants';
import { ProfilePage } from 'pages/ProfilePage';
import { AboutPage } from 'pages/AboutPage';
import { ContactPage } from 'pages/ContactPage';
import { NotFoundPage } from 'pages/error';
import { UserRoutes } from 'navigation';
import { VGrid } from 'pages/VGrid';
import { ProductPage } from 'pages/ProductPage';

export const AppRoutes: React.FC = ({ props }: any) => {
  return (
    <>
      <Switch>
        <Route
          path={routeConstants.root.route}
          exact
          component={MainPage}
        />

        <Route
          path={`${routeConstants.product.route}:id`}
          component={ProductPage}
        />

        <Route
          path={routeConstants.about.route}
          exact
          component={AboutPage}
        />

        <Route
          path={routeConstants.contact.route}
          exact
          component={ContactPage}
        />

        <Route
          path={routeConstants.vGrid.route}
          exact
          component={VGrid}
        />

        <UserRoutes />

        <PrivateRoute component={User} {...props} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
};
