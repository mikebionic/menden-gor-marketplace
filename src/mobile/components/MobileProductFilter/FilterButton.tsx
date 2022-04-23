import { ErrorBoundary } from 'modules/errors'
import { MdSort } from 'react-icons/md'

const FilterButton = (props: any) => {
	const { cartOpen, setCartOpen } = props
	return (
		<ErrorBoundary>
			<>
				<a
					onClick={() => setCartOpen(!cartOpen)}
					className="font-semibold group grid gap-2 grid-cols-[1fr_auto] text-black cursor-pointer hover:text-firstColorGradientFromDark dark:hover:text-darkFirstColor dark:text-darkTextWhiteColor"
				>
					<p className="text-center font-oxygen">Filter</p>
					<MdSort className="text-xl text-black group-hover:text-firstColorGradientFromDark dark:hover:text-darkFirstColor dark:text-darkTextWhiteColor" />
				</a>
			</>
		</ErrorBoundary>
	)
}

export default FilterButton
