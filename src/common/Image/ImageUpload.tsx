import { PlusOutlined } from '@ant-design/icons'
import { serviceConfig } from 'configs'
import { handleImageError } from 'modules/errors'
import { useState, useEffect } from 'react'

export const ImageUpload = ({
	src = '',
	alt = '',
	className = '',
	imageType = 'default',
	forceSrc = false,
}) => {
	const [selectedFile, setSelectedFile] = useState()
	const [preview, setPreview]: any = useState()

	const image_src = preview
		? preview
		: src
		? !src.includes('http') && serviceConfig.useMockApi === 0 && !forceSrc
			? `${serviceConfig.apiHost}${src}`
			: src
		: ''

	useEffect(() => {
		if (!selectedFile) {
			setPreview(undefined)
			return
		}
		const objectUrl = URL.createObjectURL(selectedFile)
		setPreview(objectUrl)
		// free memory when ever this component is unmounted
		return () => URL.revokeObjectURL(objectUrl)
	}, [selectedFile])

	const onSelectFile = (e: any) => {
		if (!e.target.files || e.target.files.length === 0) {
			setSelectedFile(undefined)
			return
		}
		setSelectedFile(e.target.files[0])
	}

	return (
		<div>
			<label
				htmlFor="file-upload"
				className="absolute grid grid-flow-row rounded-full hover:opacity-70 opacity-60 hover:bg-gray-50 bg-gray-50 w-36 h-36 left-1 bottom-1 auto-cols-max place-items-center place-content-center"
			>
				<input
					id="file-upload"
					className="hidden"
					type="file"
					onChange={onSelectFile}
				/>
				<PlusOutlined className="uploadPhoto" style={{ fontSize: '30px' }} />
			</label>
			{/*{preview && <button onClick={setPreview('')}>x</button>}*/}
			<img
				src={image_src}
				alt={alt}
				onError={(e: any) => handleImageError(e, imageType)}
				className={className}
			/>
		</div>
	)
}
