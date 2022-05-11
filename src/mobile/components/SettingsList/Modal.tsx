import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

export const Modal = ({ openModal, setOpenModal, data }: any) => {
	return (
		<>
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
									<div className="w-[11rem] p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
										{data.map((item: any, idx: number) => (
											<div
												onClick={() => item.onClick()}
												key={idx}
												className={`grid grid-flow-col ${
													item.icon ? 'gap-3' : 'gap-0'
												} mb-2 auto-cols-max place-items-center`}
											>
												<div
													className={`w-full h-full ${
														item.active ? 'text-textColorOrange' : 'text-black'
													}`}
												>
													{item.icon}
												</div>
												<p
													className={`text-base ${
														item.active ? 'text-textColorOrange' : 'text-black'
													}`}
												>
													{item.label}
												</p>
											</div>
										))}
									</div>
								</ClickAwayListener>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	)
}
