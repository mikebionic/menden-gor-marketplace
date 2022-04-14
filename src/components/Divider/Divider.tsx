import React from 'react';

interface IPropsDivider { 
	title?: string;
	mobile?: boolean;
}

export const Divider:React.FC<IPropsDivider> = ({ title = 'Just for you', mobile }) => {
	return (
			mobile ? (
			<div className="grid gap-4 my-4 grid-cols-[max-content_1fr] grid-rows-[2rem]">
				<h1 className="text-2xl font-medium text-center text-black uppercase dark:text-darkTextWhiteColor">
					{title}
				</h1>
				<span className="w-full h-0 mt-3 border-2 border-[#DEDFE4] dark:border-darkTextWhiteColor"></span>
			</div >
			) : (
				<div className="grid gap-4 my-4 grid-cols-[max-content_1fr] grid-rows-[2rem]">
				<h1 className="text-2xl font-medium text-center text-black uppercase dark:text-darkTextWhiteColor">
					{title}
				</h1>
				<span className="w-full h-0 mt-3 border-2 border-[#DEDFE4] dark:border-darkTextWhiteColor"></span>
			</div>
			)
	);
};
