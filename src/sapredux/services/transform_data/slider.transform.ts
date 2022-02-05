export const transformSliders = (data: any) => {
	return {
		id: data.SlId,
		name: data.SlName,
		description: data.SlDesc,
		isMain: data.IsMain,
		guid: data.ResCatGuid,
		iconData: data.ResCatIconData,
		image: data.ResCatIconFilePath,
		iconName: data.ResCatIconName,
		visibleIndex: data.ResCatVisibleIndex,
		ownerCatId: data.ResOwnerCatId,
		createdDate: data.CreatedDate,
		modifiedDate: data.ModifiedDate,
		images: data.Sl_images.map((image:any) => ({
			imgId: image.SlImgId,
			title: image.SlImgTitle,
			description: image.SlImgDesc,
			startDate: image.SlImgStartDate,
			endDate: image.SlImgEndDate,
			fileName: image.SlImgMainImgFileName,
			filePathM: image.SlImgMainImgFilePathM,
			filePathR: image.SlImgMainImgFilePathR,
			filePathS: image.SlImgMainImgFilePathS,
			createdDate: data.CreatedDate,
			modifiedDate: data.ModifiedDate,
		}))
	}
}