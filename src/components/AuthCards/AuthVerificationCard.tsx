import React, { useState } from 'react';

import { IconLabelButton } from 'common/IconLabelButton';
import { ErrorBoundary } from 'modules/errors';

export const AuthVerificationCard = ({onStageChange}:any) => {

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
						Let’s make sure it’s really you. We’ve just sent a text message
						with a fresh verification code to your email ending in
						***********va@gmail.com
					</p>
				</div>
				<form
					// onSubmit={handleSubmit}
					className="inline-grid grid-flow-col gap-2 auto-cols-max"
				>
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
				</form>
				<div className="text-base">
					<p>
						Tassyklayys kod gelmedimi?{' '}
						<span className="cursor-pointer text-textColorOrange">
							Tazeden iber
						</span>
					</p>
				</div>
				<div>
					<IconLabelButton
						label="Next"
						className="w-32 h-11 rounded-lg bg-[linear-gradient(266.08deg,#FF8D73_1%,#FEB37A_100%)] m-auto"
						labelClassName="m-auto text-white"
					/>
				</div>
			</div>
		</ErrorBoundary>
	);
}