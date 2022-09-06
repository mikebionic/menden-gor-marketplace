import { Fragment, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Dialog, Transition } from '@headlessui/react'
import { ProductsFilterPanel } from 'components/ProductsFilterPanel'
import { ErrorBoundary } from 'modules/errors'

const MobileProductFilter = ({ open, setOpen }: any) => {
	const location = useLocation()
	useEffect(() => {
		setOpen(false)
	}, [location.pathname])

	return (
		<ErrorBoundary>
			<Transition.Root show={open} as={Fragment}>
				<Dialog
					as="div"
					className="fixed inset-0 overflow-hidden z-[99999]"
					onClose={setOpen}
				>
					<div className="absolute inset-0 overflow-hidden">
						<Transition.Child
							as={Fragment}
							enter="ease-in-out duration-500"
							enterFrom="opacity-0"
							leave="ease-in-out duration-500"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Dialog.Overlay className="absolute inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
						</Transition.Child>

						<div className="fixed inset-y-0 right-0 flex max-w-full pl-10 md:w-[400px] 2xl:w-[550px]">
							<Transition.Child
								as={Fragment}
								enter="transform transition ease-in-out duration-500 sm:duration-700"
								enterFrom="translate-x-full"
								enterTo="translate-x-0"
								leave="transform transition ease-in-out duration-500 sm:duration-700"
								leaveFrom="translate-x-0"
								leaveTo="translate-x-full"
							>
								<div className="w-screen max-w-xs">
									<ProductsFilterPanel mobile={true} setOpen={setOpen} />
								</div>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition.Root>
		</ErrorBoundary>
	)
}
export default MobileProductFilter

//const MobileProductFilter: React.FC<IProductFilterProps> = ({
//	open,
//	setOpen,
//	items,
//	totalCount,
//	totalPrice,
//	onIncrease,
//	onDecrease,
//	onDelete,
//}) => {
//	const location = useLocation()
//	useEffect(() => {
//		setOpen(false)
//	}, [location.pathname])

//	return (

//	)
//}

//const mapStateToProps = (state: any) => {
//	const totalData = getTotalCount(state)
//	return {
//		items: getCartItems(state),
//		totalCount: totalData.totalCount,
//		totalPrice: totalData.totalPrice,
//	}
//}

//const mapDispatchToProps = {
//	onIncrease: resourceAddedToCart,
//	onDecrease: resourceRemovedFromCart,
//	onDelete: resourceAllRemovedFromCart,
//}

//export default connect(mapStateToProps, mapDispatchToProps)(MobileProductFilter)
