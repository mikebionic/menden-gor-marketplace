import { Route, Switch } from 'react-router-dom';

import { User } from 'components/User';
import { MainPage } from 'pages/MainPage';
import { PrivateRoute } from 'navigation/PrivateRoute';

import { routeConstants } from 'navigation/routeConstants';
import { ProfilePage } from 'pages/ProfilePage';
import { AboutPage } from 'pages/AboutPage';
import { ContactPage } from 'pages/ContactPage';

export const AppRoutes: React.FC = ({ props }: any) => {
  return (
    <>
      <Switch>
        <Route
          path={routeConstants.root.route}
          exact
          render={() => <MainPage />}
        />
        <Route
          path={routeConstants.profile.route}
          exact
          render={() => <ProfilePage />}
        />

        <Route
          path={routeConstants.about.route}
          exact
          render={() => <AboutPage />}
        />

        <Route
          path={routeConstants.contact.route}
          exact
          render={() => <ContactPage />}
        />
        <PrivateRoute component={User} {...props} />
      </Switch>
    </>
  );
};
