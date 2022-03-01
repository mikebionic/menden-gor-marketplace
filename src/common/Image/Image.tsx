import React from 'react';

import { handleImageError, handleLoadingImage } from 'modules/errors';
import { serviceConfig } from 'configs';

interface IImage {
  src: string;
  alt: string;
  className?: string;
}

export const Image: React.FC<IImage> = ({
  src = '',
  alt = '',
  className = '',
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
      onError={handleImageError}
      className={className}
    />
  );
};
