import { AiOutlineUser } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { BiLogIn } from 'react-icons/bi';
import { FiUserPlus } from 'react-icons/fi';
import { FiLogOut } from 'react-icons/fi';

import { routeConstants } from 'navigation';

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
      route: routeConstants.profileEdit.route,
    },
  ],
  unauthRows: [
    {
      route: routeConstants.login.route,
      label: routeConstants.login.name,
      color: 'orange-600',
      design:
        'hover:border-orange-500 hover:text-orange-500 dark:hover:border-darkFirstColor dark:hover:text-darkFirstColor',
      icon: <BiLogIn className="text-xl" />,
    },
    {
      route: routeConstants.register.route,
      label: routeConstants.register.name,
      color: 'green-500',
      design: 'hover:border-green-500 hover:text-green-500',
      icon: <FiUserPlus className="text-xl" />,
    },
  ],
  authRows: [
    {
      route: routeConstants.logout.route,
      label: routeConstants.logout.name,
      color: 'red-600',
      design: 'hover:border-red-600 hover:text-red-600',
      icon: <FiLogOut className="text-xl" />,
    },
  ],
};

export default dropdownItems;
