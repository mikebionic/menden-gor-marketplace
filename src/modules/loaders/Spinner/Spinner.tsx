import React, { useEffect } from 'react'

import './Spinner.css'

interface IPropsSpinner {
	overlay?: string
}

export const Spinner: React.FC<IPropsSpinner> = ({
	overlay = 'bg-[#acacac14] backdrop-blur-glass',
}) => {
	useEffect(() => {
		const body: any = document.querySelector('body')
		body.style.overflow = 'hidden'

		setTimeout(() => {
			body.style.overflow = null
		}, 2000)
	}, [])
	return (
		<>
			<main
				className={`absolute ${overlay} !w-full !h-[100vh] z-[99999] min-h-[100vh] min-w-[100vw] !overflow-hidden bottom-0 right-0 left-0 top-0 `}
			>
				<svg
					className="m-auto ap"
					viewBox="0 0 128 256"
					width="128px"
					height="256px"
					xmlns="http://www.w3.org/2000/svg"
				>
					<defs>
						<linearGradient id="ap-grad1" x1="0" y1="0" x2="0" y2="1">
							<stop offset="0%" stopColor="hsl(223,90%,55%)" />
							<stop offset="100%" stopColor="hsl(253,90%,55%)" />
						</linearGradient>
						<linearGradient id="ap-grad2" x1="0" y1="0" x2="0" y2="1">
							<stop offset="0%" stopColor="hsl(193,90%,55%)" />
							<stop offset="50%" stopColor="hsl(223,90%,55%)" />
							<stop offset="100%" stopColor="hsl(253,90%,55%)" />
						</linearGradient>
					</defs>
					<circle
						className="ap__ring"
						r="56"
						cx="64"
						cy="192"
						fill="none"
						stroke="#ddd"
						strokeWidth="16"
						strokeLinecap="round"
					/>
					<circle
						className="ap__worm1"
						r="56"
						cx="64"
						cy="192"
						fill="none"
						stroke="url(#ap-grad1)"
						strokeWidth="16"
						strokeLinecap="round"
						strokeDasharray="87.96 263.89"
					/>
					<path
						className="ap__worm2"
						d="M120,192A56,56,0,0,1,8,192C8,161.07,16,8,64,8S120,161.07,120,192Z"
						fill="none"
						stroke="url(#ap-grad2)"
						strokeWidth="16"
						strokeLinecap="round"
						strokeDasharray="87.96 494"
					/>
				</svg>
			</main>
		</>
	)
}
