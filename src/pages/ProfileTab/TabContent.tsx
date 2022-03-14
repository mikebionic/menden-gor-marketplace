import { ProfilePage } from 'pages/ProfilePage';
import { OrderLine, Orders } from 'pages/Orders';
import { WishlistPage } from 'pages/Wishlist';
import { ProfileEdit } from 'pages/ProfileEdit';
import { history } from 'sapredux/helpers';
import { routeConstants } from 'navigation/routeConstants';

export const TabContent = () => {
  const page = history.location.pathname;

  switch (page) {
    case routeConstants.profile.route:
      return <ProfilePage />;

    case routeConstants.wishlist.route:
      return <WishlistPage />;

    case routeConstants.orders.route:
      return <OrderLine />;

    case routeConstants.profileEdit.route:
      return <ProfileEdit />;

    default:
      return <ProfilePage />;
  }
};
