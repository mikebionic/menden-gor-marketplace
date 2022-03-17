import {
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import { routeConstants } from 'navigation/routeConstants';
import { ProfileTab } from 'pages/ProfileTab';

export const UserRoutes = () => {
  return (
    <Routes>
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
  );
};
