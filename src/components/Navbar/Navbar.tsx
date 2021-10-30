import React from 'react';

// import './Navbar.css'
// import { ReactComponent as MenuIcon } from './icons/grid-menu.svg';
// import { ReactComponent as XIcon } from './icons/x.svg';
import { ReactComponent as UserIcon } from './icons/user.svg';

export interface INavbar {
  sidebarToggled: boolean;
  toggleSidebar: () => void;
  // onServiceChange: VoidFunction
}

export const Navbar: React.FC<INavbar> = ({
  sidebarToggled,
  toggleSidebar,
}: INavbar) => {
  const navbarPadding = {
    navbar: 'pl-44',
  };

  const classes = sidebarToggled ? navbarPadding.navbar : null;
  // const drawerIcon = sidebarToggled ? <XIcon /> : <MenuIcon />;

  return (
    <header className="fixed top-0 left-0 flex items-center justify-between w-full h-12 px-4 py-0 transition duration-500 bg-white shadow-md Navbar z-100">
      <div
        className={`NavbarToggle text-2xl cursor-pointer transition duration-500 ease text-firstColor pl-14 ${classes}`}
        onClick={() => toggleSidebar()}
      >
        {/* {drawerIcon} */}
      </div>
      {/* <button 
				onClick={() => props.onServiceChange()}
				className="btn btn-outline-primary">
					toggle Service
			</button> */}
      <div className="flex justify-center overflow-hidden rounded-full NavbarImage w-7 h-7">
        <UserIcon className="w-10" />
      </div>
    </header>
  );
};
