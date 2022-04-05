import { useLocation } from 'react-router-dom';

import { ProfilePage } from 'pages/ProfilePage';
import { OrdersPage } from 'pages/OrdersPage';
import { WishlistPage } from 'pages/WishlistPage';
import { ProfileEditPage } from 'pages/ProfileEditPage';
import { routeConstants } from 'navigation';

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
      return <ProfileEditPage />;

    default:
      return <ProfilePage />;
  }
};
