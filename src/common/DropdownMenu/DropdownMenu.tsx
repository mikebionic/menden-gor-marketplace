import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

interface IDropdownProps {
	items: any
	menuButtonLabel?: string
	menuButtonIcon?: JSX.Element
	activeClassName?: string
	className?: string
	menuButton?: any
	onItemClick?: any
}

export const DropdownMenu: React.FC<IDropdownProps> = ({
	items,
	menuButtonLabel,
	menuButtonIcon,
	menuButton,
	activeClassName = 'bg-violet-500 text-white',
	className = 'w-44',
	onItemClick,
}) => {
	return (
		<div className="w-auto">
			<Menu as="div" className="relative inline-block text-left">
				<div>
					<Menu.Button>
						{menuButton ?? (
							<div
								className={`inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
							>
								{menuButtonLabel}
								<i className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100">
									{menuButtonIcon}
								</i>
							</div>
						)}
					</Menu.Button>
				</div>
				<Transition
					as={Fragment}
					enter="transition ease-out duration-100"
					enterFrom="transform opacity-0 scale-95"
					enterTo="transform opacity-100 scale-100"
					leave="transition ease-in duration-75"
					leaveFrom="transform opacity-100 scale-100"
					leaveTo="transform opacity-0 scale-95"
				>
					<Menu.Items
						className={`absolute right-0 ${className} mt-2 origin-top-right bg-white dark:bg-darkComponentColor divide-y divide-gray-100 dark:divide-darkText rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
					>
						<div className="px-1 py-1">
							{items.map((item: any, idx: number) => (
								// onClick={() => onItemClick(item)}
								<Menu.Item key={idx}>
									{({ active }) => (
										<button
											className={`${
												active ? activeClassName : 'text-gray-900'
											} group flex rounded-md items-center w-full px-2 py-2 text-sm p-2 hover:text-textColorOrange text-black dark:text-darkTextWhiteColor dark:hover:text-darkFirstColor place-content-center dark:hover:bg-darkComponentColor`}
										>
											{item.icon && (
												<i className="w-5 h-5 mr-2" aria-hidden="true">
													{item.icon}
												</i>
											)}
											{item.name}
										</button>
									)}
								</Menu.Item>
							))}
						</div>
					</Menu.Items>
				</Transition>
			</Menu>
		</div>
	)
}
