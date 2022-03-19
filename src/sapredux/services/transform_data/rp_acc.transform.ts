export const transformRpAcc = (req:any) => {
	const data = req.rp_acc
	return {
		exp: req.exp,
		addInf1: data.AddInf1,
		addInf2: data.AddInf2,
		addInf3: data.AddInf3,
		addInf4: data.AddInf4,
		addInf5: data.AddInf5,
		addInf6: data.AddInf6,
		companyId: data.CId,
		createdDate: data.CreatedDate,
		createdUId: data.CreatedUId,
		dbGuid: data.DbGuid,
		deviceQty: data.DeviceQty,
		divId: data.DivId,
		empId: data.EmpId,
		filePathM: data.FilePathM,
		filePathR: data.FilePathR,
		filePathS: data.FilePathS,
		image: data.FilePathS,
		deleted: data.GCRecord,
		genderId: data.GenderId,
		isMain: data.IsMain,
		modifiedDate: data.ModifiedDate,
		modifiedUId: data.ModifiedUId,
		natId: data.NatId,
		reprId: data.ReprId,
		priceGroupId: data.ResPriceGroupId,
		address: data.RpAccAddress,
		birthDate: data.RpAccBirthDate,
		email: data.RpAccEMail,
		name: data.RpAccName,
		firstName: data.RpAccFirstName,
		lastName: data.RpAccLastName,
		guid: data.RpAccGuid,
		homePhoneNumber: data.RpAccHomePhoneNumber,
		mobilePhoneNumber: data.RpAccMobilePhoneNumber,
		id: data.RpAccId,
		langSkills: data.RpAccLangSkills,
		lastActivityDate: data.RpAccLastActivityDate,
		lastActivityDevice: data.RpAccLastActivityDevice,
		latitude: data.RpAccLatitude,
		longitude: data.RpAccLongitude,
		passportIssuePlace: data.RpAccPassportIssuePlace,
		passportNo: data.RpAccPassportNo,
		patronomic: data.RpAccPatronomic,
		purchBalanceLimit: data.RpAccPurchBalanceLimit,
		regNo: data.RpAccRegNo,
		residency: data.RpAccResidency,
		saleBalanceLimit: data.RpAccSaleBalanceLimit,
		statusId: data.RpAccStatusId,
		typeId: data.RpAccTypeId,
		username: data.RpAccUName,
		viewCnt: data.RpAccViewCnt,
		visibleIndex: data.RpAccVisibleIndex,
		webAddress: data.RpAccWebAddress,
		workFaxNumber: data.RpAccWorkFaxNumber,
		workPhoneNumber: data.RpAccWorkPhoneNumber,
		zipCode: data.RpAccZipCode,
		rp_acc_status: {
			createdDate: data.Rp_acc_status.CreatedDate,
			createdUId: data.Rp_acc_status.CreatedUId,
			deleted: data.Rp_acc_status.GCRecord,
			modifiedDate: data.Rp_acc_status.ModifiedDate,
			modifiedUId: data.Rp_acc_status.ModifiedUId,
			description: data.Rp_acc_status.RpAccStatusDesc,
			guid: data.Rp_acc_status.RpAccStatusGuid,
			id: data.Rp_acc_status.RpAccStatusId,
			name: data.Rp_acc_status.RpAccStatusName,
			syncDateTime: data.Rp_acc_status.SyncDateTime,
		},
		rp_acc_type: {
			createdDate: data.Rp_acc_type.CreatedDate,
			createdUId: data.Rp_acc_type.CreatedUId,
			deleted: data.Rp_acc_type.GCRecord,
			modifiedDate: data.Rp_acc_type.ModifiedDate,
			modifiedUId: data.Rp_acc_type.ModifiedUId,
			description: data.Rp_acc_type.RpAccTypeDesc,
			guid: data.Rp_acc_type.RpAccTypeGuid,
			id: data.Rp_acc_type.RpAccTypeId,
			name: data.Rp_acc_type.RpAccTypeName,
			syncDateTime: data.Rp_acc_type.SyncDateTime,
		},
		syncDateTime: data.SyncDateTime,
		unusedDeviceQty: data.UnusedDeviceQty,
		user: {
			addInf1: data.User.AddInf1,
			addInf2: data.User.AddInf2,
			addInf3: data.User.AddInf3,
			addInf4: data.User.AddInf4,
			addInf5: data.User.AddInf5,
			addInf6: data.User.AddInf6,
			companyId: data.User.CId,
			createdDate: data.User.CreatedDate,
			createdUId: data.User.CreatedUId,
			divId: data.User.DivId,
			empId: data.User.EmpId,
			deleted: data.User.GCRecord,
			modifiedDate: data.User.ModifiedDate,
			modifiedUId: data.User.ModifiedUId,
			resPriceGroupId: data.User.ResPriceGroupId,
			rpAccId: data.User.RpAccId,
			syncDateTime: data.User.SyncDateTime,
			email: data.User.UEmail,
			fullname: data.User.UFullName,
			guid: data.User.UGuid,
			id: data.User.UId,
			lastActivityDate: data.User.ULastActivityDate,
			lastActivityDevice: data.User.ULastActivityDevice,
			name: data.User.UName,
			regNo: data.User.URegNo,
			shortName: data.User.UShortName,
			typeId: data.User.UTypeId,
		},
		workPeriodId: data.WpId,
		token: req.token
	}
}