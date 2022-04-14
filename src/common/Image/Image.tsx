import React from 'react'

import { handleImageError, handleLoadingImage } from 'modules/errors'
import { serviceConfig } from 'configs'

interface IImage {
	src: string
	alt?: string
	className?: string
	imageType?: string
	forceSrc?: boolean
}

export const Image: React.FC<IImage> = ({
	src = '',
	alt = '',
	className = '',
	imageType = 'default',
	forceSrc = false,
}) => {
	const image_src = src
		? !src.includes('http') && serviceConfig.useMockApi === 0 && !forceSrc
			? `${serviceConfig.apiHost}${src}`
			: src
		: ''

	return (
		<img
			src={image_src}
			alt={alt}
			onLoad={handleLoadingImage}
			onError={(e: any) => handleImageError(e, imageType)}
			className={className}
		/>
	)
}
