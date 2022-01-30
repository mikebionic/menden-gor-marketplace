import { Helmet } from "react-helmet";

import { useHeader } from 'components/HeaderProvider'

// import SapCozgutFavIcon from '../MainView/icon/SapCozgut.ico'
import SapCozgutImage from './og_sapcozgut.png'

const AppHeader = () => {

	const { headerData }:any = useHeader()
	const { title, description, keywords, meta_tags, url, type, img, favicon }:any = {...headerData}

	return (
		<Helmet>
			<meta charSet="UTF-8" />
			<title>{ title ? title : "Sap Hasap | Sap Çözgüt" }</title>
			<link rel="canonical" href="https://saphasap.com" />
			{/* <link rel="shortcut icon" type="image/x-icon" href={favicon ? favicon : SapCozgutFavIcon} sizes="16x16" /> */}
			<meta name="description" content={
				description ? description :
				"Biziň maksadymyz siziň ösüşiňize sebäp bolmak"}></meta>
			<meta name="keywords" content={
				keywords ? keywords :
				"Sap Chozgut, Sap Hasap, Akhasap, Sap Sargyt, Marketplace"}></meta>
			<meta name="author" content="Sap Çözgüt"></meta>
			<meta property="og:site_name" content="Sap Çözgüt" />
			<meta property="og:title" content={ title ? title : "Sap Hasap | Sap Çözgüt" } />
			<meta property="og:description" content={description ? description : "Biziň maksadymyz siziň ösüşiňize sebäp bolmak"} />
			<meta property="og:url" content={url ? url : "https://saphasap.com"} />
			<meta property="og:type" content={type ? type : "website"} />
			<meta property="article:publisher" content="https://www.saphasap.com" />
			<meta property="article:section" content="Coding" />
			<meta property="article:tag" content="Coding" />
			<meta property="og:image" content={img ? img : SapCozgutImage} />
			<meta property="og:image:secure_url" content={img ? img : SapCozgutImage} />
			<meta property="og:image:width" content="1280" />
			<meta property="og:image:height" content="640" />
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:image" content={img ? img : SapCozgutImage} />
			<meta property="twitter:site" content="@sapcozgut" />
			<meta property="twitter:url" content={url ? url : "https://saphasap.com"} />
			<meta property="twitter:title" content={ title ? title : "Sap Hasap | Sap Çözgüt" } />
		</Helmet>
	)
}

export default AppHeader