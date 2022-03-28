import { Routes, Route } from 'react-router-dom';

import { MainPage } from 'pages/MainPage';
import { PrivateRoute } from 'navigation/PrivateRoute';

import { routeConstants } from 'navigation/routeConstants';
import { AboutPage } from 'pages/AboutPage';
import { ContactPage } from 'pages/ContactPage';
import { NotFoundPage } from 'pages/error';
import { UserRoutes } from 'navigation';
import { VGrid } from 'pages/VGrid';
import { ProductPage } from 'pages/ProductPage';
import { LoginPage, LogoutPage, RegisterPage } from 'pages/auth';
import { CheckoutPage } from 'pages/CheckoutPage';

export const AppRoutes: React.FC = ({ props }: any) => {
  return (
    <Routes>
      <Route path={routeConstants.root.route} element={<MainPage />} />

      <Route path={routeConstants.login.route} element={<LoginPage />} />
      <Route path={routeConstants.logout.route} element={<LogoutPage />} />
      <Route
        path={routeConstants.register.route}
        element={<RegisterPage />}
      />

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
      <Route path={routeConstants.checkout.route} element={<CheckoutPage />} />

      <Route path="*" element={<UserRoutes />} />
      {/* <Route path="*" element={<PrivateRoute component={UserRoutes} {...props} />} /> */}
      <Route element={<NotFoundPage />} />
    </Routes>
  );
};
