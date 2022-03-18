import { AiOutlineUser } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { BiLogIn } from 'react-icons/bi';
import { FiUserPlus } from 'react-icons/fi';
import { FiLogOut } from 'react-icons/fi';

import { routeConstants } from 'navigation/routeConstants';

const dropdownItems = {
  userRows: [
    {
      icon: <AiOutlineUser className="text-xl" />,
      label: 'Account',
      route: routeConstants.profile.route,
    },
    {
      icon: <FiSettings className="text-xl" />,
      label: 'Settings',
      route: routeConstants.profile.route,
    }
  ],
  unauthRows: [
    {
      route: routeConstants.login.route,
      label: routeConstants.login.name,
      color: "green-600",
      design: "hover:border-red-600 hover:text-red-600",
      icon: <BiLogIn className="text-xl" />
    },
    {
      route: routeConstants.register.route,
      label: routeConstants.register.name,
      color: "green-600",
      design: "hover:border-red-600 hover:text-red-600",
      icon: <FiUserPlus className="text-xl" />
    },
  ],
  authRows: [
    {
      route: routeConstants.logout.route,
      label: routeConstants.logout.name,
      color: "red-600",
      design: "hover:border-red-600 hover:text-red-600",
      icon: <FiLogOut className="text-xl" />
    }
  ]
};

export default dropdownItems;
