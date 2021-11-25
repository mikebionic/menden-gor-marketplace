import noimage from 'common/images/noimage.png'
import { Spinner } from 'modules/loaders'

export const handleImageError = (e: any) => {
	e.target.src = noimage
}
//src

export const handleLoadingImage = (e: any) => {
	e.target.onLoad = {Spinner}
}

// ????