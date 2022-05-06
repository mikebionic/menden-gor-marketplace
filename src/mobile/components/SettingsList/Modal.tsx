import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export const Modal = ({ openModal, setOpenModal, data }: any) => {
	// const [openModal, setOpenModal] = useState(false)
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
								<div className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
									{/* <Dialog.Title
										as="h3"
										className="text-lg font-medium leading-6 text-gray-900"
									>
										Payment successful
									</Dialog.Title>
									<div className="mt-2">
										<p className="text-sm text-gray-500">
											Your payment has been successfully submitted. We’ve sent
											you an email with all of the details of your order.
										</p>
									</div> */}
									{data.map((item: any, idx: number) => (
										<div onClick={() => item.onClick()}>
											<p>
												{item.label} {item.active}
											</p>
										</div>
									))}

									{/* <div className="mt-4">
										<button
											type="button"
											className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
											onClick={() => setOpenModal(false)}
										>
											Got it, thanks!
										</button>
									</div> */}
								</div>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	)
}
