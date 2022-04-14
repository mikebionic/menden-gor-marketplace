import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

interface IPropsDivider { 
	title?: string;
	mobile?: boolean;
}

export const Divider:React.FC<IPropsDivider> = ({ title = 'Just for you', mobile}) => {
	return (
			mobile ? (
				<div className="grid gap-4 my-4 grid-cols-[max-content_1fr_max-content] grid-rows-[2rem]">
					<h1 className="text-2xl font-medium text-center text-black uppercase font-oxygen dark:text-darkTextWhiteColor">
						{title}
					</h1>
				<span className="w-full h-0 mt-3 border-2 border-[#DEDFE4] dark:border-darkTextWhiteColor"></span>
				<Link to={''} className="hover:text-firstColorGradientFromDark dark:hover:text-darkFirstColor">
					<div className="grid grid-flow-col auto-cols-max place-items-center place-content-center">
						<p className="text-lg text-oxygen text-firstColorGradientFromDark dark:text-darkTextWhiteColor">All</p>
						<MdOutlineKeyboardArrowRight className="mr-2 dark:text-darkTextWhiteColor text-firstColorGradientFromDark hover:text-socialBarItemHover 2xl:w-5 2xl:h-5" />
					</div>
				</Link>
				</div >
			) : (
				<div className="grid gap-4 my-4 grid-cols-[max-content_1fr] grid-rows-[2rem]">
					<h1 className="text-2xl font-medium text-center text-black uppercase font-oxygen dark:text-darkTextWhiteColor">
						{title}
					</h1>
					<span className="w-full h-0 mt-3 border-2 border-[#DEDFE4] dark:border-darkTextWhiteColor"></span>
				</div>
			)
	);
};
