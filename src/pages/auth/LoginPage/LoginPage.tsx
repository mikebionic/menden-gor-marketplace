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

const LoginPage: React.FC = (props: any) => {
	const { loggedIn, loading } = props
	const { t } = useTranslation()
	const navigate = useNavigate()

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

	const handleSubmit = (e: any) => {
		if (username && password) {
			dispatch(authActions.login(username, password))
		}
	}

	return (
		<ErrorBoundary>
			<div className="font-sans text-gray-700">
				<div className="text-center cursor-default">
					<h2 className="text-3xl font-semibold text-textColorOrange dark:text-darkFirstColor">
						{t('common.welcome')}!
					</h2>
				</div>
				<div className="container flex min-phone:pt-8 md:p-12 mx-auto 2xl:h-[50rem]">
					<div className="w-full max-w-md m-auto">
						<div className="overflow-hidden md:shadow-defaultShadow md:bg-glass rounded-2xl md:backdrop-filter md:backdrop-blur-glass">
							{loading && <Spinner />}
							<Form
								name="normal_login"
								className="max-w-full min-phone:p-4 md:p-8 dark:bg-darkComponentColor"
								initialValues={{ remember: true }}
								onFinish={handleSubmit}
								method="GET"
							>
								<Form.Item
									name="username"
									rules={[
										{ required: true, message: t('common.input_username') },
									]}
								>
									<Input
										prefix={
											<UserOutlined className="pr-2 site-form-item-icon" />
										}
										placeholder={t('auth.username')}
										autoFocus
										type="text"
										name="username"
										value={username}
										onChange={handleChange}
										inputMode="text"
										className="rounded-lg min-h-[32px] border-[#E6E6E6] dark:border-darkBgColor dark:bg-darkBgColor dark:text-darkTextWhiteColor hover:border-textColorOrange dark:hover:border-darkFirstColor"
									/>
								</Form.Item>
								<Form.Item
									name="password"
									rules={[
										{ required: true, message: t('common.input_username') },
									]}
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
										className="rounded-lg min-h-[32px] border-[#E6E6E6] dark:border-darkBgColor dark:bg-darkBgColor dark:text-darkTextWhiteColor hover:border-textColorOrange dark:hover:border-darkFirstColor"
									/>
								</Form.Item>
								<GoogleAuth />
								<Form.Item>
									<a
										href="/"
										className="float-right hover:text-textColorOrange dark:hover:text-darkFirstColor dark:text-darkTextWhiteColor"
									>
										{t('auth.forgot_password')}
									</a>
								</Form.Item>

								<Form.Item className="h-auto">
									<IconLabelButton
										label={t('common.login')}
										className="h-11 rounded-lg w-full bg-[linear-gradient(266.08deg,#FF8D73_1%,#FEB37A_100%)] dark:bg-[linear-gradient(266.08deg,#6366f1_1%,#6366f1_100%)] hover:opacity-90 m-auto"
										labelClassName="m-auto text-white"
										type="primary"
										htmlType="submit"
									/>
									<div className="mt-2 dark:text-darkTextWhiteColor">
										{t('common.or')}{' '}
										<a
											href="/"
											className="hover:text-textColorOrange dark:hover:text-darkFirstColor"
										>
											{t('auth.register_now')}
										</a>
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
