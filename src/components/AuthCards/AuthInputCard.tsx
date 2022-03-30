import { useState, useEffect } from 'react';

import { AiOutlineMail } from 'react-icons/ai';
import { FaSms } from 'react-icons/fa';
import { GrGooglePlus } from 'react-icons/gr';
import { IconLabelButton } from 'common/IconLabelButton';
import { ErrorBoundary } from 'modules/errors';
import { authService } from 'sapredux/services';
import { showToastMessage } from 'sapredux/helpers';

export const AuthInputCard = ({ onStageChange, handleValidationData }: any) => {
  const [authMethod, set_authMethod] = useState('email');
  const [credentials, set_credentials] = useState('');
  const [validationData, set_validationData] = useState({
    authMethod: authMethod,
    credentials: credentials,
    validator_phone_number: '',
    responseMessage: '',
  });
  useEffect(() => {
    set_validationData({
      ...validationData,
      authMethod: authMethod,
      credentials: credentials,
    });
  }, [authMethod, credentials]);

  const handleSubmit = (e: any) => {
    authService.registerRequest(authMethod, credentials).then(
      (response: any) => {
        response.status === 1
          ? handleSuccess(response)
          : showToastMessage({
              type: 'error',
              message: response.message,
              position: 'center-top',
            });
      },
      (error: any) =>
        showToastMessage({
          type: 'error',
          message: error,
          position: 'center-top',
        }),
    );
    e.preventDefault();
  };
  const handleSuccess = (response: any) => {
    showToastMessage({
      type: 'success',
      message: 'Request successfully sent!',
      position: 'center-top',
    });
    const newValidationData = {
      ...validationData,
      responseMessage: response.message,
      validator_phone_number:
        authMethod === 'phone_number'
          ? response.data.validator_phone_number
          : '',
    };
    set_validationData(newValidationData);
    handleValidationData(newValidationData);
    onStageChange(2);
  };

  return (
    <ErrorBoundary>
      <div className="grid w-full grid-flow-row gap-4 place-content-center auto-cols-max">
        <div className="text-center cursor-default">
          <h2 className="text-3xl font-semibold text-textColorOrange">
            Welcome!!!
          </h2>
        </div>
        <div className="text-center text-lg text-[#606060] cursor-default">
          <p>Giris usulyny saylan:</p>
        </div>
        <div className="inline-grid grid-flow-col gap-4 auto-cols-max place-content-center">
          <div
            className="w-11 h-11 bg-fullwhite rounded-lg cursor-pointer hover:shadow-[0px_0px_4px_rgba(0,0,0,0.25)]"
            onClick={() => set_authMethod('email')}
          >
            <AiOutlineMail className="w-full h-full p-2 text-textColorOrange" />
          </div>
          <div
            className="w-11 h-11 bg-fullwhite rounded-lg cursor-pointer hover:shadow-[0px_0px_4px_rgba(0,0,0,0.25)]"
            onClick={() => set_authMethod('phone_number')}
          >
            <FaSms className="w-full h-full p-2 text-textColorOrange" />
          </div>
          <div
            className="w-11 h-11 bg-fullwhite rounded-lg cursor-pointer hover:shadow-[0px_0px_4px_rgba(0,0,0,0.25)]"
            onClick={() => set_authMethod('google')}
          >
            <GrGooglePlus className="w-full h-full p-2 text-textColorOrange" />
          </div>
        </div>
        <form
          className="w-[450px] h-[217px] rounded-lg shadow-[1px_1px_4px_rgba(0,0,0,0.3)] p-9 grid grid-flow-row auto-rows-auto gap-4"
          onSubmit={(e) => handleSubmit(e)}
        >
          {authMethod === 'email' && (
            <div className="inline-grid grid-flow-row gap-1 auto-rows-auto">
              <p className="text-base ml-1 text-[#606060] cursor-default">
                Email address:
              </p>
              <input
                type="email"
                name="email"
                autoFocus
                required
                placeholder="Enter your email address"
                className="rounded-lg border border-solid border-[#E6E6E6] focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-transparent focus:border-textColorOrange"
                onChange={(e) => set_credentials(e.target.value)}
              />
            </div>
          )}
          {authMethod === 'phone_number' && (
            <div className="inline-grid grid-flow-row gap-1 auto-rows-auto">
              <p className="text-base ml-1 text-[#606060] cursor-default">
                Phone number:
              </p>
              <input
                type="number"
                name="phone_number"
                autoFocus
                required
                placeholder="+993"
                className="rounded-lg border border-solid border-[#E6E6E6] focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-transparent focus:border-textColorOrange"
                onChange={(e) => set_credentials(e.target.value)}
              />
            </div>
          )}

          <IconLabelButton
            label="Next"
            className="w-32 h-11 rounded-lg bg-[linear-gradient(266.08deg,#FF8D73_1%,#FEB37A_100%)] m-auto"
            labelClassName="m-auto text-white"
            type="submit"
          />
        </form>
      </div>
    </ErrorBoundary>
  );
};
