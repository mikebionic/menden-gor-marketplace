import { Route, Switch, Redirect } from 'react-router-dom';

import { routeConstants } from 'navigation/routeConstants';
import { ProfilePage } from 'pages/ProfilePage';
import { AboutPage } from 'pages/AboutPage';
import { ContactPage } from 'pages/ContactPage';
import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegisterPage';

export const UserRoutes = () => {
  return (
    <Switch>
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
