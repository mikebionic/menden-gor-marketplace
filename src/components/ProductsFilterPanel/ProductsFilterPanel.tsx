import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { ErrorBoundary } from 'modules/errors'
import { Input, Switch, Form } from 'antd'
import { IconLabelButton } from 'common/IconLabelButton'

import { getCategories, getBrands } from 'sapredux/selectors'
import { applyFilters, clearFilters } from 'sapredux/actions'
import { Dialog, Transition } from '@headlessui/react'
import { routeConstants } from 'navigation'
import { AccordionItem, AccordionWrapper } from 'common/Accordion'
import { BsX } from 'react-icons/bs'

interface IPropsProductFilter {
	props?: any
	mobile?: boolean
}

const ProductsFilterPanel: React.FC<IPropsProductFilter> = (
	props,
	{ mobile },
) => {
	const { t } = useTranslation()
	const {
		categories,
		brands,
		filters,
		onFiltersApply,
		onFiltersClear,
		open,
		setOpen,
	}: any = props

	const navigate = useNavigate()
	const location = useLocation()

	const handlePriceChange = (priceType: string, value: any) => {
		try {
			onFiltersApply({ [priceType]: parseFloat(value) })
		} catch (err) {
			console.log(err)
		}
	}

	const onNavigate = () => {
		let search_querystring = `?`
		Object.keys(filters).map((key) => {
			if (filters[key]) {
				search_querystring += `${key}=${filters[key]}&`
			}
		})
		navigate(`${location.pathname}${search_querystring}`)
	}

	return mobile ? (
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
									<div className="flex flex-col h-full overflow-y-scroll bg-white shadow-xl dark:bg-darkComponentColor">
										<div className="flex-1 py-6 overflow-y-auto sm:px-6">
											<div className="flex items-start justify-between px-4">
												<Dialog.Title className="text-lg font-semibold text-gray-900 dark:text-darkTextWhiteColor font-oxygen">
													Filter
												</Dialog.Title>
												<div className="flex items-center ml-3 h-7">
													<button
														type="button"
														className="p-2 -m-2 text-gray-400 hover:text-gray-500"
														onClick={() => setOpen(false)}
													>
														<span className="sr-only">Close panel</span>
														<BsX className="w-6 h-6" aria-hidden="true" />
													</button>
												</div>
											</div>
											<hr className="mt-2" />

											<div className="mt-2">
												<div className="flow-root">
													<AccordionWrapper className="-my-6 divide-y divide-gray-200">
														<AccordionItem title="Brands">Hello</AccordionItem>
														<AccordionItem title="Price">World</AccordionItem>
														<AccordionItem title="Models">
															Ustunde ishlenilyar
														</AccordionItem>
														<AccordionItem title="Color">
															Ustunde ishlenilyar
														</AccordionItem>
														<AccordionItem title="Category">
															Ustunde ishlenilyar
														</AccordionItem>
													</AccordionWrapper>
												</div>
											</div>
										</div>

										<div className="px-4 py-6 sm:px-6">
											<div className="mt-6">
												<Link
													to={routeConstants.checkout.route} //filter route
													className="flex items-center justify-center px-6 py-3 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-firstColorGradientFromDark hover:bg-textColorOrange dark:bg-darkFirstColor dark:hover:bg-darkFirstColor dark:hover:opacity-80 hover:text-white"
												>
													Search
												</Link>
											</div>
										</div>
									</div>
								</div>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition.Root>
		</ErrorBoundary>
	) : (
		<ErrorBoundary>
			<div>
				<div className="grid w-56 h-40 px-2 py-2 my-4 rounded-lg bg-fullwhite dark:bg-darkComponentColor gap-y-1">
					<b className="relative text-base text-black bottom-1 dark:text-darkTextWhiteColor">
						{t('common.filters')}:
					</b>
					<div>
						<p className="text-black dark:text-darkTextWhiteColor">
							{t('common.price_range')}:{' '}
						</p>
					</div>

					<Form className="grid h-10 grid-flow-col gap-2 auto-cols-max">
						<Form.Item name="phone">
							<Input
								className="rounded-lg min-h-[32px] w-[100px] border-[#E6E6E6] hover:border-textColorOrange dark:bg-darkBgColor dark:border-darkBgColor dark:hover:border-darkFirstColor h-9 dark:text-darkTextWhiteColor"
								type="number"
								name="minimum"
								placeholder="Min"
								value={filters.from_price}
								onChange={(e: any) =>
									handlePriceChange('from_price', e.target.value)
								}
							/>
						</Form.Item>
						<Form.Item name="workPhone">
							<Input
								className="rounded-lg min-h-[32px] w-[100px] border-[#E6E6E6] hover:border-textColorOrange dark:bg-darkBgColor dark:border-darkBgColor dark:hover:border-darkFirstColor h-9 dark:text-darkTextWhiteColor"
								type="number"
								name="maximum"
								placeholder="Max"
								value={filters.to_price}
								onChange={(e: any) =>
									handlePriceChange('to_price', e.target.value)
								}
							/>
						</Form.Item>
					</Form>
					<div className="grid grid-cols-iconReverse">
						<p className="text-black dark:text-darkTextWhiteColor">
							{t('common.discounts')}
						</p>
						<Switch
							checked={parseInt(filters.showDiscounts) === 1 ? true : false}
							onChange={(value: boolean) =>
								value === true
									? onFiltersApply({ showDiscounts: 1 })
									: onFiltersApply({ showDiscounts: 0 })
							}
						/>
					</div>
				</div>

				<div className="grid w-56 px-2 py-2 my-4 rounded-lg h-60 bg-fullwhite dark:bg-darkComponentColor gap-y-1">
					<b className="relative text-base text-black bottom-1 dark:text-darkTextWhiteColor">
						{t('common.sort')}:
					</b>
					<div className="grid grid-cols-iconReverse">
						<p className="text-black dark:text-darkTextWhiteColor">
							{t('common.price_high')}
						</p>
						<Switch
							checked={filters.sort === 'price_high' ? true : false}
							onChange={(value: boolean) =>
								value === true && onFiltersApply({ sort: 'price_high' })
							}
						/>
					</div>
					<div className="grid grid-cols-iconReverse">
						<p className="text-black dark:text-darkTextWhiteColor">
							{t('common.price_low')}
						</p>
						<Switch
							checked={filters.sort === 'price_low' ? true : false}
							onChange={(value: boolean) =>
								value === true && onFiltersApply({ sort: 'price_low' })
							}
						/>
					</div>

					<div className="grid grid-cols-iconReverse ">
						<p className="text-black dark:text-darkTextWhiteColor">
							{t('common.newest')}
						</p>
						<Switch
							checked={filters.sort === 'date_new' ? true : false}
							onChange={(value: boolean) =>
								value === true && onFiltersApply({ sort: 'date_new' })
							}
						/>
					</div>
					<div className="grid grid-cols-iconReverse">
						<p className="text-black dark:text-darkTextWhiteColor">
							{t('common.oldest')}
						</p>
						<Switch
							checked={filters.sort === 'date_old' ? true : false}
							onChange={(value: boolean) =>
								value === true && onFiltersApply({ sort: 'date_old' })
							}
						/>
					</div>
					<div className="grid grid-cols-iconReverse">
						<p className="text-black dark:text-darkTextWhiteColor">
							{t('common.top_sale')}
						</p>
						<Switch
							checked={filters.sort === 'rated' ? true : false}
							onChange={(value: boolean) =>
								value === true && onFiltersApply({ sort: 'rated' })
							}
						/>
					</div>
				</div>

				<div className="w-56 px-2 py-2 my-4 rounded-lg bg-fullwhite dark:bg-darkComponentColor h-80">
					<b className="relative text-base text-black bottom-1 dark:text-darkTextWhiteColor">
						{t('common.categories')}:
					</b>
					<br />
					<ul className="inline-block w-full h-full pl-0 overflow-y-scroll list-none max-h-60">
						<li className="h-full pl-2">
							<label className="flex my-1 cursor-pointer">
								<input
									className="w-3 h-3 my-auto transform scale-125 text-firstColorGradientFromDark dark:text-darkFirstColor active:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-transparent"
									type="radio"
									name="radio-category-null"
									onChange={() => onFiltersApply({ category: null })}
									checked={filters.category === null ? true : false}
								/>
								<p className="px-2 text-sm text-black dark:text-darkTextWhiteColor">
									{t('common.all')}
								</p>
							</label>
							{categories.map((data: any, idx: number) => (
								<>
									<label className="flex my-1 cursor-pointer" key={idx}>
										<input
											className="w-3 h-3 my-auto transform scale-125 outline-none text-firstColorGradientFromDark dark:text-darkFirstColor form-radio active:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-transparent"
											type="radio"
											name={`radio-category-${data.name}-${data.id}`}
											value={data.id}
											onChange={() => onFiltersApply({ category: data.id })}
											checked={
												parseInt(filters.category) === parseInt(data.id)
													? true
													: false
											}
										/>
										<p className="px-2 text-sm text-black dark:text-darkTextWhiteColor">
											{data.name}
										</p>
									</label>

									{data.categories.map((data: any, idx: number) => (
										<label className="flex my-1 ml-3 cursor-pointer" key={idx}>
											<input
												className="w-3 h-3 my-auto transform scale-125 outline-none text-firstColorGradientFromDark dark:text-darkFirstColor form-radio active:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-transparent"
												type="radio"
												name={`radio-category-${data.name}-${data.id}`}
												value={data.id}
												onChange={() => onFiltersApply({ category: data.id })}
												checked={
													parseInt(filters.category) === parseInt(data.id)
														? true
														: false
												}
											/>
											<p className="px-2 text-sm text-black dark:text-darkTextWhiteColor">
												{data.name}
											</p>
										</label>
									))}
								</>
							))}
						</li>
					</ul>
				</div>

				<div className="w-56 px-2 py-2 my-4 rounded-lg bg-fullwhite dark:bg-darkComponentColor h-80">
					<b className="relative text-base text-black bottom-1 dark:text-darkTextWhiteColor">
						{t('common.brands')}:
					</b>
					<br />
					<ul className="inline-block w-full h-full pl-0 overflow-y-scroll list-none max-h-60">
						<li className="h-full pl-2">
							<label className="flex my-1 cursor-pointer">
								<input
									className="w-3 h-3 my-auto transform scale-125 text-firstColorGradientFromDark dark:text-darkFirstColor active:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-transparent"
									type="radio"
									name="radio-brand-null"
									onChange={() => onFiltersApply({ brand: null })}
									checked={filters.brand === null ? true : false}
								/>
								<p className="px-2 text-sm text-black dark:text-darkTextWhiteColor">
									{t('common.all')}
								</p>
							</label>
							{brands.map((data: any, idx: number) => (
								<label className="flex my-1 cursor-pointer" key={idx}>
									<input
										className="w-3 h-3 my-auto transform scale-125 outline-none text-firstColorGradientFromDark dark:text-darkFirstColor form-radio active:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-transparent"
										type="radio"
										name={`radio-brand-${data.name}-${data.id}`}
										value={data.id}
										key={idx}
										onChange={() => onFiltersApply({ brand: data.id })}
										checked={
											parseInt(filters.brand) === parseInt(data.id)
												? true
												: false
										}
									/>
									<p className="px-2 text-sm text-black dark:text-darkTextWhiteColor">
										{data.name}
									</p>
								</label>
							))}
						</li>
					</ul>
				</div>

				<div className="inline-grid w-56 grid-cols-2 rounded-lg h-9">
					<IconLabelButton
						className="w-full mx-auto my-0 rounded-full bg-secondColorGradientToLight dark:bg-darkFirstColor hover:opacity-80"
						label={t('common.search')}
						onClick={() => onNavigate()}
					/>
					<IconLabelButton
						className="w-full mx-auto my-0 rounded-full bg-thirdColor dark:bg-darkButtonColor hover:opacity-80"
						label={t('common.clear')}
						onClick={() => onFiltersClear()}
					/>
				</div>
			</div>
		</ErrorBoundary>
	)
}

const mapStateToProps = (state: any) => ({
	brands: getBrands(state),
	categories: getCategories(state),
	filters: state.productFilter,
})

const mapDispatchToProps = {
	onFiltersApply: applyFilters,
	onFiltersClear: clearFilters,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsFilterPanel)
