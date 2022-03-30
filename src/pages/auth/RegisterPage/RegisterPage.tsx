import React, { useState } from 'react';
import { RegisterSteps } from 'components/AuthCards';

import {
  AuthInputCard,
  AuthVerificationCard,
  RegisterRpAccCard,
} from 'components/AuthCards';

export const RegisterPage: React.FC = () => {
  const [stage, set_stage] = useState(1);
  const [validationData, set_validationData] = useState({});
  return (
    <>
      <div>
        {stage === 1 && (
          <AuthInputCard
            onStageChange={(stage: number) => set_stage(stage)}
            handleValidationData={(data: any) => set_validationData(data)}
          />
        )}
        {stage === 2 && (
          <AuthVerificationCard
            onStageChange={(stage: number) => set_stage(stage)}
            validationData={validationData}
          />
        )}
        {stage === 3 && (
          <RegisterRpAccCard
            onStageChange={(stage: number) => set_stage(stage)}
          />
        )}
        <hr className="my-8" />
      </div>
      <div className="w-[60%] my-12 mx-auto cursor-default">
        <RegisterSteps stage={stage} />
      </div>
    </>
  );
};
