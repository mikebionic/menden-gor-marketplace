import { transformResources, transformRpAcc } from "sapredux/services/transform_data";

import { BiLoader } from 'react-icons/bi'
import { BsCurrencyDollar } from 'react-icons/bs'
import { HiOutlineThumbUp } from 'react-icons/hi'
import { CgCheckO } from 'react-icons/cg'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { FiPackage } from 'react-icons/fi'
import { FiTruck } from 'react-icons/fi'
import { GoGift } from 'react-icons/go'
import { FiCornerLeftUp } from 'react-icons/fi'
import { FiAlertCircle } from 'react-icons/fi'
import { BiEditAlt } from 'react-icons/bi'
import { FaAward } from 'react-icons/fa'

const invStatSelector:any = {
	//# Waiting
	1:{
		class: "warning",
		color_hash: "amber-500",
		percentage: 10,
		icon: BiLoader,
	},
	//# Received (not order maybe, discuss with dovlet)
	2:{
		class: "success",
		color_hash: "emerald-500", 
		percentage: 30,
		icon: BsCurrencyDollar,
	},
	//# Talked with a client
	3:{
		class: "success",
		color_hash: "emerald-500", 
		percentage: 30,
		icon: HiOutlineThumbUp,
	},
	//# Approved
	4:{
		class: "success",
		color_hash: "emerald-500", 
		percentage: 30,
		icon: CgCheckO,
	},
	//# Not approved
	5:{
		class: "danger",
		color_hash: "red-400", 
		percentage: 30,
		icon: AiOutlineCloseCircle,
	},
	//# Collecting goods
	6:{
		class: "success",
		color_hash: "emerald-500", 
		percentage: 40,
		icon: FiPackage,
	},
	//# Order sent
	7:{
		class: "info",
		color_hash: "cyan-300", 
		percentage: 65,
		icon: FiTruck,
	},
	//# Transfered to customer
	8:{
		class: "info",
		color_hash: "cyan-300", 
		percentage: 88,
		icon: GoGift,
	},
	//# Returned
	9:{
		class: "danger",
		color_hash: "red-400", 
		percentage: 60,
		icon: FiCornerLeftUp,
	},
	//# Note
	10:{
		class: "warning",
		color_hash: "amber-500", 
		percentage: 50,
		icon: FiAlertCircle,
	},
	//# Modified
	11:{
		class: "warning",
		color_hash: "amber-500", 
		percentage: 60,
		icon: BiEditAlt,
	},
	//# Complete
	12:{
		class: "primary",
		color_hash: "blue-700", 
		percentage: 100,
		icon: FaAward,
	},
	13:{
		class: "warning",
		color_hash: "amber-500", 
		percentage: 20,
		icon: BsCurrencyDollar,
	},
	14:{
		class: "danger",
		color_hash: "red-400", 
		percentage: 40,
		icon: BsCurrencyDollar,
	},
}

export const transformOrderInv = (data: any) => ({
	addInf1: data.AddInf1,
	addInf2: data.AddInf2,
	addInf3: data.AddInf3,
	addInf4: data.AddInf4,
	addInf5: data.AddInf5,
	addInf6: data.AddInf6,
	companyGuid: data.CGuid,
	companyId: data.CId,
	createdDate: data.CreatedDate,
	createdUId: data.CreatedUId,
	currencyCode: data.CurrencyCode,
	currencyId: data.CurrencyId,
	currencySymbol: data.CurrencySymbol,
	divGuid: data.DivGuid,
	divId: data.DivId,
	empId: data.EmpId,
	deleted: data.GCRecord,
	statusId: data.InvStatId,
	statusName: data.InvStatName,
	modifiedDate: data.ModifiedDate,
	modifiedUId: data.ModifiedUId,
	orderCreditDays: data.OInvCreditDays,
	orderCreditDesc: data.OInvCreditDesc,
	orderDate: data.OInvDate,
	orderDesc: data.OInvDesc,
	orderDiscountAmount: data.OInvDiscountAmount,
	orderExpenseAmount: data.OInvExpenseAmount,
	orderFTotal: data.OInvFTotal,
	orderFTotalInWrite: data.OInvFTotalInWrite,
	orderGuid: data.OInvGuid,
	orderId: data.OInvId,
	orderLatitude: data.OInvLatitude,
	orderLongitude: data.OInvLongitude,
	orderModifyCount: data.OInvModifyCount,
	orderPaymAmount: data.OInvPaymAmount,
	orderPrintCount: data.OInvPrintCount,
	regNo: data.OInvRegNo,
	orderTaxAmount: data.OInvTaxAmount,
	orderTotal: data.OInvTotal,
	orderTypeId: data.OInvTypeId,
	paymentCode: data.PaymCode,
	paymentDesc: data.PaymDesc,
	paymentStatusId: data.PaymStatusId,
	paymentMethodId: data.PmId,
	paymentTypeId: data.PtId,
	rpAccGuid: data.RpAccGuid,
	rpAccId: data.RpAccId,
	rpAccRegNo: data.RpAccRegNo,
	syncDateTime: data.SyncDateTime,
	userGuid: data.UGuid,
	userId: data.UId,
	warehouseGuid: data.WhGuid,
	warehouseId: data.WhId,
	workPeriodId: data.WpId,
	rp_acc: data.Rp_acc && transformRpAcc(data.Rp_acc),
	order_inv_lines: data.Order_inv_lines && data.Order_inv_lines.map(transformOrderInvLine),
	status_ui: invStatSelector[parseInt(data.InvStatId)],
})



export const transformStatusUI = (data:any) => ({
	class: data.class,
	color_hash: data.color_hash,
	icon: data.icon,
	percentage: data.percentage,
})

export const transformOrderInvLine = (data:any) => ({
	addInf1: data.AddInf1,
	addInf2: data.AddInf2,
	addInf3: data.AddInf3,
	addInf4: data.AddInf4,
	addInf5: data.AddInf5,
	addInf6: data.AddInf6,
	createdDate: data.CreatedDate,
	createdUId: data.CreatedUId,
	currencyCode: data.CurrencyCode,
	currencyId: data.CurrencyId,
	currencySymbol: data.CurrencySymbol,
	excRateValue: data.ExcRateValue,
	deleted: data.GCRecord,
	LastVendorId: data.LastVendorId,
	modifiedDate: data.ModifiedDate,
	modifiedUId: data.ModifiedUId,
	orderId: data.OInvId,
	orderLineAmount: data.OInvLineAmount,
	orderLineDate: data.OInvLineDate,
	orderLineDesc: data.OInvLineDesc,
	orderLineDiscAmount: data.OInvLineDiscAmount,
	orderLineExpenseAmount: data.OInvLineExpenseAmount,
	orderLineFTotal: data.OInvLineFTotal,
	orderLineGuid: data.OInvLineGuid,
	orderLineId: data.OInvLineId,
	orderLinePrice: data.OInvLinePrice,
	orderLineRegNo: data.OInvLineRegNo,
	orderLineTaxAmount: data.OInvLineTaxAmount,
	orderLineTotal: data.OInvLineTotal,
	resGuid: data.ResGuid,
	resId: data.ResId,
	resRegNo: data.ResRegNo,
	syncDateTime: data.SyncDateTime,
	unitId: data.UnitId,
	resource: data.Resource && transformResources(data.Resource),
})