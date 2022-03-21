// import { authService } from 'sapredux/services'

export const handleResponse = (response: any) => {
	return response.text().then((text: string) => {
		const data = text && JSON.parse(text);
		if (!response.ok) {
			if (response.status === 401) {
				// auto logout if 401 response returned from api
				// authService.logout();
			}

			const error = (data && data.message) || response.statusText;
			return Promise.reject(error);
		}

		return data;
	});
}