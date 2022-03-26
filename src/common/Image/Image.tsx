import React from 'react';

import { handleImageError, handleLoadingImage } from 'modules/errors';
import { serviceConfig } from 'configs';

interface IImage {
  src: string;
  alt?: string;
  className?: string;
  imageType?: string;
}

export const Image: React.FC<IImage> = ({
  src = '',
  alt = '',
  className = '',
  imageType = 'default',
}) => {
  const image_src = src
    ? !src.includes('http') && serviceConfig.useMockApi === 0
      ? `${serviceConfig.apiHost}${src}`
      : src
    : '';

  return (
    <img
      src={image_src}
      alt={alt}
      onLoad={handleLoadingImage}
      onError={(e:any) => handleImageError(e, imageType)}
      className={className}
    />
  );
};
