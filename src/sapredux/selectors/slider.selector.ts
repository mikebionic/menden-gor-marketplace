import * as R from 'ramda'

export const getSliderById = (data: any, id: number) => R.prop(id, data)

export const getSliderByName = (data: any, name: string) => {
	if (data){ 
		data.map((item:any) => {
			if (item.name === name){
				return item
			}
			return {}
		})
	}
	return {}
}

export const getSliders = (state: any) => {
	const sliders = !!state.slider.data ? R.map((id: number) => getSliderById(state.slider.data, id), state.sliderPage.ids) : []
	// const loading = state.slider.loading;
	// console.log("redux state fo categroy ", state.slider)
	return sliders
}