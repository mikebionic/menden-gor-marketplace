
export const getBrands = (state: any) => {
	const brands = !!state.brand.data ? state.brand.data : []
	return brands
}