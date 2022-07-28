import noimage from 'common/images/noimage.png'
import noavatar from 'common/images/noavatar.png'
import { Spinner } from 'modules/loaders'

export const handleImageError = (e: any, imageType = 'default') => {
	e.target.src = imageType === 'default' ? noimage : noavatar
}
//src

export const handleLoadingImage = (e: any) => {
	e.target.onLoad = { Spinner }
}

// ????
