import React, { useState } from 'react';
import { RegisterSteps } from 'components/AuthCards';

import {
  AuthInputCard,
  AuthVerificationCard,
  RegisterRpAccCard,
} from 'components/AuthCards';

export const RegisterPage: React.FC = () => {
  const [stage, set_stage] = useState(1);
  const [validationData, set_validationData] = useState({
    authMethod: '',
    credentials: '',
    validator_phone_number: '',
    responseMessage: '',
    registerToken: '',
  });

  return (
    <div className="grid grid-flow-row place-items-center auto-rows-auto">
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
            handleValidationData={(data: any) => set_validationData(data)}
          />
        )}
        {stage === 3 && (
          <RegisterRpAccCard
            onStageChange={(stage: number) => set_stage(stage)}
            validationData={validationData}
          />
        )}
        {/* <hr className="my-8 dark:border-darkText" /> */}
      </div>
      <div className="w-[60%] my-12 mx-auto cursor-default">
        <RegisterSteps stage={stage} />
      </div>
    </div>
  );
};
