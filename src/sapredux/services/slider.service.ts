import { serviceConfig } from 'configs';
import { handleResponse, authBearerHeader } from 'sapredux/helpers';
import { all_sliders } from './mock_data/slider.mock';

const fetchAll = async () => {

	if (serviceConfig.useMockApi){
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(all_sliders)
			}, 3000);
		});
	}

	const requestOptions = {
		method: 'GET',
		// headers: authBearerHeader()
	};
	return await fetch(`${serviceConfig.apiUrl}${serviceConfig.routes.all_sliders}`, requestOptions).then(handleResponse);

}

export const sliderService = {
	fetchAll
};