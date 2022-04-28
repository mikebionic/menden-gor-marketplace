import { useState, useEffect } from 'react'

import { AiOutlineMail } from 'react-icons/ai'
import { FaSms } from 'react-icons/fa'
import { GrGooglePlus } from 'react-icons/gr'
import { IconLabelButton } from 'common/IconLabelButton'
import { ErrorBoundary } from 'modules/errors'
import { authService } from 'sapredux/services'
import { showToastMessage } from 'sapredux/helpers'
import { Spinner } from 'modules/loaders'
import { GoogleAuth } from 'components/GoogleAuth'
import { useTranslation } from 'react-i18next'

export const AuthInputCard = ({ onStageChange, handleValidationData }: any) => {
	const { t } = useTranslation()
	const [authMethod, set_authMethod] = useState('email')
	const [credentials, set_credentials] = useState('')
	const [loading, set_loading] = useState(false)
	const [validationData, set_validationData] = useState({
		authMethod: authMethod,
		credentials: credentials,
		validator_phone_number: '',
		responseMessage: '',
		registerToken: '',
	})
	useEffect(() => {
		set_validationData({
			...validationData,
			authMethod: authMethod,
			credentials: credentials,
		})
	}, [authMethod, credentials])

	const handleSubmit = (e: any) => {
		set_loading(true)
		authService
			.registerRequest(authMethod, credentials)
			.then(
				(response: any) => {
					response.status === 1
						? handleSuccess(response)
						: showToastMessage({
								type: 'error',
								message: response.message,
								position: 'center-top',
						  })
				},
				(error: any) =>
					showToastMessage({
						type: 'error',
						message: error,
						position: 'center-top',
					}),
			)
			.finally(() => set_loading(false))
		e.preventDefault()
	}
	const handleSuccess = (response: any) => {
		showToastMessage({
			type: 'success',
			message: t('common.request_sent'),
			position: 'center-top',
		})
		const newValidationData = {
			...validationData,
			responseMessage: response.message,
			validator_phone_number:
				authMethod === 'phone_number'
					? response.data.validator_phone_number
					: '',
		}
		set_validationData(newValidationData)
		handleValidationData(newValidationData)
		onStageChange(2)
	}

	return (
		<ErrorBoundary>
			<div className="grid w-full grid-flow-row gap-4 2xl:my-32 place-content-center auto-cols-max">
				<div className="text-center cursor-default">
					<h2 className="text-3xl font-semibold text-textColorOrange dark:text-darkFirstColor">
						{t('common.welcome')}!
					</h2>
				</div>
				<div className="text-center text-lg text-[#606060] dark:text-darkText cursor-default">
					<p>{t('common.choose_method')}:</p>
				</div>
				<div className="inline-grid grid-flow-col gap-4 auto-cols-max place-content-center">
					<div
						className="w-11 h-11 bg-fullwhite dark:bg-darkComponentColor rounded-lg cursor-pointer hover:shadow-[0px_0px_4px_rgba(0,0,0,0.25)]"
						onClick={() => set_authMethod('email')}
					>
						<AiOutlineMail className="w-full h-full p-2 text-textColorOrange dark:text-darkFirstColor" />
					</div>
					<div
						className="w-11 h-11 bg-fullwhite dark:bg-darkComponentColor rounded-lg cursor-pointer hover:shadow-[0px_0px_4px_rgba(0,0,0,0.25)]"
						onClick={() => set_authMethod('phone_number')}
					>
						<FaSms className="w-full h-full p-2 text-textColorOrange dark:text-darkFirstColor" />
					</div>
					<div
						className="w-11 h-11 bg-fullwhite dark:bg-darkComponentColor rounded-lg cursor-pointer hover:shadow-[0px_0px_4px_rgba(0,0,0,0.25)]"
						onClick={() => set_authMethod('google')}
					>
						<GrGooglePlus className="w-full h-full p-2 text-textColorOrange dark:text-darkFirstColor" />
					</div>
				</div>
				<GoogleAuth />
				<form
					className="w-[450px] h-[217px] rounded-lg shadow-[1px_1px_4px_rgba(0,0,0,0.3)] p-9 grid grid-flow-row auto-rows-auto gap-4 bg-fullwhite dark:bg-darkComponentColor"
					onSubmit={(e) => handleSubmit(e)}
				>
					{loading && <Spinner />}
					{authMethod === 'email' && (
						<div className="inline-grid grid-flow-row gap-1 auto-rows-auto">
							<p className="text-base ml-1 text-[#606060] dark:text-darkTextWhiteColor cursor-default">
								{t('auth.email')}:
							</p>
							<input
								type="email"
								name="email"
								autoFocus
								required
								placeholder={t('common.enter_email_address')}
								className="rounded-lg border dark:text-darkTextWhiteColor border-solid border-[#E6E6E6] dark:border-darkBgColor dark:bg-darkBgColor focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-transparent focus:border-textColorOrange dark:focus:border-darkFirstColor dark:placeholder-darkText"
								onChange={(e) => set_credentials(e.target.value)}
							/>
						</div>
					)}
					{authMethod === 'phone_number' && (
						<div className="inline-grid grid-flow-row gap-1 auto-rows-auto">
							<p className="text-base ml-1 text-[#606060] cursor-default">
								{t('common.phone_number')}:
							</p>
							<input
								type="number"
								name="phone_number"
								autoFocus
								required
								placeholder="+993"
								className="rounded-lg border dark:text-darkTextWhiteColor border-solid border-[#E6E6E6] dark:border-darkBgColor dark:bg-darkBgColor focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-transparent focus:border-textColorOrange dark:focus:border-darkFirstColor dark:placeholder-darkText"
								onChange={(e) => set_credentials(e.target.value)}
							/>
						</div>
					)}

					<IconLabelButton
						label={t('common.next')}
						className="w-32 h-11 rounded-lg bg-[linear-gradient(266.08deg,#FF8D73_1%,#FEB37A_100%)] dark:bg-[linear-gradient(266.08deg,#6366f1_1%,#6366f1_100%)] hover:opacity-90 m-auto"
						labelClassName="m-auto text-white"
						type="submit"
					/>
				</form>
			</div>
		</ErrorBoundary>
	)
}
