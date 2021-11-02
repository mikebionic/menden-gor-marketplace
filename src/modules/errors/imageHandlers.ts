import noimage from 'common/images/noimage.png'

export const handleImageError = (e: any) => {
	e.target.src = noimage
}

export const handleLoadingImage = (e: any) => {
	e.target.src = noimage
}