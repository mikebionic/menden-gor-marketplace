export const transformRpAcc = (data:any) => ({
	addInf1: data.AddInf1 ?? null,
	addInf2: data.AddInf2 ?? null,
	addInf3: data.AddInf3 ?? null,
	addInf4: data.AddInf4 ?? null,
	addInf5: data.AddInf5 ?? null,
	addInf6: data.AddInf6 ?? null,
	companyId: data.CId ?? null,
	createdDate: data.CreatedDate ?? null,
	createdUId: data.CreatedUId ?? null,
	dbGuid: data.DbGuid ?? null,
	deviceQty: data.DeviceQty ?? null,
	divId: data.DivId ?? null,
	empId: data.EmpId ?? null,
	filePathM: data.FilePathM ?? null,
	filePathR: data.FilePathR ?? null,
	filePathS: data.FilePathS ?? null,
	image: data.FilePathS ?? null,
	deleted: data.GCRecord ?? null,
	genderId: data.GenderId ?? null,
	isMain: data.IsMain ?? null,
	modifiedDate: data.ModifiedDate ?? null,
	modifiedUId: data.ModifiedUId ?? null,
	natId: data.NatId ?? null,
	reprId: data.ReprId ?? null,
	priceGroupId: data.ResPriceGroupId ?? null,
	address: data.RpAccAddress ?? null,
	birthDate: data.RpAccBirthDate ?? null,
	email: data.RpAccEMail ?? null,
	name: data.RpAccName ?? null,
	firstName: data.RpAccFirstName ?? null,
	lastName: data.RpAccLastName ?? null,
	guid: data.RpAccGuid ?? null,
	homePhoneNumber: data.RpAccHomePhoneNumber ?? null,
	mobilePhoneNumber: data.RpAccMobilePhoneNumber ?? null,
	id: data.RpAccId ?? null,
	langSkills: data.RpAccLangSkills ?? null,
	lastActivityDate: data.RpAccLastActivityDate ?? null,
	lastActivityDevice: data.RpAccLastActivityDevice ?? null,
	latitude: data.RpAccLatitude ?? null,
	longitude: data.RpAccLongitude ?? null,
	passportIssuePlace: data.RpAccPassportIssuePlace ?? null,
	passportNo: data.RpAccPassportNo ?? null,
	patronomic: data.RpAccPatronomic ?? null,
	purchBalanceLimit: data.RpAccPurchBalanceLimit ?? null,
	regNo: data.RpAccRegNo ?? null,
	residency: data.RpAccResidency ?? null,
	saleBalanceLimit: data.RpAccSaleBalanceLimit ?? null,
	statusId: data.RpAccStatusId ?? null,
	typeId: data.RpAccTypeId ?? null,
	username: data.RpAccUName ?? null,
	viewCnt: data.RpAccViewCnt ?? null,
	visibleIndex: data.RpAccVisibleIndex ?? null,
	webAddress: data.RpAccWebAddress ?? null,
	workFaxNumber: data.RpAccWorkFaxNumber ?? null,
	workPhoneNumber: data.RpAccWorkPhoneNumber ?? null,
	zipCode: data.RpAccZipCode ?? null,
	workPeriodId: data.WpId ?? null,
	syncDateTime: data.SyncDateTime ?? null,
	unusedDeviceQty: data.UnusedDeviceQty ?? null,
})

export const toJsonRpAcc = (data: any, allData: boolean = false) => ({
	AddInf1: data.addInf1 ?? null,
	AddInf2: data.addInf2 ?? null,
	AddInf3: data.addInf3 ?? null,
	AddInf4: data.addInf4 ?? null,
	AddInf5: data.addInf5 ?? null,
	AddInf6: data.addInf6 ?? null,
	GenderId: data.genderId ?? null,
	NatId: data.natId ?? null,
	ReprId: data.reprId ?? null,
	RpAccAddress: data.address ?? null,
	RpAccBirthDate: data.birthDate ?? null,
	RpAccEMail: data.email ?? null,
	RpAccName: data.name ?? null,
	RpAccFirstName: data.firstName ?? null,
	RpAccLastName: data.lastName ?? null,
	RpAccHomePhoneNumber: data.homePhoneNumber ?? null,
	RpAccMobilePhoneNumber: data.mobilePhoneNumber ?? null,
	RpAccId: data.id ?? null,
	RpAccPassportNo: data.passportNo ?? null,
	RpAccPatronomic: data.patronomic ?? null,
	RpAccResidency: data.residency ?? null,
	RpAccUName: data.username ?? null,
	RpAccWebAddress: data.webAddress ?? null,
	RpAccWorkFaxNumber: data.workFaxNumber ?? null,
	RpAccWorkPhoneNumber: data.workPhoneNumber ?? null,
	RpAccZipCode: data.zipCode ?? null,
	RpAccTypeId: allData && (data.typeId ?? null),
	RpAccUPass: allData && (data.password ?? null),
})

export const transformUser = (data:any) => ({
	addInf1: data.AddInf1,
	addInf2: data.AddInf2,
	addInf3: data.AddInf3,
	addInf4: data.AddInf4,
	addInf5: data.AddInf5,
	addInf6: data.AddInf6,
	companyId: data.CId,
	createdDate: data.CreatedDate,
	createdUId: data.CreatedUId,
	divId: data.DivId,
	empId: data.EmpId,
	deleted: data.GCRecord,
	modifiedDate: data.ModifiedDate,
	modifiedUId: data.ModifiedUId,
	resPriceGroupId: data.ResPriceGroupId,
	rpAccId: data.RpAccId,
	syncDateTime: data.SyncDateTime,
	email: data.UEmail,
	fullname: data.UFullName,
	guid: data.UGuid,
	id: data.UId,
	lastActivityDate: data.ULastActivityDate,
	lastActivityDevice: data.ULastActivityDevice,
	name: data.UName,
	regNo: data.URegNo,
	shortName: data.UShortName,
	typeId: data.UTypeId,
})

export const transFormRpAccStatus = (data:any) => ({
	createdDate: data.CreatedDate ?? null,
	createdUId: data.CreatedUId ?? null,
	deleted: data.GCRecord ?? null,
	modifiedDate: data.ModifiedDate ?? null,
	modifiedUId: data.ModifiedUId ?? null,
	description: data.RpAccStatusDesc ?? null,
	guid: data.RpAccStatusGuid ?? null,
	id: data.RpAccStatusId ?? null,
	name: data.RpAccStatusName ?? null,
	syncDateTime: data.SyncDateTime ?? null,
})

export const transformRpAccType = (data:any) => ({
	createdDate: data.CreatedDate ?? null,
	createdUId: data.CreatedUId ?? null,
	deleted: data.GCRecord ?? null,
	modifiedDate: data.ModifiedDate ?? null,
	modifiedUId: data.ModifiedUId ?? null,
	description: data.RpAccTypeDesc ?? null,
	guid: data.RpAccTypeGuid ?? null,
	id: data.RpAccTypeId ?? null,
	name: data.RpAccTypeName ?? null,
	syncDateTime: data.SyncDateTime ?? null,
})
