import React from 'react';

import { ErrorBoundary } from 'modules/errors'

interface IProductDesc {
  fullDescription?: string
}

export const ProductDesc: React.FC<IProductDesc> = ({fullDescription}) => {
  return (
    <ErrorBoundary>
    <div className="px-3 py-6">
      <p className="text-base text-justify font-oxygen text-textLightGray">
        {fullDescription ?? "Full description wasn't written yet..."}
      </p>
    </div>
    </ErrorBoundary>
  );
};
