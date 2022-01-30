import React, { useState } from 'react'

const HeaderContext = React.createContext({})

const HeaderProvider = ({ children }:any) => {

	const [headerData, setHeaderData]:any = useState({});

	const onHeaderUpdate = ({ title='', description='', keywords=[], meta_tags=[] }) => {
		setHeaderData({title, description, keywords, meta_tags})
	}

	return (
		<HeaderContext.Provider value={{ headerData, onHeaderUpdate }}>
			{children}
		</HeaderContext.Provider>
	)
}

const useHeader = () => React.useContext(HeaderContext)

export {
	HeaderProvider,
	useHeader
}