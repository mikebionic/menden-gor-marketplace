import { transformResources } from 'sapredux/services/transform_data'

export const transformResourceCollections = (data: any) => ({
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
	deleted: data.GCRecord,
	modifiedDate: data.ModifiedDate,
	modifiedUId: data.ModifiedUId,
	description: data.ResCollectionDesc,
	guid: data.ResCollectionGuid,
	id: data.ResCollectionId,
	name: data.ResCollectionName,
	priceValue: data.ResCollectionPrice,
	syncDateTime: data.SyncDateTime,
	resources: data.Resources
		? data.Resources.map((subitem: any) => transformResources(subitem))
		: [],
})
