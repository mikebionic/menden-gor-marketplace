import { useLocation } from 'react-router-dom';

import { ProfilePage } from 'pages/ProfilePage';
import { OrdersPage } from 'pages/OrdersPage';
import { WishlistPage } from 'pages/Wishlist';
import { ProfileEdit } from 'pages/ProfileEdit';
import { routeConstants } from 'navigation/routeConstants';

export const TabContent = () => {
  const page_location = useLocation();

  switch (page_location.pathname) {
    case routeConstants.profile.route:
      return <ProfilePage />;

    case routeConstants.wishlist.route:
      return <WishlistPage />;

    case routeConstants.orders.route:
      return <OrdersPage />;

    case routeConstants.profileEdit.route:
      return <ProfileEdit />;

    default:
      return <ProfilePage />;
  }
};
