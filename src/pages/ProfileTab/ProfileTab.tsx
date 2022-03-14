import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { TabContent } from 'pages/ProfileTab/TabContent';
import { routeConstants } from 'navigation/routeConstants';

export const ProfileTab: React.FC = () => {
  return (
    <div>
      <nav>
        <NavLink to={routeConstants.profile.route}>
          <p>Profile</p>
        </NavLink>
        <NavLink to={routeConstants.orders.route}>
          <p>Orders</p>
        </NavLink>
        <NavLink to={routeConstants.wishlist.route}>
          <p>Wishlist</p>
        </NavLink>
        <NavLink to={routeConstants.profileEdit.route}>
          <p>Profile Edit</p>
        </NavLink>
      </nav>
      <TabContent />
    </div>
  );
};
