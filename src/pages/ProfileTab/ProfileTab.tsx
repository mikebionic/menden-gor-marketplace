import React from 'react';
import { Link } from 'react-router-dom'

import { TabContent } from 'pages/ProfileTab/TabContent'
import { routeConstants } from 'navigation/routeConstants';

export const ProfileTab: React.FC = () => {
  return (
    <div>
      <nav>
        <Link to={routeConstants.profile.route}><p>Profile</p></Link>
        <Link to={routeConstants.orders.route}><p>Orders</p></Link>
        <Link to={routeConstants.wishlist.route}><p>Wishlist</p></Link>
        <Link to={routeConstants.profileEdit.route}><p>Profile Edit</p></Link>
      </nav>
      <TabContent />
    </div>
  );
};
