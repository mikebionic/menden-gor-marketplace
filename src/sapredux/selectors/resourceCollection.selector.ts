export const getResourceCollections = (state: any) => {
	const data = !!state.resourceCollection.data
		? state.resourceCollection.data
		: []
	return data
}
