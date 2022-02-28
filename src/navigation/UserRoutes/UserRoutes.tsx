import { Route } from 'react-router-dom';

import { routeConstants } from 'navigation/routeConstants';
import { LoginPage, RegisterPage } from 'pages/auth';
import { ProfileTab } from 'pages/ProfileTab';


export const UserRoutes = () => {
  return (
    <>
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

      <Route
        path={routeConstants.profile.route}
        exact
        component={ProfileTab}
      />
      <Route
        path={routeConstants.profileEdit.route}
        exact
        component={ProfileTab}
      />
      <Route
        path={routeConstants.orders.route}
        exact
        component={ProfileTab}
      />
      <Route
        path={routeConstants.wishlist.route}
        exact
        component={ProfileTab}
      />

      {/* <Redirect to={routeConstants.root.route} /> */}
    </>
  );
};
