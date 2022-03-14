import { Routes, Route } from 'react-router-dom';

import { User } from 'components/User';
import { MainPage } from 'pages/MainPage';
import { PrivateRoute } from 'navigation/PrivateRoute';

import { routeConstants } from 'navigation/routeConstants';
// import { ProfilePage } from 'pages/ProfilePage';
import { AboutPage } from 'pages/AboutPage';
import { ContactPage } from 'pages/ContactPage';
import { NotFoundPage } from 'pages/error';
import { UserRoutes } from 'navigation';
import { VGrid } from 'pages/VGrid';
import { ProductPage } from 'pages/ProductPage';  

export const AppRoutes: React.FC = ({ props }: any) => {
  return (
    <>
      <Routes>
        <Route path={routeConstants.root.route} element={<MainPage />} />

        <Route
          path={`${routeConstants.product.route}:id/*`}
          element={<ProductPage />}
        />

        <Route path={routeConstants.about.route} element={<AboutPage />} />

        <Route
          path={routeConstants.contact.route}
          element={<ContactPage />}
        />

        <Route path={routeConstants.vGrid.route} element={<VGrid />} />

        <Route path="*" element={<UserRoutes />} />
        <Route path="*" element={<PrivateRoute component={User} {...props} />} />
        <Route element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
