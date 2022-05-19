// favicons
// import {SapCozgutIcon} from './icon/SapCozgut.ico'
// import {SapHasapIcon} from './icon/SapHasap.ico'
// import {SapSargytIcon} from './icon/Sapsargyt.ico'
// import {LsIcon} from './icon/LS.ico'
// import {HilliIcon} from './icon/Hilli.ico'

import { namesConfig, serviceConfig } from 'configs'

// // images
// import SapCozgut from './images/og_sapcozgut.png'
// import AkHasap from './images/og_akhasap.png'
// import Service from './images/og_service.png'
// import Contact from './images/og_contact.png'
// import SapSargyt from './images/og_sapsargyt.png'
// import SapHasap from './images/og_saphasap.png'
// import LS from './images/og_ls.png'
// import Hilli from './images/og_hilli.png'

const getTitle = (t: any) => {
	return [
		{
			path: '/',
			title: namesConfig.company_name,
			description:
				'Öndürijiden sarp edija lomaý söwda',
			keywords:
				'Ls, Sap Chozgut, Sap Hasap, Akhasap, Sap Sargyt, Lomaý söwda, Service',
			url: serviceConfig.apiHost,
			type: 'organisation',
			// "img": SapCozgut
			// "favicon": {SapCozgutIcon}
		},
		{
			path: '/login/',
			title: t('title.login'),
			description:
				'Öndürijiden sarp edija lomaý söwda',
			keywords:
				'Ls, Sap Chozgut, Sap Hasap, Akhasap, Sap Sargyt, Lomaý söwda, Service',
			url: `${serviceConfig.apiHost}/login/`,
			type: 'login',
			// "img": SapCozgut
			// "favicon": {SapCozgutIcon}
		},
		{
			path: '/register/',
			title: t('title.register'),
			description:
				'Öndürijiden sarp edija lomaý söwda',
			keywords:
				'Ls, Sap Chozgut, Sap Hasap, Akhasap, Sap Sargyt, Lomaý söwda, Service',
			url: `${serviceConfig.apiHost}/register/`,
			type: 'register',
			// "img": SapCozgut
			// "favicon": {SapCozgutIcon}
		},
		{
			path: '/profile/',
			title: t('title.profile'),
			description:
				'Profil maglumatlary görmek',
			keywords:
				'Ls, Sap Chozgut, Sap Hasap, Akhasap, Sap Sargyt, Lomaý söwda, Service',
			url: `${serviceConfig.apiHost}/profile/`,
			type: 'profile',
			// "img": SapCozgut
			// "favicon": {SapCozgutIcon}
		},

		{
			path: '/about/',
			title: t('title.about'),
			description:
				'Lomaý söwda - bölekleýin hem-de lomaýlaýyn söwda ulgamy',
			keywords:
				'Ls, Sap Chozgut, Sap Hasap, Akhasap, Sap Sargyt, Lomaý söwda, Service',
			url: `${serviceConfig.apiHost}/about/`,
			type: 'about',
			// "img": SapCozgut
			// "favicon": {SapCozgutIcon}
		},

		{
			path: '/contact/',
			title: t('title.contact_us'),
			description: 'Biz bilen habarlaşmak üçin...',
			keywords:
				'Sap Chozgut, Sap Hasap, Akhasap, Sap Sargyt, Hilli, Ls, Service',
			url: `${serviceConfig.apiHost}/contact/`,
			type: 'contact',
			// "img": Contact
			// "favicon": {SapCozgutIcon}
		},

		{
			path: '/v-grid/',
			title: t('title.vGrid'),
			description:
				'Lomaý söwda önümler filterleri',
			keywords:
				'Ls, Sap Chozgut, Sap Hasap, Akhasap, Sap Sargyt, Lomaý söwda, Service',
			url: `${serviceConfig.apiHost}/v-grid/`,
			type: 'products',
			// "img": SapCozgut
			// "favicon": {SapCozgutIcon}
		},

		{
			path: '/product/',
			title: t('title.product'),
			description:
				'Harydy jikme-jik görmek',
			keywords:
				'Ls, Sap Chozgut, Sap Hasap, Akhasap, Sap Sargyt, Lomaý söwda, Service',
			url: `${serviceConfig.apiHost}/product/`,
			type: 'product',
			// "img": SapCozgut
			// "favicon": {SapCozgutIcon}
		},

		{
			path: '/wishlist/',
			title: t('title.wishlist'),
			description:
				'Meniň halanlarym',
			keywords:
				'Ls, Sap Chozgut, Sap Hasap, Akhasap, Sap Sargyt, Lomaý söwda, Service',
			url: `${serviceConfig.apiHost}/wishlist/`,
			type: 'wishlist',
			// "img": SapCozgut
			// "favicon": {SapCozgutIcon}
		},

		{
			path: '/profile-edit/',
			title: t('title.profileEdit'),
			description:
				'Profil üýtgeşmeleri girizmek',
			keywords:
				'Ls, Sap Chozgut, Sap Hasap, Akhasap, Sap Sargyt, Lomaý söwda, Service',
			url: `${serviceConfig.apiHost}/profile-edit/`,
			type: 'profile',
			// "img": SapCozgut
			// "favicon": {SapCozgutIcon}
		},

		{
			path: '/orders/',
			title: t('title.orders'),
			description:
				'Haryt sargytlaryň sanawlary',
			keywords:
				'Ls, Sap Chozgut, Sap Hasap, Akhasap, Sap Sargyt, Lomaý söwda, Service',
			url: `${serviceConfig.apiHost}/orders/`,
			type: 'orders',
			// "img": SapCozgut
			// "favicon": {SapCozgutIcon}
		},

		{
			path: '/checkout/',
			title: t('title.checkout'),
			description:
				'Töleg görnüşleri hem-de töleg amala aşyrmak',
			keywords:
				'Ls, Sap Chozgut, Sap Hasap, Akhasap, Sap Sargyt, Lomaý söwda, Service',
			url: `${serviceConfig.apiHost}/checkout/`,
			type: 'checkout',
			// "img": SapCozgut
			// "favicon": {SapCozgutIcon}
		},

		{
			path: '/categories/',
			title: t('title.categories'),
			description:
				'Haryt kategoriýalary',
			keywords:
				'Ls, Sap Chozgut, Sap Hasap, Akhasap, Sap Sargyt, Lomaý söwda, Service',
			url: `${serviceConfig.apiHost}/categories/`,
			type: 'categories',
			// "img": SapCozgut
			// "favicon": {SapCozgutIcon}
		},

		{
			path: '/settings/',
			title: t('title.settings'),
			description:
				'Mobile sazlamalary amala aşyrmak',
			keywords:
				'Ls, Sap Chozgut, Sap Hasap, Akhasap, Sap Sargyt, Lomaý söwda, Service',
			url: `${serviceConfig.apiHost}/settings/`,
			type: 'settings',
			// "img": SapCozgut
			// "favicon": {SapCozgutIcon}
		},

		{
			path: '/brands/',
			title: t('title.brands'),
			description:
				'Ähli brendleri görmek',
			keywords:
				'Ls, Sap Chozgut, Sap Hasap, Akhasap, Sap Sargyt, Lomaý söwda, Service',
			url: `${serviceConfig.apiHost}/brands/`,
			type: 'brands',
			// "img": SapCozgut
			// "favicon": {SapCozgutIcon}
		},

		{
			path: '/cart/',
			title: t('title.cart'),
			description:
				'Meniň sebedimi görmek',
			keywords:
				'Ls, Sap Chozgut, Sap Hasap, Akhasap, Sap Sargyt, Lomaý söwda, Service',
			url: `${serviceConfig.apiHost}/cart/`,
			type: 'cart',
			// "img": SapCozgut
			// "favicon": {SapCozgutIcon}
		},

		{
			path: '/payment_and_delivery_info/',
			title: t('title.payment_and_delivery_info'),
			description:
				'Töleg hem-de eltip bermek hyzmatlaryny amala aşyrmak maglumatlary',
			keywords:
				'Ls, Sap Chozgut, Sap Hasap, Akhasap, Sap Sargyt, Lomaý söwda, Service',
			url: `${serviceConfig.apiHost}/payment_and_delivery_info/`,
			type: 'website',
			// "img": SapCozgut
			// "favicon": {SapCozgutIcon}
		},
	]
}

export default getTitle
