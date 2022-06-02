import React, { useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { connect, useDispatch } from 'react-redux'
import { Button } from 'antd'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import { Form, Input } from 'antd'
import { LockOutlined } from '@ant-design/icons'
import { authActions } from 'sapredux/actions'
import { useTranslation } from 'react-i18next'
import { IconLabelButton } from 'common/IconLabelButton'
import { MdClose } from 'react-icons/md'

const ResetPassword = () => {
	const [openModal, setOpenModal] = useState(false)
	const [inputs, setInputs] = useState({
		password: '',
		confirm_password: '',
	})
	const { t } = useTranslation()
	const { confirm_password, password } = inputs

	const dispatch = useDispatch()

	const handleKeyValueChange = (name: string = '', value: any = '') => {
		setInputs((inputs) => ({ ...inputs, [name]: value }))
	}

	// const handleSubmit = (e: any) => {
	// 	if (password && confirm_password) {
	// 		dispatch(authActions.login(password, confirm_password))
	// 	}
	// }

	return (
		<>
			<Button
				type="ghost"
				shape="round"
				onClick={() => setOpenModal((openModal) => !openModal)}
				className="dark:text-darkTextWhiteColor dark:hover:text-darkFirstColor dark:hover:border-darkFirstColor"
			>
				Reset Password
			</Button>
			<Transition
				show={openModal}
				enter="transition ease-out duration-300"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-300"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				{openModal ? (
					<Transition appear show={openModal}>
						<Dialog
							as="div"
							className="relative z-10"
							onClose={() => setOpenModal(false)}
						>
							<Transition.Child
								enter="ease-out duration-300"
								enterFrom="opacity-0"
								enterTo="opacity-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100"
								leaveTo="opacity-0"
							>
								<div className="fixed inset-0 bg-black bg-opacity-25" />
							</Transition.Child>

							<div className="fixed inset-0 overflow-y-auto">
								<div className="flex items-center justify-center min-h-full p-4 text-center">
									<Transition.Child
										enter="ease-out duration-300"
										enterFrom="opacity-0 scale-95"
										enterTo="opacity-100 scale-100"
										leave="ease-in duration-200"
										leaveFrom="opacity-100 scale-100"
										leaveTo="opacity-0 scale-95"
									>
										<ClickAwayListener
											onClickAway={() => {
												if (openModal === true) {
													setOpenModal(false)
													console.log('MODALLLLLLL', openModal, setOpenModal)
												}
											}}
										>
											<div className="w-full p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
												<MdClose
													className="absolute text-lg text-gray-400 cursor-pointer top-4 right-4"
													onClick={() => {
														if (openModal === true) {
															setOpenModal(false)
														}
													}}
												/>
												<Form
													name="normal_login"
													className="max-w-full min-phone:p-4 md:p-8 dark:bg-darkComponentColor"
													initialValues={{ remember: true }}
													// onFinish={handleSubmit}
												>
													<Form.Item
														name="password"
														className="grid grid-flow-col auto-cols-max place-content-end"
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
														className="grid grid-flow-col auto-cols-max place-content-end"
														label={t('auth.confirm_password')}
														dependencies={['password']}
														hasFeedback
														rules={[
															{
																required: true,
																message: t('common.passwords_dont_match'),
															},
															({ getFieldValue }: any) => ({
																validator(_: any, value: any) {
																	if (
																		!value ||
																		getFieldValue('password') === value
																	) {
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

													<IconLabelButton
														label="OK"
														className="grid w-24 m-auto rounded-lg place-content-center h-11 bg-gradient-to-r from-firstColorGradientFromDark to-secondColorGradientToLight dark:bg-gradient-to-r dark:from-darkFirstColor dark:to-darkFirstColor hover:opacity-90"
														labelClassName="m-auto text-white"
														type="primary"
														htmlType="submit"
													/>
												</Form>
											</div>
										</ClickAwayListener>
									</Transition.Child>
								</div>
							</div>
						</Dialog>
					</Transition>
				) : null}
			</Transition>
		</>
	)
}

const mapStateToProps = (state: any) => ({
	// current_user: getCurrentUserInfo(state.auth),
})
// const mapDispatchToProps = { profileUpdate }

export default connect(mapStateToProps)(ResetPassword)
