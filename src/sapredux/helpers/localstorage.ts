import { any } from 'ramda'
import { ecnrypt_data, decrypt_data } from 'sapredux/helpers'

export const get_local_data_by_key = (
	key: string,
	parse_json = true,
	encryption = true,
) => {
	let data: any = parse_json ? {} : ''
	let local_data: any = localStorage.getItem(key)
	if (encryption && local_data !== undefined) {
		local_data = decrypt_data(local_data)
	}
	if (local_data !== undefined && local_data !== null) {
		if (local_data.length > 1) {
			data = parse_json ? JSON.parse(local_data) : local_data
		}
	}
	return data
}

export const set_local_data_by_key = (
	key: string,
	data_payload: any,
	stringify_json = true,
	encryption = true,
) => {
	if (data_payload) {
		data_payload = stringify_json ? JSON.stringify(data_payload) : data_payload
		if (encryption) {
			data_payload = ecnrypt_data(data_payload)
		}
		localStorage.setItem(key, data_payload)
		return true
	}
	return false
}

export const getCurrentCurrency = (currency_code = 'TMT') => {
	const local_currency =
		get_local_data_by_key('currency', false, false) || currency_code
	const currencyItems = [
		{ name: 'TMT', symbol: 'm' },
		{ name: 'USD', symbol: '$' },
	]
	let currency_data = currencyItems[0]
	currencyItems.map((item: any) => {
		if (item.name === local_currency) {
			currency_data = item
		}
	})
	return currency_data
}
