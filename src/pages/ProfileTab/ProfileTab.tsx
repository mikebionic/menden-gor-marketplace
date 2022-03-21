import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { TabContent } from 'pages/ProfileTab/TabContent';
import { routeConstants } from 'navigation/routeConstants';

const styles = {
  isActiveClass:
    'text-firstColorGradientFromDark cursor-pointer border-b-2 border-firstColorGradientFromDark hover:text-firstColorGradientFromDark pb-2',
  defaultClass:
    'cursor-pointer text-black hover:text-firstColorGradientFromDark',
};

export const ProfileTab: React.FC = () => {
  return (
    <>
      <div className="grid grid-flow-col gap-4 py-2 cursor-pointer place-content-center auto-cols-max">
        <NavLink
          to={routeConstants.profile.route}
          className={({ isActive }) =>
            isActive ? styles.isActiveClass : styles.defaultClass
          }
        >
          <p>Profile</p>
        </NavLink>
        <NavLink
          to={routeConstants.orders.route}
          className={({ isActive }) =>
            isActive ? styles.isActiveClass : styles.defaultClass
          }
        >
          <p>Orders</p>
        </NavLink>
        <NavLink
          to={routeConstants.wishlist.route}
          className={({ isActive }) =>
            isActive ? styles.isActiveClass : styles.defaultClass
          }
        >
          <p>Wishlist</p>
        </NavLink>
        <NavLink
          to={routeConstants.profileEdit.route}
          className={({ isActive }) =>
            isActive ? styles.isActiveClass : styles.defaultClass
          }
        >
          <p>Profile Edit</p>
        </NavLink>
      </div>
      <div>
        <TabContent />
      </div>
    </>
  );
};
