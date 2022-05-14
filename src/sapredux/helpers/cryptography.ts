import CryptoJS from 'crypto-js'

import { secret_key } from 'configs'

export const ecnrypt_data = (data: string, key: string = '') => {
	if (key.length < 1) {
		key = secret_key
	}
	return CryptoJS.AES.encrypt(data, key).toString()
}

export const decrypt_data = (data: string, key: string = '') => {
	if (key.length < 1) {
		key = secret_key
	}
	try {
		var bytes = CryptoJS.AES.decrypt(data, key)
		return bytes.toString(CryptoJS.enc.Utf8)
	} catch {
		return ''
	}
}
