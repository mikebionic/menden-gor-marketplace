import {
	transformResources,
	transformRpAcc,
} from 'sapredux/services/transform_data'

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

const invStatSelector: any = {
	//# Waiting
	1: {
		class: 'warning',
		tailwind_hash: 'amber-500',
		percentage: 10,
		icon: BiLoader,
		hash_colors: '#eda514',
	},
	//# Received (not order maybe, discuss with dovlet)
	2: {
		class: 'success',
		tailwind_hash: 'emerald-500',
		percentage: 30,
		icon: BsCurrencyDollar,
		hash_colors: '#00b289',
	},
	//# Talked with a client
	3: {
		class: 'success',
		tailwind_hash: 'emerald-500',
		percentage: 30,
		icon: HiOutlineThumbUp,
		hash_colors: '#00b289',
	},
	//# Approved
	4: {
		class: 'success',
		tailwind_hash: 'emerald-500',
		percentage: 30,
		icon: CgCheckO,
		hash_colors: '#00b289',
	},
	//# Not approved
	5: {
		class: 'danger',
		tailwind_hash: 'red-400',
		percentage: 30,
		icon: AiOutlineCloseCircle,
		hash_colors: '#FF7273',
	},
	//# Collecting goods
	6: {
		class: 'success',
		tailwind_hash: 'emerald-500',
		percentage: 40,
		icon: FiPackage,
		hash_colors: '#00b289',
	},
	//# Order sent
	7: {
		class: 'info',
		tailwind_hash: 'cyan-300',
		percentage: 65,
		icon: FiTruck,
		hash_colors: '#63d3fa',
	},
	//# Transfered to customer
	8: {
		class: 'info',
		tailwind_hash: 'cyan-300',
		percentage: 88,
		icon: GoGift,
		hash_colors: '#63d3fa',
	},
	//# Returned
	9: {
		class: 'danger',
		tailwind_hash: 'red-400',
		percentage: 60,
		icon: FiCornerLeftUp,
		hash_colors: '#FF7273',
	},
	//# Note
	10: {
		class: 'warning',
		tailwind_hash: 'amber-500',
		percentage: 50,
		icon: FiAlertCircle,
		hash_colors: '#eda514',
	},
	//# Modified
	11: {
		class: 'warning',
		tailwind_hash: 'amber-500',
		percentage: 60,
		icon: BiEditAlt,
		hash_colors: '#eda514',
	},
	//# Complete
	12: {
		class: 'primary',
		tailwind_hash: 'blue-700',
		percentage: 100,
		icon: FaAward,
		hash_colors: '#0023ff',
	},
	13: {
		class: 'warning',
		tailwind_hash: 'amber-500',
		percentage: 20,
		icon: BsCurrencyDollar,
		hash_colors: '#eda514',
	},
	14: {
		class: 'danger',
		tailwind_hash: 'red-400',
		percentage: 40,
		icon: BsCurrencyDollar,
		hash_colors: '#ff7273',
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
	order_inv_lines:
		data.Order_inv_lines && data.Order_inv_lines.map(transformOrderInvLine),
	status_ui: invStatSelector[parseInt(data.InvStatId)],
})

export const transformStatusUI = (data: any) => ({
	class: data.class,
	color_hash: data.color_hash,
	icon: data.icon,
	percentage: data.percentage,
})

export const transformOrderInvLine = (data: any) => ({
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

export const toJsonCheckoutOrderInv = (data: any) => ({
	orderInv: {
		OInvTypeId: data.typeId ?? 2,
		InvStatId: 1,
		RpAccGuid: data.rpAccGuid ?? '',
		PtId: data.ptId ?? 1,
		PmId: data.pmId ?? 1,
		PaymStatusId: data.paymStatusId ?? 1,
		OrderInvRegNo: data.orderInvRegNo ?? '',
		OInvDesc: data.description ?? '',
		CurrencyCode: data.currency_code ?? 'TMT',
		OrderInvLines: data.orderInvLines.map((item: any) => ({
			UnitId: 1,
			ResId: item.resId,
			OInvLineAmount: item.totalCount,
			OInvLinePrice: item.priceValue,
		})),
	},
})
