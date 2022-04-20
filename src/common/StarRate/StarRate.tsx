import React from 'react'
import { Rate } from 'antd'

interface IRateStarProps {
	disabled?: boolean
	value?: number
	className?: string
	starSize?: string
	allowHalf?: boolean
	onChange?: any
}

export const StarRate: React.FC<IRateStarProps> = ({
	disabled = false,
	value = 0,
	className = 'md:px-4 min-phone:px-2',
	starSize = 'text-xs',
	allowHalf = true,
	onChange,
}) => {
	return (
		<div className={className}>
			<Rate
				allowHalf={allowHalf}
				value={value > 0 ? value : 2.5}
				className={starSize}
				disabled={disabled}
				onChange={onChange}
			/>
		</div>
	)
}
