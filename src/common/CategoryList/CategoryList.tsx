
export const CategoryList = (props:any) => {
	
	return (
		<div>
			<div className="pl-3">
				<h1 className="py-2 mb-2 text-base font-semibold border-b border-gray-200">
					Categories
				</h1>
			</div>
			<div className="pl-1 overflow-auto h-BannerCategory max-h-BannerCategory">
				{props.children}
			</div>
		</div>
	)
}