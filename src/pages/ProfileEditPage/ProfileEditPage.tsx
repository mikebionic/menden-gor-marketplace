import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as R from 'ramda'
import { useParams } from 'react-router'

import { Button } from 'antd'
import { Input } from 'antd'
import { getCurrentUserInfo } from 'sapredux/selectors'
import { ImageUpload } from 'common/Image'
import { ErrorBoundary } from 'modules/errors'
import { authService as service } from 'sapredux/services'
import { showToastMessage } from 'sapredux/helpers'
import { toJsonRpAcc } from 'sapredux/services/transform_data'
import { ErrorIndicator } from 'modules/errors'
import { profileUpdate } from 'sapredux/actions'
import { Spinner } from 'modules/loaders'
import ResetPassword from './ResetPassword'
import { useTranslation } from 'react-i18next'

const ProfileEditPage: React.FC = ({ current_user, profileUpdate }: any) => {
	const { t } = useTranslation()
	const [avatar, set_avatar]: any = useState(undefined)
	const [loading, set_loading] = useState(false)

	const params: any = useParams()
	const [reset_pass_modal, set_reset_pass_modal] = useState(
		params.type === 'reset-password' ? true : false,
	)

	const [inputs, setInputs] = useState(current_user)
	const handleChange = (e: any) => {
		const { name, value } = e.target
		setInputs((inputs: any) => ({ ...inputs, [name]: value }))
	}

	const post_editProfile = async (payload: any) => {
		if (avatar) {
			let formData = new FormData()
			formData.append('image', avatar)
			await service
				.updateAvatar(formData)
				.then((response: any) => onPictureUpdate(response))
		}
		await service.editProfile(payload).then(
			(response: any) =>
				showToastMessage({ type: 'success', message: response.message }),
			(error: any) => showToastMessage({ type: 'error', message: error }),
		)
	}
	const onPictureUpdate = async (response: any) => {
		if (response.status === 1) {
			await setInputs((inputs: any) => ({
				...inputs,
				filePathM: response.data.FilePathM ?? null,
				filePathR: response.data.FilePathR ?? null,
				filePathS: response.data.FilePathS ?? null,
				image: response.data.FilePathS ?? null,
			}))
			await profileUpdate({
				filePathM: response.data.FilePathM ?? null,
				filePathR: response.data.FilePathR ?? null,
				filePathS: response.data.FilePathS ?? null,
				image: response.data.FilePathS ?? null,
			})
		}
		showToastMessage({
			type: response.status === 1 ? 'success' : 'error',
			message: response.message,
		})
	}
	const onSave = async (data: any) => {
		set_loading(true)
		delete data.filePathS
		delete data.filePathM
		delete data.filePathR
		delete data.image
		await post_editProfile(toJsonRpAcc(data))
			.then(
				(response: any) => {
					profileUpdate(data)
				},
				(error: any) => console.log(error),
			)
			.finally(() => set_loading(false))
	}

	return !R.isEmpty(current_user) ? (
		<ErrorBoundary>
			{loading && <Spinner />}
			<div className="grid grid-cols-2 gap-8 p-4 text-start grid-rows-[1fr_max-content_max-content_max-content_max-content_max-content]">
				<div className="inline-grid col-start-1 col-end-3 gap-2 mx-auto grid-rows-[1fr_max-content_max-content_auto]">
					<div className="relative m-auto cursor-pointer">
						<ImageUpload
							className="object-cover m-auto avatar"
							src={current_user.image}
							alt={current_user.username}
							imageType="avatar"
							onChange={(file: any) => set_avatar(file)}
						/>
					</div>

					<small className="text-center text-black dark:text-darkTextWhiteColor">
						Hasaba alnan senesi: {current_user.createdDate}
					</small>
					<ResetPassword reset_pass_modal={reset_pass_modal} />
					<Button
						type="ghost"
						shape="round"
						onClick={() => onSave(inputs)}
						className="dark:text-darkTextWhiteColor dark:hover:text-darkFirstColor dark:hover:border-darkFirstColor"
					>
						Save
					</Button>
				</div>
				<div className="inline-grid gap-2">
					<b className="text-black dark:text-darkTextWhiteColor">
						{t('auth.username')}
					</b>
					<Input
						className="w-11/12 inputProfileEdit dark:border-darkText dark:text-darkText dark:hover:border-darkFirstColor"
						name="username"
						value={inputs.username}
					/>
				</div>
				<div className="inline-grid gap-2">
					<b className="text-black dark:text-darkTextWhiteColor">
						{t('auth.phone_number')}
					</b>
					<Input
						className="w-11/12 inputProfileEdit dark:border-darkText dark:text-darkText dark:hover:border-darkFirstColor"
						name="homePhoneNumber"
						value={inputs.homePhoneNumber}
						onChange={handleChange}
					/>
				</div>
				<div className="inline-grid gap-2">
					<b className="text-black dark:text-darkTextWhiteColor">
						{t('auth.address')}
					</b>
					<Input
						className="w-11/12 inputProfileEdit dark:border-darkText dark:text-darkText dark:hover:border-darkFirstColor"
						name="address"
						value={inputs.address}
						onChange={handleChange}
					/>
				</div>
				<div className="inline-grid gap-2">
					<b className="text-black dark:text-darkTextWhiteColor">
						{t('auth.zip')}
					</b>
					<Input
						className="w-11/12 inputProfileEdit dark:border-darkText dark:text-darkText dark:hover:border-darkFirstColor"
						name="zipCode"
						value={inputs.zipCode}
						onChange={handleChange}
					/>
				</div>
				<div className="inline-grid gap-2">
					<b className="text-black dark:text-darkTextWhiteColor">Doly ady</b>
					<Input
						className="w-11/12 inputProfileEdit dark:border-darkText dark:text-darkText dark:hover:border-darkFirstColor"
						name="name"
						value={inputs.name}
						onChange={handleChange}
					/>
				</div>

				<div className="inline-grid gap-2">
					<b className="text-black dark:text-darkTextWhiteColor">
						{t('common.surety_phone_number_1')}
					</b>
					<Input
						className="w-11/12 inputProfileEdit dark:border-darkText dark:text-darkText dark:hover:border-darkFirstColor"
						name="workPhoneNumber"
						value={inputs.workPhoneNumber}
						onChange={handleChange}
					/>
				</div>
				<div className="inline-grid gap-2">
					<b className="text-black dark:text-darkTextWhiteColor">{`${t(
						'auth.web_address',
					)}`}</b>
					<Input
						className="w-11/12 inputProfileEdit dark:border-darkText dark:text-darkText dark:hover:border-darkFirstColor"
						name="webAddress"
						value={inputs.webAddress}
						onChange={handleChange}
					/>
				</div>
				<div className="inline-grid gap-2">
					<b className="text-black dark:text-darkTextWhiteColor">
						{t('common.surety_phone_number_2')}
					</b>
					<Input
						className="w-11/12 inputProfileEdit dark:border-darkText dark:text-darkText dark:hover:border-darkFirstColor"
						name="workFaxNumber"
						value={inputs.workFaxNumber}
						onChange={handleChange}
					/>
				</div>

				<div className="inline-grid gap-2">
					<b className="text-black dark:text-darkTextWhiteColor">
						{t('common.patronomic')}
					</b>
					<Input
						name="patronomic"
						onChange={handleChange}
						value={inputs.patronomic}
						className="w-11/12 inputProfileEdit dark:border-darkText dark:text-darkText dark:hover:border-darkFirstColor"
					/>
				</div>

				<div className="inline-grid gap-2">
					<b className="text-black dark:text-darkTextWhiteColor">
						{t('common.gender')}
					</b>
					<Input
						name="gender"
						onChange={handleChange}
						value={inputs.gender}
						className="w-11/12 inputProfileEdit dark:border-darkText dark:text-darkText dark:hover:border-darkFirstColor"
					/>
				</div>

				<div className="inline-grid gap-2">
					<b className="text-black dark:text-darkTextWhiteColor">
						{`${t('common.birth_date')} (yyyy-mm-dd)`}
					</b>
					<Input
						name="birthDate"
						onChange={handleChange}
						value={inputs.birthDate}
						className="w-11/12 inputProfileEdit dark:border-darkText dark:text-darkText dark:hover:border-darkFirstColor"
					/>
				</div>

				<div className="inline-grid gap-2">
					<b className="text-black dark:text-darkTextWhiteColor">
						{t('common.nationality')}
					</b>
					<Input
						name="nationality"
						onChange={handleChange}
						value={inputs.nationality}
						className="w-11/12 inputProfileEdit dark:border-darkText dark:text-darkText dark:hover:border-darkFirstColor"
					/>
				</div>

				<div className="inline-grid gap-2">
					<b className="text-black dark:text-darkTextWhiteColor">
						{t('common.passport_no')}
					</b>
					<Input
						name="passportNo"
						onChange={handleChange}
						value={inputs.passportNo}
						className="w-11/12 inputProfileEdit dark:border-darkText dark:text-darkText dark:hover:border-darkFirstColor"
					/>
				</div>

				<div className="inline-grid gap-2">
					<b className="text-black dark:text-darkTextWhiteColor">
						{t('common.passport_issue_place')}
					</b>
					<Input
						name="passportIssuePlace"
						onChange={handleChange}
						value={inputs.passportIssuePlace}
						className="w-11/12 inputProfileEdit dark:border-darkText dark:text-darkText dark:hover:border-darkFirstColor"
					/>
				</div>

				<div className="inline-grid gap-2">
					<b className="text-black dark:text-darkTextWhiteColor">
						{t('common.place_of_residence')}
					</b>
					<Input
						name="residency"
						onChange={handleChange}
						value={inputs.residency}
						className="w-11/12 inputProfileEdit dark:border-darkText dark:text-darkText dark:hover:border-darkFirstColor"
					/>
				</div>

				<div className="inline-grid gap-2">
					<b className="text-black dark:text-darkTextWhiteColor">
						{t('common.place_of_registration')}
					</b>
					<Input
						name="registationPlace"
						onChange={handleChange}
						value={inputs.registationPlace}
						className="w-11/12 inputProfileEdit dark:border-darkText dark:text-darkText dark:hover:border-darkFirstColor"
					/>
				</div>

				<div className="inline-grid gap-2">
					<b className="text-black dark:text-darkTextWhiteColor">
						{t('common.surety_name')}
					</b>
					<Input
						name="suretyName"
						onChange={handleChange}
						value={inputs.suretyName}
						className="w-11/12 inputProfileEdit dark:border-darkText dark:text-darkText dark:hover:border-darkFirstColor"
					/>
				</div>

				<div className="inline-grid gap-2">
					<b className="text-black dark:text-darkTextWhiteColor">
						{t('common.surety_place_of_residence')}
					</b>
					<Input
						name="suretyPlaceOfResidency"
						onChange={handleChange}
						value={inputs.suretyPlaceOfResidency}
						className="w-11/12 inputProfileEdit dark:border-darkText dark:text-darkText dark:hover:border-darkFirstColor"
					/>
				</div>

				<div className="inline-grid gap-2">
					<b className="text-black dark:text-darkTextWhiteColor">
						{t('common.surety_passport_number')}
					</b>
					<Input
						name="suretyPassportNumber"
						onChange={handleChange}
						value={inputs.suretyPassportNumber}
						className="w-11/12 inputProfileEdit dark:border-darkText dark:text-darkText dark:hover:border-darkFirstColor"
					/>
				</div>

				<div className="inline-grid gap-2">
					<b className="text-black dark:text-darkTextWhiteColor">
						{t('common.buyers_surety_relationship')}
					</b>
					<Input
						name="buyersSuretyRelationship"
						onChange={handleChange}
						value={inputs.buyersSuretyRelationship}
						className="w-11/12 inputProfileEdit dark:border-darkText dark:text-darkText dark:hover:border-darkFirstColor"
					/>
				</div>

				<div className="inline-grid gap-2">
					<b className="text-black dark:text-darkTextWhiteColor">
						{t('common.surety_phone_number_1')}
					</b>
					<Input
						type="number"
						name="workPhoneNumber"
						onChange={handleChange}
						value={inputs.workPhoneNumber}
						className="w-11/12 inputProfileEdit dark:border-darkText dark:text-darkText dark:hover:border-darkFirstColor"
					/>
				</div>
			</div>
		</ErrorBoundary>
	) : (
		<ErrorIndicator />
	)
}

const mapStateToProps = (state: any) => ({
	current_user: getCurrentUserInfo(state.auth),
})
const mapDispatchToProps = { profileUpdate }

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEditPage)
