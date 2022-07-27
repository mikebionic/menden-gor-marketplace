import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router'
import { Form, Input, Select } from 'antd'

import { IconLabelButton } from 'common/IconLabelButton'
import { ErrorBoundary } from 'modules/errors'
import { toJsonRpAcc } from 'sapredux/services/transform_data'
import { register_rp_acc } from 'sapredux/actions'
import { Spinner } from 'modules/loaders'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { useTranslation } from 'react-i18next'
import { Collapse } from 'antd'

const { Option } = Select
const { Panel } = Collapse

const formItemLayout = {
	labelCol: {
		xs: { span: 24 },
		sm: { span: 8 },
	},
	wrapperCol: {
		xs: { span: 24 },
		sm: { span: 16 },
	},
}
const tailFormItemLayout = {
	wrapperCol: {
		xs: {
			span: 24,
			offset: 0,
		},
		sm: {
			span: 16,
			offset: 8,
		},
	},
}

const RegisterRpAccCard = ({
	onStageChange,
	validationData,
	loggedIn,
	register_rp_acc,
}: any) => {
	const { t } = useTranslation()
	const { authMethod, credentials, registerToken } = validationData
	const [loading, set_loading] = useState(false)

	const navigate = useNavigate()
	loggedIn && navigate('/')

	const [inputs, setInputs] = useState({
		district: 'Ashgabat',

		address: '',
		// birthDate: '',
		email: authMethod === 'email' ? credentials : '',
		name: '',
		firstName: '',
		lastName: '',
		typeId: 2,
		username: '',
		password: '',
		phonePrefix: '+993',
		homePhoneNumber: authMethod === 'phone_number' ? credentials : '',
		mobilePhoneNumber: authMethod === 'phone_number' ? credentials : '',
		webAddress: authMethod === 'email' ? credentials : '',
		// workFaxNumber: '',
		workPhoneNumber: '',
		zipCode: '',
		latitude: '',
		logitude: '',

		patronomic: '',
		gender: '',
		birthDate: '',
		placeOfBirth: '',
		nationality: '',
		passportNo: '',
		passportIssuePlace: '',
		residency: '',
		registrationPlace: '',
		suretyName: '',
		suretyPlaceOfResidence: '',
		suretyPassportNumber: '',
		buyersSuretyRelationship: '',
		// mobilePhoneNumber: '',
		workFaxNumber: '',
	})

	const handleChange = (e: any) => {
		let { name, value } = e.target
		if (name === 'address') {
			value = `${inputs.district}, ${value}`
		}
		setInputs((inputs) => ({ ...inputs, [name]: value }))
	}
	const handleKeyValueChange = (name: string = '', value: any = '') => {
		setInputs((inputs) => ({ ...inputs, [name]: value }))
	}

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function (position) {
				handleKeyValueChange('latitude', position.coords.latitude)
				handleKeyValueChange('longitude', position.coords.longitude)
			})
		}
	}, [navigator.geolocation])

	useEffect(() => {
		setInputs((inputs) => ({
			...inputs,
			name: `${inputs.firstName} ${inputs.lastName}`,
			workPhoneNumber: `${inputs.workPhoneNumber}`,
		}))
	}, [inputs.firstName, inputs.lastName])

	const handleSubmit = async () => {
		set_loading(true)
		register_rp_acc(
			authMethod,
			registerToken,
			toJsonRpAcc(inputs, true),
			true,
			set_loading,
		)
	}

	return loading ? (
		<Spinner />
	) : (
		<ErrorBoundary>
			<div className="container w-[610px] h-full m-auto p-8 overflow-hidden shadow-[1px_1px_4px_rgba(0,0,0,0.25)] bg-fullwhite dark:bg-darkComponentColor rounded-lg">
				<IoMdArrowRoundBack
					className="text-xl cursor-pointer text-textColorOrange hover:opacity-80 dark:text-darkFirstColor"
					onClick={() => onStageChange(1)}
				/>
				<div className="grid grid-flow-row gap-6 place-content-center auto-cols-auto place-items-center">
					<div>
						<p className="text-lg font-semibold text-textColorOrange dark:text-darkFirstColor">
							{t('common.register')}
						</p>
					</div>
					<Form
						{...formItemLayout}
						name="register"
						onFinish={handleSubmit}
						scrollToFirstError
						className="max-w-lg mx-auto"
					>
						<Form.Item name="Welayat" label={t('auth.district')}>
							<Select
								placeholder={t('common.choose_district')}
								name="district"
								defaultValue={inputs.district}
								onChange={(e: any) => handleKeyValueChange('district', e)}
							>
								<Option value="Ashgabat">Ashgabat</Option>
								<Option value="Ahal">Ahal</Option>
								<Option value="Mary">Mary</Option>
								<Option value="Lebap">Lebap</Option>
								<Option value="Dashoguz">Dashoguz</Option>
								<Option value="Balkan">Balkan</Option>
							</Select>
						</Form.Item>

						<Form.Item name="Address" label={t('auth.address')}>
							<Input
								className="rounded-lg border-[#E6E6E6] hover:border-textColorOrange dark:bg-darkBgColor dark:border-darkBgColor dark:hover:border-darkFirstColor h-9 dark:text-darkTextWhiteColor"
								name="address"
								onChange={handleChange}
							/>
						</Form.Item>

						<Form.Item name="role" label={t('auth.profile_type')}>
							<div className="grid grid-flow-col gap-4 auto-cols-max">
								<div
									className="grid grid-flow-col gap-2 auto-cols-max"
									onClick={() => handleKeyValueChange('typeId', 2)}
								>
									<input
										className="w-3 h-3 my-auto transform scale-125 cursor-pointer dark:bg-darkTextWhiteColor text-firstColorGradientFromDark dark:text-darkFirstColor focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-transparent border-textColorOrange dark:border-darkFirstColor"
										type="radio"
										checked={inputs.typeId === 2 && true}
										onChange={() => {}}
									/>
									<p className="text-sm text-black dark:text-darkTextWhiteColor">
										{t('auth.customer')}
									</p>
								</div>
								<div
									className="grid grid-flow-col gap-2 auto-cols-max"
									onClick={() => handleKeyValueChange('typeId', 1)}
								>
									<input
										className="w-3 h-3 my-auto transform scale-125 cursor-pointer dark:bg-darkTextWhiteColor text-firstColorGradientFromDark dark:text-darkFirstColor focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-transparent border-textColorOrange dark:border-darkFirstColor"
										type="radio"
										checked={inputs.typeId === 1 && true}
										onChange={() => {}}
									/>
									<p className="text-sm text-black dark:text-darkTextWhiteColor">
										{t('auth.salesman')}
									</p>
								</div>
							</div>
						</Form.Item>

						<Form.Item
							name="webaddress"
							label={`${t('auth.email')} / ${t('auth.web_address')}`}
							initialValue={inputs.webAddress}
						>
							<Input
								className="rounded-lg min-h-[32px] border-[#E6E6E6] hover:border-textColorOrange dark:bg-darkBgColor dark:border-darkBgColor dark:hover:border-darkFirstColor h-9 dark:text-darkTextWhiteColor"
								name="webAddress"
								onChange={handleChange}
							/>
						</Form.Item>

						<Form.Item
							name="password"
							label={t('auth.password')}
							rules={[
								{
									required: true,
									message: t('common.input_password'),
								},
							]}
							hasFeedback
						>
							<Input.Password className="rounded-lg dark:bg-darkBgColor" />
						</Form.Item>

						<Form.Item
							name="confirm"
							label={t('auth.confirm_password')}
							dependencies={['password']}
							hasFeedback
							rules={[
								{
									required: true,
									message: t('common.confirm_password'),
								},
								({ getFieldValue }: any) => ({
									validator(_: any, value: any) {
										if (!value || getFieldValue('password') === value) {
											handleKeyValueChange('password', value)
											return Promise.resolve()
										}
										return Promise.reject(
											new Error(t('common.passwords_dont_match')),
										)
									},
								}),
							]}
						>
							<Input.Password className="rounded-lg dark:bg-darkBgColor" />
						</Form.Item>

						<Form.Item
							name="username"
							label={t('auth.username')}
							rules={[
								{
									required: true,
									message: t('common.input_username'),
								},
							]}
						>
							<Input
								className="rounded-lg min-h-[32px] border-[#E6E6E6] hover:border-textColorOrange dark:bg-darkBgColor dark:border-darkBgColor dark:hover:border-darkFirstColor h-9 dark:text-darkTextWhiteColor"
								name="username"
								onChange={handleChange}
							/>
						</Form.Item>
						<Form.Item
							name="firstName"
							label={t('auth.first_name')}
							initialValue={inputs.firstName}
						>
							<Input
								className="rounded-lg min-h-[32px] border-[#E6E6E6] hover:border-textColorOrange dark:bg-darkBgColor dark:border-darkBgColor dark:hover:border-darkFirstColor h-9 dark:text-darkTextWhiteColor"
								name="firstName"
								onChange={handleChange}
							/>
						</Form.Item>
						<Form.Item
							name="lastName"
							label={t('auth.last_name')}
							initialValue={inputs.lastName}
						>
							<Input
								className="rounded-lg min-h-[32px] border-[#E6E6E6] hover:border-textColorOrange dark:bg-darkBgColor dark:border-darkBgColor dark:hover:border-darkFirstColor h-9 dark:text-darkTextWhiteColor"
								name="lastName"
								onChange={handleChange}
							/>
						</Form.Item>

						<Form.Item
							name="phone"
							label={t('auth.phone_number')}
							initialValue={inputs.homePhoneNumber}
							rules={[
								{
									required: true,
									message: t('common.input_phone_number'),
								},
							]}
						>
							<Input
								style={{ width: '100%' }}
								className="rounded-lg min-h-[32px] border-[#E6E6E6] hover:border-textColorOrange dark:bg-darkBgColor dark:border-darkBgColor dark:hover:border-darkFirstColor h-9 dark:text-darkTextWhiteColor"
								type="number"
								name="homePhoneNumber"
								onChange={handleChange}
							/>
						</Form.Item>
						{/* <Form.Item
							name="workPhone"
							label={t('auth.work_phone')}
							initialValue={inputs.workPhoneNumber}
						>
							<Input
								style={{ width: '100%' }}
								className="rounded-lg min-h-[32px] border-[#E6E6E6] hover:border-textColorOrange dark:bg-darkBgColor dark:border-darkBgColor dark:hover:border-darkFirstColor h-9 dark:text-darkTextWhiteColor"
								type="number"
								name="workPhoneNumber"
								onChange={handleChange}
							/>
						</Form.Item> */}
						{/* <Form.Item
							name="Fax"
							label={t('auth.fax')}
							initialValue={inputs.workFaxNumber}
						>
							<Input
								style={{ width: '100%' }}
								className="rounded-lg min-h-[32px] border-[#E6E6E6] hover:border-textColorOrange dark:bg-darkBgColor dark:border-darkBgColor dark:hover:border-darkFirstColor h-9 dark:text-darkTextWhiteColor"
								type="text"
								name="workFaxNumber"
								onChange={handleChange}
							/>
						</Form.Item> */}
						<Form.Item
							name="zip"
							label={t('auth.zip')}
							initialValue={inputs.zipCode}
						>
							<Input
								style={{ width: '100%' }}
								className="rounded-lg min-h-[32px] border-[#E6E6E6] hover:border-textColorOrange dark:bg-darkBgColor dark:border-darkBgColor dark:hover:border-darkFirstColor h-9 dark:text-darkTextWhiteColor"
								type="text"
								name="zipCode"
								onChange={handleChange}
							/>
						</Form.Item>
						<Collapse ghost>
							<Panel
								className="text-sm"
								header={t('common.extra_informations_rp_acc')}
							>
								<Form.Item
									name="patronomic"
									label={t('common.patronomic')}
									initialValue={inputs.patronomic}
								>
									<Input
										placeholder={t('common.patronomic')}
										type="text"
										name="patronomic"
										onChange={handleChange}
										inputMode="text"
										className="rounded-lg min-h-[32px] border-[#E6E6E6] hover:border-textColorOrange dark:bg-darkBgColor dark:border-darkBgColor dark:hover:border-darkFirstColor h-9 dark:text-darkTextWhiteColor"
									/>
								</Form.Item>
								<Form.Item
									name="gender"
									label={t('common.gender')}
									initialValue={inputs.gender}
								>
									<Input
										placeholder={t('common.gender')}
										type="text"
										name="gender"
										onChange={handleChange}
										inputMode="text"
										className="rounded-lg min-h-[32px] border-[#E6E6E6] hover:border-textColorOrange dark:bg-darkBgColor dark:border-darkBgColor dark:hover:border-darkFirstColor h-9 dark:text-darkTextWhiteColor"
									/>
								</Form.Item>
								<Form.Item
									name="birthDate"
									label={t('common.birth_date')}
									initialValue={inputs.birthDate}
								>
									<Input
										placeholder={t('common.birth_date')}
										type="text"
										name="birthDate"
										onChange={handleChange}
										inputMode="text"
										className="rounded-lg min-h-[32px] border-[#E6E6E6] hover:border-textColorOrange dark:bg-darkBgColor dark:border-darkBgColor dark:hover:border-darkFirstColor h-9 dark:text-darkTextWhiteColor"
									/>
								</Form.Item>
								<Form.Item
									name="placeOfBirth"
									label={t('common.place_of_birth')}
									initialValue={inputs.placeOfBirth}
								>
									<Input
										placeholder={t('common.place_of_birth')}
										type="text"
										name="placeOfBirth"
										onChange={handleChange}
										inputMode="text"
										className="rounded-lg min-h-[32px] border-[#E6E6E6] hover:border-textColorOrange dark:bg-darkBgColor dark:border-darkBgColor dark:hover:border-darkFirstColor h-9 dark:text-darkTextWhiteColor"
									/>
								</Form.Item>
								<Form.Item
									name="nationality"
									label={t('common.nationality')}
									initialValue={inputs.nationality}
								>
									<Input
										placeholder={t('common.nationality')}
										type="text"
										name="nationality"
										onChange={handleChange}
										inputMode="text"
										className="rounded-lg min-h-[32px] border-[#E6E6E6] hover:border-textColorOrange dark:bg-darkBgColor dark:border-darkBgColor dark:hover:border-darkFirstColor h-9 dark:text-darkTextWhiteColor"
									/>
								</Form.Item>
								<Form.Item
									name="passportNo"
									label={t('common.passport_no')}
									initialValue={inputs.passportNo}
								>
									<Input
										placeholder={t('common.passport_no')}
										type="text"
										name="passportNo"
										onChange={handleChange}
										inputMode="text"
										className="rounded-lg min-h-[32px] border-[#E6E6E6] hover:border-textColorOrange dark:bg-darkBgColor dark:border-darkBgColor dark:hover:border-darkFirstColor h-9 dark:text-darkTextWhiteColor"
									/>
								</Form.Item>
								<Form.Item
									name="passportIssuePlace"
									label={t('common.passport_issue_place')}
									initialValue={inputs.passportIssuePlace}
								>
									<Input
										placeholder={t('common.passport_issue_place')}
										type="text"
										name="passportIssuePlace"
										onChange={handleChange}
										inputMode="text"
										className="rounded-lg min-h-[32px] border-[#E6E6E6] hover:border-textColorOrange dark:bg-darkBgColor dark:border-darkBgColor dark:hover:border-darkFirstColor h-9 dark:text-darkTextWhiteColor"
									/>
								</Form.Item>
								<Form.Item
									name="residency"
									label={t('common.place_of_residence')}
									initialValue={inputs.residency}
								>
									<Input
										placeholder={t('common.place_of_residence')}
										type="text"
										name="residency"
										onChange={handleChange}
										inputMode="text"
										className="rounded-lg min-h-[32px] border-[#E6E6E6] hover:border-textColorOrange dark:bg-darkBgColor dark:border-darkBgColor dark:hover:border-darkFirstColor h-9 dark:text-darkTextWhiteColor"
									/>
								</Form.Item>
								<Form.Item
									name="registrationPlace"
									label={t('common.place_of_registration')}
									initialValue={inputs.registrationPlace}
								>
									<Input
										placeholder={t('common.place_of_registration')}
										type="text"
										name="registrationPlace"
										onChange={handleChange}
										inputMode="text"
										className="rounded-lg min-h-[32px] border-[#E6E6E6] hover:border-textColorOrange dark:bg-darkBgColor dark:border-darkBgColor dark:hover:border-darkFirstColor h-9 dark:text-darkTextWhiteColor"
									/>
								</Form.Item>
								<Form.Item
									name="suretyName"
									label={t('common.surety_name')}
									initialValue={inputs.suretyName}
								>
									<Input
										placeholder={t('common.surety_name')}
										type="text"
										name="suretyName"
										onChange={handleChange}
										inputMode="text"
										className="rounded-lg min-h-[32px] border-[#E6E6E6] hover:border-textColorOrange dark:bg-darkBgColor dark:border-darkBgColor dark:hover:border-darkFirstColor h-9 dark:text-darkTextWhiteColor"
									/>
								</Form.Item>
								<Form.Item
									name="suretyPlaceOfResidence"
									label={t('common.surety_place_of_residence')}
									initialValue={inputs.suretyPlaceOfResidence}
								>
									<Input
										placeholder={t('common.surety_place_of_residence')}
										type="text"
										name="suretyPlaceOfResidence"
										onChange={handleChange}
										inputMode="text"
										className="rounded-lg min-h-[32px] border-[#E6E6E6] hover:border-textColorOrange dark:bg-darkBgColor dark:border-darkBgColor dark:hover:border-darkFirstColor h-9 dark:text-darkTextWhiteColor"
									/>
								</Form.Item>
								<Form.Item
									name="suretyPassportNumber"
									label={t('common.surety_passport_number')}
									initialValue={inputs.suretyPassportNumber}
								>
									<Input
										placeholder={t('common.surety_passport_number')}
										type="text"
										name="suretyPassportNumber"
										onChange={handleChange}
										inputMode="text"
										className="rounded-lg min-h-[32px] border-[#E6E6E6] hover:border-textColorOrange dark:bg-darkBgColor dark:border-darkBgColor dark:hover:border-darkFirstColor h-9 dark:text-darkTextWhiteColor"
									/>
								</Form.Item>
								<Form.Item
									name="buyersSuretyRelationship"
									label={t('common.buyers_surety_relationship')}
									initialValue={inputs.buyersSuretyRelationship}
								>
									<Input
										placeholder={t('common.buyers_surety_relationship')}
										type="text"
										name="buyersSuretyRelationship"
										onChange={handleChange}
										inputMode="text"
										className="rounded-lg min-h-[32px] border-[#E6E6E6] hover:border-textColorOrange dark:bg-darkBgColor dark:border-darkBgColor dark:hover:border-darkFirstColor h-9 dark:text-darkTextWhiteColor"
									/>
								</Form.Item>
								<Form.Item
									name="workPhoneNumber"
									label={t('common.surety_phone_number_1')}
									initialValue={inputs.workPhoneNumber}
								>
									<Input
										placeholder={t('common.surety_phone_number_1')}
										type="number"
										name="workPhoneNumber"
										onChange={handleChange}
										inputMode="text"
										className="rounded-lg min-h-[32px] border-[#E6E6E6] hover:border-textColorOrange dark:bg-darkBgColor dark:border-darkBgColor dark:hover:border-darkFirstColor h-9 dark:text-darkTextWhiteColor"
									/>
								</Form.Item>
								<Form.Item
									name="workFaxNumber"
									label={t('common.surety_phone_number_2')}
									initialValue={inputs.workFaxNumber}
								>
									<Input
										placeholder={t('common.surety_phone_number_2')}
										type="number"
										name="workFaxNumber"
										onChange={handleChange}
										inputMode="text"
										className="rounded-lg min-h-[32px] border-[#E6E6E6] hover:border-textColorOrange dark:bg-darkBgColor dark:border-darkBgColor dark:hover:border-darkFirstColor h-9 dark:text-darkTextWhiteColor"
									/>
								</Form.Item>
							</Panel>
						</Collapse>
						<Form.Item {...tailFormItemLayout}>
							<IconLabelButton
								label={t('common.register')}
								className="w-32 m-auto rounded-lg h-11 bg-gradient-to-r from-firstColorGradientFromDark to-secondColorGradientToLight dark:bg-gradient-to-r dark:from-darkFirstColor dark:to-darkFirstColor hover:opacity-90"
								labelClassName="m-auto text-white"
								type="primary"
								htmlType="submit"
							/>
						</Form.Item>
					</Form>
				</div>
			</div>
		</ErrorBoundary>
	)
}

const mapStateToProps = (state: any) => ({
	loggedIn: state.auth.loggedIn,
})
const mapDispatchToProps = { register_rp_acc }

export default connect(mapStateToProps, mapDispatchToProps)(RegisterRpAccCard)
