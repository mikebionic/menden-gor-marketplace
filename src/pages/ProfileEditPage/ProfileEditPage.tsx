import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as R from 'ramda'

import { Button } from 'antd'
import { Input } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { getCurrentUserInfo } from 'sapredux/selectors'
import { Image, ImageUpload } from 'common/Image'
import { ErrorBoundary } from 'modules/errors'
import { authService as service } from 'sapredux/services'
import { showToastMessage } from 'sapredux/helpers'
import { toJsonRpAcc } from 'sapredux/services/transform_data'
import { ErrorIndicator } from 'modules/errors'
import { profileUpdate } from 'sapredux/actions'

const ProfileEditPage: React.FC = ({ current_user, profileUpdate }: any) => {
	const post_editProfile = async (payload: any) => {
		await service.editProfile(payload).then(
			(response: any) =>
				showToastMessage({ type: 'success', message: response.message }),
			(error: any) => showToastMessage({ type: 'error', message: error }),
		)
	}
	const onSave = (data: any) =>
		post_editProfile(toJsonRpAcc(data)).then(
			(response: any) => {
				console.log(response)
				profileUpdate(data)
			},
			(error: any) => console.log(error),
		)

	const [inputs, setInputs] = useState(current_user)
	const handleChange = (e: any) => {
		const { name, value } = e.target
		setInputs((inputs: any) => ({ ...inputs, [name]: value }))
	}

	return !R.isEmpty(current_user) ? (
		<ErrorBoundary>
			<div className="grid grid-cols-2 gap-8 p-4 text-start grid-rows-[1fr_max-content_max-content_max-content_max-content_max-content]">
				<div className="inline-grid col-start-1 col-end-3 gap-2 mx-auto grid-rows-[1fr_max-content_max-content_auto]">
					<div className="relative m-auto cursor-pointer">
						{/*<div className="absolute grid grid-flow-row rounded-full hover:opacity-70 opacity-60 hover:bg-gray-50 bg-gray-50 w-36 h-36 left-1 bottom-1 auto-cols-max place-items-center place-content-center">
							<PlusOutlined
								className="uploadPhoto"
								style={{ fontSize: '30px' }}
							/>
						</div>*/}
						{/*<Image
							className="object-cover m-auto avatar"
							src={current_user.image}
							alt={current_user.username}
							imageType="avatar"
						/>*/}
						<ImageUpload
							className="object-cover m-auto avatar"
							src={current_user.image}
							alt={current_user.username}
							imageType="avatar"
						/>
					</div>

					<small className="text-center text-black dark:text-darkTextWhiteColor">
						Hasaba alnan senesi: {current_user.createdDate}
					</small>
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
					<b className="text-black dark:text-darkTextWhiteColor">Ulanyjy ady</b>
					<Input
						className="w-11/12 inputProfileEdit dark:border-darkText dark:text-darkText dark:hover:border-darkFirstColor"
						name="username"
						value={inputs.username}
					/>
				</div>
				<div className="inline-grid gap-2">
					<b className="text-black dark:text-darkTextWhiteColor">Öý telefony</b>
					<Input
						className="w-11/12 inputProfileEdit dark:border-darkText dark:text-darkText dark:hover:border-darkFirstColor"
						name="homePhoneNumber"
						value={inputs.homePhoneNumber}
						onChange={handleChange}
					/>
				</div>
				<div className="inline-grid gap-2">
					<b className="text-black dark:text-darkTextWhiteColor">Salgy</b>
					<Input
						className="w-11/12 inputProfileEdit dark:border-darkText dark:text-darkText dark:hover:border-darkFirstColor"
						name="address"
						value={inputs.address}
						onChange={handleChange}
					/>
				</div>
				<div className="inline-grid gap-2">
					<b className="text-black dark:text-darkTextWhiteColor">Poçta kody</b>
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
					<b className="text-black dark:text-darkTextWhiteColor">El telefony</b>
					<Input
						className="w-11/12 inputProfileEdit dark:border-darkText dark:text-darkText dark:hover:border-darkFirstColor"
						name="mobilePhoneNumber"
						value={inputs.mobilePhoneNumber}
						onChange={handleChange}
					/>
				</div>
				<div className="inline-grid gap-2">
					<b className="text-black dark:text-darkTextWhiteColor">Iş telefony</b>
					<Input
						className="w-11/12 inputProfileEdit dark:border-darkText dark:text-darkText dark:hover:border-darkFirstColor"
						name="workPhoneNumber"
						value={inputs.workPhoneNumber}
						onChange={handleChange}
					/>
				</div>
				<div className="inline-grid gap-2">
					<b className="text-black dark:text-darkTextWhiteColor">Web salgysy</b>
					<Input
						className="w-11/12 inputProfileEdit dark:border-darkText dark:text-darkText dark:hover:border-darkFirstColor"
						name="webAddress"
						value={inputs.webAddress}
						onChange={handleChange}
					/>
				</div>
				<div className="inline-grid gap-2">
					<b className="text-black dark:text-darkTextWhiteColor">Faks</b>
					<Input
						className="w-11/12 inputProfileEdit dark:border-darkText dark:text-darkText dark:hover:border-darkFirstColor"
						name="workFaxNumber"
						value={inputs.workFaxNumber}
						onChange={handleChange}
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
