import React, { useState, useEffect } from 'react';

import { IconLabelButton } from 'common/IconLabelButton';
import { ErrorBoundary } from 'modules/errors';
import { authService } from 'sapredux/services';
import { showToastMessage } from 'sapredux/helpers';

export const AuthVerificationCard = ({onStageChange, validationData}:any) => {

	const [codeAttempts, set_codeAttempts] = useState(0);
	const retryTimeoutSeconds = 4
	const {authMethod, credentials, responseMessage} = validationData
	const [canRetrySend, set_canRetrySend] = useState(false);
	const [retryClicked, set_retryClicked] = useState(false)

	useEffect(() => {
		if(!canRetrySend){
			setTimeout(() => {
				set_canRetrySend(true);
			}, retryTimeoutSeconds*1000);
		}
		set_retryClicked(false)
	}, [canRetrySend, retryClicked])

	const handleResendCode = () => {
		canRetrySend && set_retryClicked(true)
		canRetrySend &&
    authService.registerRequest(authMethod, credentials)
      .then(
        (response:any) => {
          response.status === 1
            ? handleSuccessRetry()
            : showToastMessage({type:"error", message:response.message,  position:'center-top'})
        },
        (error:any) => showToastMessage({type:"error", message:error,  position:'center-top'})
      )
  }

	const handleSuccessRetry = () => {
		showToastMessage({type:"success", message:"Request successfully sent!",  position:'center-top'})
		set_canRetrySend(false)
	}
	useEffect(() => {
		codeAttempts > 3 && onStageChange(1)
	}, [codeAttempts, onStageChange])

	const boxes_list = [
		{id: 1,	name:'opt1'},
		{id: 2,	name:'opt2'},
		{id: 3,	name:'opt3'},
		{id: 4,	name:'opt4'},
		{id: 5,	name:'opt5'},
		{id: 6,	name:'opt6'},
	]
	const [verificationCode, setVerificationCode] = useState('')
	const handleVerificationCodeChange = (e:any) => {
		(e.target.value.length < 1)
			? setVerificationCode(verificationCode.substring(0,verificationCode.length-1))
			: setVerificationCode(`${verificationCode}${e.target.value}`)

		if (e.key === 'Delete' || e.key === 'Backspace' || e.target.value.length < 1) {}
		else {
      const next = e.target.tabIndex;
      if (next < 6) {
        e.target.form.elements[next].focus();
      }
    }
	}
	const handleRemoval = (elmnt: any) => {
    if (elmnt.key === 'Delete' || elmnt.key === 'Backspace') {
      const next = elmnt.target.tabIndex - 2;
      if (next > -1) {
        elmnt.target.form.elements[next].focus();
      }
    }
  }

	const handleSubmit = (e:any) => {
		set_codeAttempts(codeAttempts+1)
		e.preventDefault()
	}

	return (
		<ErrorBoundary>
			<div className="w-[450px] h-full p-9 place-items-center bg-fullwhite shadow-[1px_1px_4px_rgba(0,0,0,0.25)] rounded-lg grid grid-flow-row m-auto gap-6 place-content-center auto-cols-auto">
				<div>
					<IconLabelButton
						label="Back"
						className="w-32 h-11 rounded-lg bg-[linear-gradient(266.08deg,#FF8D73_1%,#FEB37A_100%)]"
						labelClassName="m-auto left-0 text-white"
						onClick={() => onStageChange(1)}
					/>
				</div>
				<div>
					<h2 className="text-lg font-semibold text-textColorOrange">
						Tassyklayys kody girizin.
					</h2>
					<hr className="w-auto mt-2 h-auto border-[0.1px] border-solid bg-textColorOrange border-textColorOrange" />
				</div>
				<div className="text-justify">
					<p className="text-base">
						{
							authMethod && authMethod === 'email'
							? 
							// `Let’s make sure it’s really you. We’ve just sent a text message
							// with a fresh verification code to your email ending in
							// ${credentials}
							// ----
							`${responseMessage}`
							: `Let’s make sure it’s really you. We’ve just sent a text message
								with a verfication code to ${credentials}`
						}
					</p>
				</div>
				<form onSubmit={handleSubmit}>
					<div className="inline-grid grid-flow-col gap-2 auto-cols-max">
						{
							boxes_list.map(({id,name}:any, idx:number) => (
								<input
									key={idx}
									name={name}
									autoFocus={id === 1 && true}
									type="text"
									autoComplete="off"
									className="w-[50px] h-[50px] bg-fullwhite focus:outline-none focus:ring-0 focus:ring-offset-0 border-[#E6E6E6] text-center focus:ring-offset-transparent focus:ring-transparent focus:border-textColorOrange border border-solid rounded-lg shadow-[0px_0px_4px_rgba(0,0,0,0.25)]"
									onChange={(e) => handleVerificationCodeChange(e)}
									tabIndex={id}
									maxLength={1}
									onFocus={(e) => e.target.value=''}
									onKeyUp={(e) => handleRemoval(e)}
								/>
							))
						}
					</div>
					<div className="text-base">
						<p>
							Tassyklayys kod gelmedimi?{' '}
							<span className={`cursor-pointer ${canRetrySend ? 'text-textColorOrange' : 'text-gray-400'}`}
								onClick={() => handleResendCode()}>
								Tazeden iber
							</span>
						</p>
					</div>
					<div>
						<IconLabelButton
							label="Next"
							className="w-32 h-11 rounded-lg bg-[linear-gradient(266.08deg,#FF8D73_1%,#FEB37A_100%)] m-auto"
							labelClassName="m-auto text-white"
							type="submit"
						/>
					</div>
				</form>
			</div>
		</ErrorBoundary>
	);
}