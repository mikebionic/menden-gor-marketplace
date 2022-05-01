export const transformCategories = (data: any) => {
	return {
		...transformCategory(data),
		categories: data.Categories
			? data.Categories.map((category: any) => transformCategory(category))
			: [],
	}
}

export const transformCategory = (data: any) => {
	return {
		id: data.ResCatId,
		name: data.ResCatName,
		description: data.ResCatDesc,
		isMain: data.IsMain,
		guid: data.ResCatGuid,
		iconData: data.ResCatIconData,
		icon: data.ResCatIconFilePath,
		iconName: data.ResCatIconName,
		visibleIndex: data.ResCatVisibleIndex,
		ownerCatId: data.ResOwnerCatId,
		createdDate: data.CreatedDate,
		modifiedDate: data.ModifiedDate,
	}
}
