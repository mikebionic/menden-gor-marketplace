// import { authService } from 'sapredux/services'

export const handleResponse = (response: any) => {
	return response.text().then((text: string) => {
		const data = text && JSON.parse(text);
		if (!response.ok) {
			if (response.status === 401) {
				// showToastMessage("error", "Please Login!")
			}
			const error = (data && data.message) || response.statusText;
			return Promise.reject(error);
		}

		return data;
	});
}