export const transformResources = (data: any) => {
	return {
		id: data.ResId,
		name: data.ResName,
		description: data.ResDesc,
		fullDescription: data.ResFullDesc,
		guid: data.ResGuid,
		regNo: data.ResRegNo,
		image: data.FilePathS,
		filePathM: data.FilePathM,
		filePathR: data.FilePathR,
		filePathS: data.FilePathS,
		barcodeValue: data.BarcodeVal,
		brandId: data.BrandId,
		categoryIconUrl: data.CategoryIcon,
		currencyCode: data.CurrencyCode,
		isMain: data.IsMain,
		isNew: data.New,
		categoryId: data.ResCatId,
		categoryName: data.ResCatName,
		createdDate: data.CreatedDate,
		modifiedDate: data.ModifiedDate,
		lastVendorId: data.ResLastVendorId,
		mainImgId: data.ResMainImgId,
		makerId: data.ResMakerId,
		maxSaleAmount: data.ResMaxSaleAmount,
		maxSalePrice: data.ResMaxSalePrice,
		minSaleAmount: data.ResMinSaleAmount,
		minSalePrice: data.ResMinSalePrice,
		pendingTotalAmount: data.ResPendingTotalAmount,
		priceValue: data.ResPriceValue,
		onSale: data.ResProductionOnSale,
		totBalance: data.ResTotBalance,
		typeId: data.ResTypeId,
		viewCnt: data.ResViewCnt,		
		visibleIndex: data.ResVisibleIndex,
		height: data.ResHeight,
		length: data.ResLength,
		weight: data.ResWeight,
		width: data.ResWidth,
		ratingValue: data.RtRatingValue,
		unitId: data.UnitId,
		unitName: data.UnitName,
		usageStatusId: data.UsageStatusId,
		usageStatusName: data.UsageStatusName,
		wishlist: data.Wishlist,
		realPrice: data.RealPrice ?? null,
		discountValue: data.DiscValue ?? null,
		discountType: data.DiscType ?? null,
		discount: data.DiscValue && `${data.DiscValue}${data.DiscType}`,
		related_resources: data.Related_resources ?
		data.Related_resources.map((resource:any) => ({
			id: resource.ResId,
			name: resource.ResName,
			description: resource.ResDesc,
			fullDescription: resource.ResFullDesc,
			guid: resource.ResGuid,
			regNo: resource.ResRegNo,
			image: resource.FilePathS,
			filePathM: resource.FilePathM,
			filePathR: resource.FilePathR,
			filePathS: resource.FilePathS,
			barcodeValue: resource.BarcodeVal,
			brandId: resource.BrandId,
			categoryIconUrl: resource.CategoryIcon,
			currencyCode: resource.CurrencyCode,
			isMain: resource.IsMain,
			isNew: resource.New,
			categoryId: resource.ResCatId,
			categoryName: resource.ResCatName,
			createdDate: resource.CreatedDate,
			modifiedDate: resource.ModifiedDate,
			lastVendorId: resource.ResLastVendorId,
			mainImgId: resource.ResMainImgId,
			makerId: resource.ResMakerId,
			maxSaleAmount: resource.ResMaxSaleAmount,
			maxSalePrice: resource.ResMaxSalePrice,
			minSaleAmount: resource.ResMinSaleAmount,
			minSalePrice: resource.ResMinSalePrice,
			pendingTotalAmount: resource.ResPendingTotalAmount,
			priceValue: resource.ResPriceValue,
			onSale: resource.ResProductionOnSale,
			totBalance: resource.ResTotBalance,
			typeId: resource.ResTypeId,
			viewCnt: resource.ResViewCnt,		
			visibleIndex: resource.ResVisibleIndex,
			height: resource.ResHeight,
			length: resource.ResLength,
			weight: resource.ResWeight,
			width: resource.ResWidth,
			ratingValue: resource.RtRatingValue,
			unitId: resource.UnitId,
			unitName: resource.UnitName,
			usageStatusId: resource.UsageStatusId,
			usageStatusName: resource.UsageStatusName,
			wishlist: resource.Wishlist,
			realPrice: resource.RealPrice,
			discountValue: resource.DiscValue,
			discountType: resource.DiscType,
			discount: resource.DiscValue && `${resource.DiscValue}${resource.DiscType}`,
		})) : []
	}
}