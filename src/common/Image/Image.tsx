import React from 'react';

import { handleImageError, handleLoadingImage } from 'modules/errors';

interface IImage {
  src: string;
  alt: string;
	className?: string;
}

export const Image: React.FC<IImage> = (props) => {
	return (
		<img 
			src={props.src}
			alt={props.alt}
			onLoad={handleLoadingImage}
			onError={handleImageError}
			className={props.className}
		/>
	)
}