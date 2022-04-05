import { serviceConfig } from 'configs';
import { fetchWithCred, handleResponse, set_local_data_by_key } from 'sapredux/helpers';

const setCurrency = async (currency = 'TMT') => {
	await fetchWithCred(`${serviceConfig.apiUrl}${serviceConfig.routes.setCurrency}${currency}/`).then(handleResponse);
	set_local_data_by_key("currency", currency, false, false)
	// window.location.reload()
}

const setLanguage = async (language = 'tk') => {
	await fetchWithCred(`${serviceConfig.apiUrl}${serviceConfig.routes.setLanguage}${language}/`).then(handleResponse);
	set_local_data_by_key("language", language, false, false)
	// window.location.reload()
}

export const otherService = {
	setCurrency,
	setLanguage,
};