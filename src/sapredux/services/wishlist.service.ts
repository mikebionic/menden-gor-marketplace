import { serviceConfig } from 'configs';
import { authBearerHeaderAsync, handleResponse } from 'sapredux/helpers';
import { all_wishlist } from './mock_data/wishlist.mock';
import { transformResources as transformResponse } from './transform_data';
import { transformFetch, fetchWithCred } from 'sapredux/helpers';

const fetchAll = async () => {
	if (serviceConfig.useMockApi){
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(all_wishlist)
			}, 200);
		});
	}

	const requestOptions = { headers: await authBearerHeaderAsync() };
	return await fetchWithCred(`${serviceConfig.apiUrl}${serviceConfig.routes.wishlist}`, requestOptions).then(handleResponse);
}

const fetchAll_data = async() => {
	return await transformFetch(fetchAll, transformResponse)
}

export const wishlistService = {
	fetchAll,
	fetchAll_data,
};