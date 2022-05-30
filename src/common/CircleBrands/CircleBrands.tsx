import { Image } from 'common/Image'

interface IPropsBrands {
	icon?: any
	name?: string
	mobile?: boolean
}

const CircleBrands: React.FC<IPropsBrands> = ({ icon, name, mobile }) =>
	mobile ? (
		<div className="grid w-16 m-auto gap-x-4 place-items-center place-content-center shadow-defaultShadow banner-container rounded-2xl bg-fullwhite dark:bg-darkComponentColor">
			<Image
				className="object-contain w-8 h-[3.5rem] border transition_animation dark:brightness-[3]"
				src={icon}
				alt={name}
			/>
		</div>
	) : (
		<div className="flex flex-col items-center m-auto w-[115px] banner-container">
			<Image
				className="object-contain w-16 h-16 border border-solid border-[#e6e6e6] dark:border-darkText rounded-[50%] transition_animation"
				src={icon}
				alt={name}
			/>
			<span className="mt-2 text-sm text-center text-black dark:text-darkTextWhiteColor transition_animation">
				{name}
			</span>
		</div>
	)

export default CircleBrands
