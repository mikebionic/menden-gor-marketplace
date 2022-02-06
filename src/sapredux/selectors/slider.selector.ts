import * as R from 'ramda'

export const getSliderByName = (data: any, name: string) => R.prop(name, data)