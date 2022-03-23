import { serviceConfig } from 'configs';
import { handleResponse } from 'sapredux/helpers';
import { all_sliders } from './mock_data/slider.mock';
import { fetchWithCred } from 'sapredux/helpers'

const fetchAll = async () => {

	if (serviceConfig.useMockApi){
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(all_sliders)
			}, 3000);
		});
	}

	return await fetchWithCred(`${serviceConfig.apiUrl}${serviceConfig.routes.all_sliders}`).then(handleResponse);
}

export const sliderService = {
	fetchAll
};