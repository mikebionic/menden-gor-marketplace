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
				<div className="grid gap-4 my-4 place-items-center grid-cols-[max-content_1fr_max-content] md:grid-rows-[2rem] min-phone:grid-rows-[1rem]">
					<h1 className="text-sm font-medium text-center text-black font-oxygen dark:text-darkTextWhiteColor">
						{title}
					</h1>
				<span className="w-full h-0 mt-0 border border-[#DEDFE4] dark:border-darkTextWhiteColor"></span>
				<Link to={''} className="hover:text-firstColorGradientFromDark dark:hover:text-darkFirstColor">
					<div className="grid grid-flow-col auto-cols-max place-items-center place-content-center">
						<p className="text-sm md:text-lg text-oxygen text-firstColorGradientFromDark dark:text-darkTextWhiteColor">All</p>
						<MdOutlineKeyboardArrowRight className="mr-2 text-sm dark:text-darkTextWhiteColor text-firstColorGradientFromDark hover:text-socialBarItemHover 2xl:w-5 2xl:h-5" />
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
