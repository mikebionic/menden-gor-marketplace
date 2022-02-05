import { ErrorBoundary } from 'modules/errors';
import React from 'react';

export const VGrid: React.FC = () => {
  return (
    <ErrorBoundary>
      <div></div>
    </ErrorBoundary>
  );
};
