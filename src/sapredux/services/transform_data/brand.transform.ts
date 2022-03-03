export const transformBrands = (data: any) => {
	return {
		id: data.BrandId,
		name: data.BrandName,
		description: data.BrandDesc,
		isMain: data.IsMain,
		guid: data.BrandGuid,
		icon: data.BrandIconFilePath,
		visibleIndex: data.BrandVisibleIndex,
		createdDate: data.CreatedDate,
		modifiedDate: data.ModifiedDate,
        brandLink1: data.BrandLink1,
        brandLink2: data.BrandLink2,
        brandLink3: data.BrandLink3,
        brandLink4: data.BrandLink4,
        brandLink5: data.BrandLink5,
	}
}