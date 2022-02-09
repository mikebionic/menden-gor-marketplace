import React from 'react';

import { handleImageError, handleLoadingImage } from 'modules/errors';
import { serviceConfig } from 'configs';

interface IImage {
  src: string;
  alt: string;
	className?: string;
}

export const Image: React.FC<IImage> = (props) => {

	const image_src = 
		(!props.src.includes('http') && serviceConfig.useMockApi === 0)
		? `${serviceConfig.apiHost}${props.src}`
		: props.src

	return (
		<img 
			src={image_src}
			alt={props.alt}
			onLoad={handleLoadingImage}
			onError={handleImageError}
			className={props.className}
		/>
	)
}