
export const transformFetch = async(fetchFunc:any, transformFunc:any, data_list=true) => {
	const response = await fetchFunc()
	const response_data = response ?
		data_list ? response.data.map(transformFunc) : transformFunc(response.data)
		: null
	if (response_data) {
		if (response.status === 1){
			return response_data
		} else {
			console.log("err ", response_data)
			return []
		}
	}
}

const requestOptions: any = {
	method: 'GET',
	credentials:'include',
};

export const fetchWithCred = async(url:string, credentials:any={}) =>
	fetch(url, {...requestOptions, ...credentials})