import React, { useState } from 'react'
import { useDispatch, connect } from 'react-redux'
import { useNavigate } from 'react-router'
import { useTranslation } from 'react-i18next'
import { Form, Input } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

import { authActions } from 'sapredux/actions'
import { routeConstants } from 'navigation'
import { ErrorBoundary } from 'modules/errors'
import { IconLabelButton } from 'common/IconLabelButton'
import { Spinner } from 'modules/loaders'
import { GoogleAuth } from 'components/GoogleAuth'
import { AiOutlineMail } from 'react-icons/ai'
import { FaSms } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const LoginPage: React.FC = (props: any) => {
	const { loggedIn, loading } = props
	const { t } = useTranslation()
	const navigate = useNavigate()
	const [authMethod, set_authMethod] = useState('email')

	const [inputs, setInputs] = useState({
		username: '',
		password: '',
	})
	const { username, password } = inputs
	const dispatch = useDispatch()

	if (!!loggedIn) {
		navigate(routeConstants.root.route)
	}

	const handleChange = (e: any) => {
		const { name, value } = e.target
		setInputs((inputs) => ({ ...inputs, [name]: value }))
	}
	const handleKeyValueChange = (name: string = '', value: any = '') => {
		setInputs((inputs) => ({ ...inputs, [name]: value }))
	}

	const handleSubmit = (e: any) => {
		if (username && password) {
			dispatch(authActions.login(username, password, authMethod))
		}
	}

	return (
		<ErrorBoundary>
			<div className="grid w-full grid-flow-row gap-4 font-sans text-gray-700 2xl:my-32 place-content-center place-items-center auto-cols-max">
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
					{/*<div
						className="w-11 h-11 bg-fullwhite dark:bg-darkComponentColor rounded-lg cursor-pointer hover:shadow-[0px_0px_4px_rgba(0,0,0,0.25)]"
						onClick={() => set_authMethod('google')}
					>
						<GrGooglePlus className="w-full h-full p-2 text-textColorOrange dark:text-darkFirstColor" />
					</div>*/}
				</div>

				<GoogleAuth />

				<div className="container flex min-phone:pt-8 md:!pt-0 md:pb-12 mx-auto 2xl:h-[50rem]">
					<div className="w-full max-w-md m-auto">
						<div className="overflow-hidden md:shadow-defaultShadow md:bg-glass rounded-2xl md:backdrop-filter md:backdrop-blur-glass">
							{loading && <Spinner />}

							<Form
								name="normal_login"
								className="max-w-full min-phone:p-4 md:p-8 dark:bg-darkComponentColor"
								initialValues={{ remember: true }}
								onFinish={handleSubmit}
							>
								{authMethod === 'email' && (
									<Form.Item
										name="email"
										rules={[
											{
												required: true,
												message: t('common.enter_email_address'),
											},
										]}
									>
										{/* <p className="text-base ml-1 text-[#606060] dark:text-darkTextWhiteColor cursor-default">
											{t('auth.email')}:
										</p> */}
										<Input
											prefix={
												<UserOutlined className="pr-2 site-form-item-icon" />
											}
											autoFocus
											type="email"
											name="email"
											value={username}
											onChange={(e: any) =>
												handleKeyValueChange('username', e.target.value)
											}
											required
											placeholder={t('common.enter_email_address')}
											inputMode="email"
											className="rounded-lg min-h-[32px] border-[#E6E6E6] dark:border-darkBgColor dark:bg-darkBgColor dark:text-darkTextWhiteColor hover:border-textColorOrange dark:hover:border-darkFirstColor w-[18rem]"
										/>
									</Form.Item>
								)}

								{authMethod === 'phone_number' && (
									<Form.Item
										name="phone_number"
										rules={[
											{
												required: true,
												message: t('auth.phone_number'),
											},
										]}
									>
										{/* <p className="text-base ml-1 text-[#606060] dark:text-darkTextWhiteColor cursor-default">
											{t('auth.phone_number')}:
										</p> */}
										<Input
											prefix={
												<UserOutlined className="pr-2 site-form-item-icon" />
											}
											autoFocus
											value={username}
											onChange={(e: any) =>
												handleKeyValueChange('username', e.target.value)
											}
											required
											type="number"
											name="phone_number"
											placeholder="+993"
											className="rounded-lg min-h-[32px] border-[#E6E6E6] dark:border-darkBgColor dark:bg-darkBgColor dark:text-darkTextWhiteColor hover:border-textColorOrange dark:hover:border-darkFirstColor w-[18rem]"
										/>
									</Form.Item>
								)}

								<Form.Item
									name="password"
									rules={[
										{ required: true, message: t('common.input_password') },
									]}
									className="mb-2"
								>
									<Input
										prefix={
											<LockOutlined className="pr-2 site-form-item-icon" />
										}
										type="password"
										placeholder={t('auth.password')}
										name="password"
										value={password}
										onChange={handleChange}
										className="rounded-lg min-h-[32px] border-[#E6E6E6] dark:border-darkBgColor dark:bg-darkBgColor dark:text-darkTextWhiteColor hover:border-textColorOrange dark:hover:border-darkFirstColor w-[18rem]"
									/>
								</Form.Item>
								<Form.Item className="!mb-2">
									<Link
										to={routeConstants.reset.route}
										className="float-right hover:text-textColorOrange dark:hover:text-darkFirstColor dark:text-darkTextWhiteColor"
									>
										{t('auth.forgot_password')}
									</Link>
								</Form.Item>

								<Form.Item className="h-auto">
									<IconLabelButton
										label={t('common.login')}
										className="w-full m-auto rounded-lg h-11 bg-gradient-to-r from-firstColorGradientFromDark to-secondColorGradientToLight dark:bg-gradient-to-r dark:from-darkFirstColor dark:to-darkFirstColor hover:opacity-90"
										labelClassName="m-auto text-white"
										type="primary"
										htmlType="submit"
									/>
									<div className="mt-2 dark:text-darkTextWhiteColor">
										{t('common.or')}{' '}
										<Link
											to={routeConstants.register.route}
											className="hover:text-textColorOrange dark:hover:text-darkFirstColor"
										>
											{t('auth.register_now')}
										</Link>
									</div>
								</Form.Item>
							</Form>
						</div>
					</div>
				</div>
			</div>
		</ErrorBoundary>
	)
}

const mapStateToProps = (state: any) => ({
	loggedIn: state.auth.loggedIn,
	loading: state.auth.loading,
})
export default connect(mapStateToProps)(LoginPage)
