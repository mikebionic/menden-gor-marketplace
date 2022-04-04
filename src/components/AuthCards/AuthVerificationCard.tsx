import { useState, useEffect } from 'react';

import { IconLabelButton } from 'common/IconLabelButton';
import { ErrorBoundary } from 'modules/errors';
import { authService } from 'sapredux/services';
import { showToastMessage } from 'sapredux/helpers';

export const AuthVerificationCard = ({onStageChange, validationData, handleValidationData}:any) => {

	const [codeAttempts, set_codeAttempts] = useState(0);
	const retryTimeoutSeconds = 60
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
		codeAttempts >= 3 && 
		showToastMessage({
			type: 'error',
			message: 'Attempts exceeded!',
			position: 'center-top',
		})
		&& onStageChange(1)
	}, [codeAttempts, onStageChange])

	const [boxes_list, set_boxes_list] = useState([
		{id: 1,	name:'opt1', value:''},
		{id: 2,	name:'opt2', value:''},
		{id: 3,	name:'opt3', value:''},
		{id: 4,	name:'opt4', value:''},
		{id: 5,	name:'opt5', value:''},
		{id: 6,	name:'opt6', value:''},
	])

	const [verificationCode, setVerificationCode] = useState('')
	const handleVerificationCodeChange = async(e:any, id:number, value?:any) => {
		const updating_value = e.target.value
		const updatedList:any = updateValueInList(boxes_list, id, updating_value)
		await set_boxes_list(updatedList)
		await setVerificationCode(updatedList.map(({value}:any)=>value).join(''))
		if (e.key === 'Delete' || e.key === 'Backspace' || updating_value.length < 1) {}
		else {
      const next = e.target.tabIndex;
      if (next < 6) {
        e.target.form.elements[next].focus();
      }
    }
	}

	const updateValueInList = (arr:any, id:number, value:string) => {
    const idx = arr.findIndex((item:any) => item.id === id);
    const item = { ...arr[idx], value: value } ;
    return [
      ...arr.slice(0, idx),
      item,
      ...arr.slice(idx + 1)
    ];
  };
	const handleRemoval = (e: any) => {
    if (e.key === 'Delete' || e.key === 'Backspace') {
      const next = e.target.tabIndex - 2;
      if (next > -1) {
        e.target.form.elements[next].focus();
      }
    }
  }

	const handleSubmit = (e:any) => {
		const payload = {
			"verify_code": verificationCode,
			[authMethod]: credentials,
		}

		authService.verifyRegister(authMethod, payload).then(
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
		set_codeAttempts(codeAttempts+1)
		e.preventDefault()
	}
	const handleSuccess = (response:any) => {
    showToastMessage({
      type: 'success',
      message: response.message ? response.message : 'Successfully verified!',
      position: 'center-top',
    });

    handleValidationData({
      ...validationData,
      responseMessage: response.message,
			registerToken: response.data && response.data.token
    });
    onStageChange(3);
  };

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
							boxes_list.map(({id,name,value}:any, idx:number) => (
								<input
									key={idx}
									name={name}
									autoFocus={id === 1 && true}
									type="text"
									autoComplete="off"
									className="w-[50px] h-[50px] bg-fullwhite focus:outline-none focus:ring-0 focus:ring-offset-0 border-[#E6E6E6] text-center focus:ring-offset-transparent focus:ring-transparent focus:border-textColorOrange border border-solid rounded-lg shadow-[0px_0px_4px_rgba(0,0,0,0.25)]"
									onChange={(e) => handleVerificationCodeChange(e, id)}
									value={value}
									tabIndex={id}
									maxLength={1}
									onFocus={(e) => {e.target.value = '';handleVerificationCodeChange(e, id);}}
									onKeyUp={(e) => {handleRemoval(e)}}
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
