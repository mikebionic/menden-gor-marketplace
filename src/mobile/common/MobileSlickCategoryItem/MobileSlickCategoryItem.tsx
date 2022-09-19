import { Image } from 'common/Image'

const SlickCategoryItem = ({ icon, name }: any) => (
	<div className="grid w-16 m-auto gap-x-4 place-items-center place-content-center shadow-defaultShadow banner-container rounded-2xl bg-fullwhite dark:bg-darkComponentColor">
		<Image
			className="object-contain w-8 h-[3.5rem] border transition_animation dark:brightness-[3] p-[5px]"
			src={icon}
			alt={name}
		/>
	</div>
)

export default SlickCategoryItem
