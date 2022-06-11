import { useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import { Form, Input } from 'antd'
import { resetPassword } from 'sapredux/actions'
import { useTranslation } from 'react-i18next'
import { IconLabelButton } from 'common/IconLabelButton'
import { MdClose } from 'react-icons/md'
import { sapswal } from 'sapredux/helpers'

const ResetPassword = ({ reset_pass_modal = false, resetPassword }: any) => {
	const [openModal, setOpenModal] = useState(reset_pass_modal)
	const [inputs, setInputs] = useState({
		password: '',
		confirm_password: '',
	})
	const { t } = useTranslation()
	const { password, confirm_password } = inputs

	const handleKeyValueChange = (name: string = '', value: any = '') => {
		setInputs((inputs) => ({ ...inputs, [name]: value }))
	}
	const errorSwal = (text?: string) =>
		sapswal.fire({
			icon: 'error',
			title: 'Error',
			text: text || t('common.passwords_dont_match'),
		})
	const handleSubmit = async () => {
		if (password !== confirm_password) {
			return errorSwal()
		} else {
			await resetPassword({
				password: password,
				confirm_password: confirm_password,
			})
			setOpenModal(false)
		}
	}

	return (
		<>
			<Button
				type="ghost"
				shape="round"
				onClick={() => setOpenModal(!openModal)}
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
													onFinish={handleSubmit}
												>
													<Form.Item
														name="password"
														className="grid grid-flow-col auto-cols-max place-content-end"
														label={t('auth.password')}
														onChange={(e: any) =>
															handleKeyValueChange('password', e.target.value)
														}
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
														name="confirm_password"
														className="grid grid-flow-col auto-cols-max place-content-end"
														label={t('auth.confirm_password')}
														dependencies={['password']}
														hasFeedback
														onChange={(e: any) =>
															handleKeyValueChange(
																'confirm_password',
																e.target.value,
															)
														}
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
														label="Save"
														className="grid w-24 m-auto rounded-lg place-content-center h-11 bg-gradient-to-r from-firstColorGradientFromDark to-secondColorGradientToLight dark:bg-gradient-to-r dark:from-darkFirstColor dark:to-darkFirstColor hover:opacity-90"
														labelClassName="m-auto text-white"
														type="submit"
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

const mapDispatchToProps = {
	resetPassword,
}

export default connect(null, mapDispatchToProps)(ResetPassword)
