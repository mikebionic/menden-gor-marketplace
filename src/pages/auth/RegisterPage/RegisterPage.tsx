import React from 'react';

import {
  AuthInputCard,
  AuthVerificationCard,
  RegisterRpAccCard,
} from 'components/AuthCards';

export const RegisterPage: React.FC = () => {
  return (
    <div>
      <AuthInputCard />
      <hr className="my-8" />
      <AuthVerificationCard />
      <hr className="my-8" />
      <RegisterRpAccCard />
    </div>
  );
};
