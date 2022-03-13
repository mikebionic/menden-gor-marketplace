import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import { routeConstants } from 'navigation/routeConstants';
import { LoginPage, RegisterPage } from 'pages/auth';
import { ProfileTab } from 'pages/ProfileTab';

export const UserRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path={routeConstants.login.route} element={<LoginPage />} />
          <Route
            path={routeConstants.register.route}
            element={<RegisterPage />}
          />

          <Route path={routeConstants.profile.route} element={<ProfileTab />} />
          <Route
            path={routeConstants.profileEdit.route}
            element={<ProfileTab />}
          />
          <Route path={routeConstants.orders.route} element={<ProfileTab />} />
          <Route
            path={routeConstants.wishlist.route}
            element={<ProfileTab />}
          />

          <Route
            path="*"
            element={<Navigate to={routeConstants.root.route} />}
          />
        </Routes>
      </Router>
    </>
  );
};
