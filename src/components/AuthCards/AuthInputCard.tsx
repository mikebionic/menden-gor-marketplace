import { useState } from 'react'

import { AiOutlineMail } from 'react-icons/ai';
import { FaSms } from 'react-icons/fa';
import { GrGooglePlus } from 'react-icons/gr';
import { IconLabelButton } from 'common/IconLabelButton';
import { ErrorBoundary } from 'modules/errors';


export const AuthInputCard = ({onStageChange}:any) => {
  const [authType, set_authType] = useState('email')

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
          <div className="w-11 h-11 bg-fullwhite rounded-lg cursor-pointer hover:shadow-[0px_0px_4px_rgba(0,0,0,0.25)]"
            onClick={() => set_authType('email')}>
            <AiOutlineMail className="w-full h-full p-2 text-textColorOrange" />
          </div>
          <div className="w-11 h-11 bg-fullwhite rounded-lg cursor-pointer hover:shadow-[0px_0px_4px_rgba(0,0,0,0.25)]"
            onClick={() => set_authType('phone_number')}>
            <FaSms className="w-full h-full p-2 text-textColorOrange" />
          </div>
          <div className="w-11 h-11 bg-fullwhite rounded-lg cursor-pointer hover:shadow-[0px_0px_4px_rgba(0,0,0,0.25)]"
            onClick={() => set_authType('google')}>
            <GrGooglePlus className="w-full h-full p-2 text-textColorOrange" />
          </div>
        </div>
        <div className="w-[450px] h-[217px] rounded-lg shadow-[1px_1px_4px_rgba(0,0,0,0.3)] p-9 grid grid-flow-row auto-rows-auto gap-4">

          {(authType === 'email') && (
            <div className="inline-grid grid-flow-row gap-1 auto-rows-auto">
              <p className="text-base ml-1 text-[#606060] cursor-default">
                Email address:
              </p>
              <input
                type="email"
                name="email"
                autoFocus
                placeholder="Enter your email address"
                className="rounded-lg border border-solid border-[#E6E6E6] focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-transparent focus:border-textColorOrange"
                required
              />
            </div>
          )}
          {(authType === 'phone_number') && (
            <div className="inline-grid grid-flow-row gap-1 auto-rows-auto">
              <p className="text-base ml-1 text-[#606060] cursor-default">
                Phone number:
              </p>
              <input
                type="number"
                name="phone_number"
                autoFocus
                placeholder="+993"
                className="rounded-lg border border-solid border-[#E6E6E6] focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-transparent focus:border-textColorOrange"
                required
              />
            </div>
          )}          

          <IconLabelButton
            label="Next"
            className="w-32 h-11 rounded-lg bg-[linear-gradient(266.08deg,#FF8D73_1%,#FEB37A_100%)] m-auto"
            labelClassName="m-auto text-white"
            onClick={() => onStageChange(2)}
          />
        </div>
      </div>
    </ErrorBoundary>
  );
};
