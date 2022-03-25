import { 
	transformRpAcc,
	transformUser,
	transformRpAccType,
	transFormRpAccStatus
} from "sapredux/services/transform_data";

export const transformAuth = (data:any) => {
	return {
		exp: data.exp,
		...transformRpAcc(data.rp_acc),
		rp_acc_status: transFormRpAccStatus(data.rp_acc.Rp_acc_status),
		rp_acc_type: transformRpAccType(data.rp_acc.Rp_acc_type),
		user: transformUser(data.rp_acc.User),
		token: data.token
	}
}