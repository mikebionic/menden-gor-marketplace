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
				'Elektronika hojalyk harytlary amatly bahadan we garaşaryna, бытовая техника в кредит по выгодным ценам',
			keywords:
				'Sap Chozgut, Lomay Sowda, Garasharyna, Kredit, Nikai, Garantiya, Kepillik, Credit, Guarantee, Кредит бытовой техники Ашхабад, Кредит телефон Ашхабад, Рассрочка техника, Рассрочка телефон, kredit telefon ashgabat, Рассрочка телефон рядом Ашхабад, turkmenistan telefon bahalary, kredite telefonlar, garaşaryna telefon, garaşaryna telewizor, kredit telewizor, рассрочка телевизор ashgabat, kredit teker ashgabat, kredit akumulator ashgabat, redmi kredit ashgabat, samsung kredit ashgabat, kondisioner kredit ashgabat, elektronika kredit ashgabat, kredit kir masynlar, karzyna hojalyk harytlary, garaşaryna hojalyk harytlar, garaşaryna teker, kredite tehnika, garaşaryna harytlar, marazilnik kredite, haladilnikler kredite, tikin masynlar kredtite, kredit tw, kredite haly, karzyna tikin maşynlar, marazilnik garaşaryna, kompýuter kredite, компьютер в рассрочку без банка, телефон в рассрочку без банка, бытовая техника в кредит в ашхабаде, интернет-магазин бытовой техники ашхабад, sagatlar kredite, smartfon garaşaryna, nagt ýa-da garaşaryna tehnika, sok maşyn garaşaryna we kredit Gas-associated Technical sulfur, Lump sulfur, Sulfur technical granulated, Production Turkmenistan, Made in Turkmenistan, Газопопутная Сера техническая, Комовая сера, Сера техническая гранулированная, Производство Туркменистана, Gaz bilen baglanyşykly tehniki kükürt, Bir bölek kükürt, Kükürt tehniki granulirlendi, Türkmenistanda öndürilen',
			url: serviceConfig.apiHost,
			type: 'organisation',
			// "img": SapCozgut
			// "favicon": {SapCozgutIcon}
		},
		{
			path: '/login/',
			title: t('title.login'),
			description:
				'Elektronika hojalyk harytlary amatly bahadan we garaşaryna, бытовая техника в кредит по выгодным ценам',
			keywords:
				'Sap Chozgut, Lomay Sowda, Garasharyna, Kredit, Nikai, Garantiya, Kepillik, Credit, Guarantee, Кредит бытовой техники Ашхабад, Кредит телефон Ашхабад, Рассрочка техника, Рассрочка телефон, kredit telefon ashgabat, Рассрочка телефон рядом Ашхабад, turkmenistan telefon bahalary, kredite telefonlar, garaşaryna telefon, garaşaryna telewizor, kredit telewizor, рассрочка телевизор ashgabat, kredit teker ashgabat, kredit akumulator ashgabat, redmi kredit ashgabat, samsung kredit ashgabat, kondisioner kredit ashgabat, elektronika kredit ashgabat, kredit kir masynlar, karzyna hojalyk harytlary, garaşaryna hojalyk harytlar, garaşaryna teker, kredite tehnika, garaşaryna harytlar, marazilnik kredite, haladilnikler kredite, tikin masynlar kredtite, kredit tw, kredite haly, karzyna tikin maşynlar, marazilnik garaşaryna, kompýuter kredite, компьютер в рассрочку без банка, телефон в рассрочку без банка, бытовая техника в кредит в ашхабаде, интернет-магазин бытовой техники ашхабад, sagatlar kredite, smartfon garaşaryna, nagt ýa-da garaşaryna tehnika, sok maşyn garaşaryna we kredit Gas-associated Technical sulfur, Lump sulfur, Sulfur technical granulated, Production Turkmenistan, Made in Turkmenistan, Газопопутная Сера техническая, Комовая сера, Сера техническая гранулированная, Производство Туркменистана, Gaz bilen baglanyşykly tehniki kükürt, Bir bölek kükürt, Kükürt tehniki granulirlendi, Türkmenistanda öndürilen',
			url: `${serviceConfig.apiHost}/login/`,
			type: 'login',
			// "img": SapCozgut
			// "favicon": {SapCozgutIcon}
		},
		{
			path: '/register/',
			title: t('title.register'),
			description:
				'Elektronika hojalyk harytlary amatly bahadan we garaşaryna, бытовая техника в кредит по выгодным ценам',
			keywords:
				'Sap Chozgut, Lomay Sowda, Garasharyna, Kredit, Nikai, Garantiya, Kepillik, Credit, Guarantee, Кредит бытовой техники Ашхабад, Кредит телефон Ашхабад, Рассрочка техника, Рассрочка телефон, kredit telefon ashgabat, Рассрочка телефон рядом Ашхабад, turkmenistan telefon bahalary, kredite telefonlar, garaşaryna telefon, garaşaryna telewizor, kredit telewizor, рассрочка телевизор ashgabat, kredit teker ashgabat, kredit akumulator ashgabat, redmi kredit ashgabat, samsung kredit ashgabat, kondisioner kredit ashgabat, elektronika kredit ashgabat, kredit kir masynlar, karzyna hojalyk harytlary, garaşaryna hojalyk harytlar, garaşaryna teker, kredite tehnika, garaşaryna harytlar, marazilnik kredite, haladilnikler kredite, tikin masynlar kredtite, kredit tw, kredite haly, karzyna tikin maşynlar, marazilnik garaşaryna, kompýuter kredite, компьютер в рассрочку без банка, телефон в рассрочку без банка, бытовая техника в кредит в ашхабаде, интернет-магазин бытовой техники ашхабад, sagatlar kredite, smartfon garaşaryna, nagt ýa-da garaşaryna tehnika, sok maşyn garaşaryna we kredit Gas-associated Technical sulfur, Lump sulfur, Sulfur technical granulated, Production Turkmenistan, Made in Turkmenistan, Газопопутная Сера техническая, Комовая сера, Сера техническая гранулированная, Производство Туркменистана, Gaz bilen baglanyşykly tehniki kükürt, Bir bölek kükürt, Kükürt tehniki granulirlendi, Türkmenistanda öndürilen',
			url: `${serviceConfig.apiHost}/register/`,
			type: 'register',
			// "img": SapCozgut
			// "favicon": {SapCozgutIcon}
		},
		{
			path: '/profile/',
			title: t('title.profile'),
			description:
				'Elektronika hojalyk harytlary amatly bahadan we garaşaryna, бытовая техника в кредит по выгодным ценам',
			keywords:
				'Sap Chozgut, Lomay Sowda, Garasharyna, Kredit, Nikai, Garantiya, Kepillik, Credit, Guarantee, Кредит бытовой техники Ашхабад, Кредит телефон Ашхабад, Рассрочка техника, Рассрочка телефон, kredit telefon ashgabat, Рассрочка телефон рядом Ашхабад, turkmenistan telefon bahalary, kredite telefonlar, garaşaryna telefon, garaşaryna telewizor, kredit telewizor, рассрочка телевизор ashgabat, kredit teker ashgabat, kredit akumulator ashgabat, redmi kredit ashgabat, samsung kredit ashgabat, kondisioner kredit ashgabat, elektronika kredit ashgabat, kredit kir masynlar, karzyna hojalyk harytlary, garaşaryna hojalyk harytlar, garaşaryna teker, kredite tehnika, garaşaryna harytlar, marazilnik kredite, haladilnikler kredite, tikin masynlar kredtite, kredit tw, kredite haly, karzyna tikin maşynlar, marazilnik garaşaryna, kompýuter kredite, компьютер в рассрочку без банка, телефон в рассрочку без банка, бытовая техника в кредит в ашхабаде, интернет-магазин бытовой техники ашхабад, sagatlar kredite, smartfon garaşaryna, nagt ýa-da garaşaryna tehnika, sok maşyn garaşaryna we kredit Gas-associated Technical sulfur, Lump sulfur, Sulfur technical granulated, Production Turkmenistan, Made in Turkmenistan, Газопопутная Сера техническая, Комовая сера, Сера техническая гранулированная, Производство Туркменистана, Gaz bilen baglanyşykly tehniki kükürt, Bir bölek kükürt, Kükürt tehniki granulirlendi, Türkmenistanda öndürilen',
			url: `${serviceConfig.apiHost}/profile/`,
			type: 'profile',
			// "img": SapCozgut
			// "favicon": {SapCozgutIcon}
		},

		{
			path: '/about/',
			title: t('title.about'),
			description: 'Lomaý söwda - bölekleýin hem-de lomaýlaýyn söwda ulgamy',
			keywords:
				'Sap Chozgut, Lomay Sowda, Garasharyna, Kredit, Nikai, Garantiya, Kepillik, Credit, Guarantee, Кредит бытовой техники Ашхабад, Кредит телефон Ашхабад, Рассрочка техника, Рассрочка телефон, kredit telefon ashgabat, Рассрочка телефон рядом Ашхабад, turkmenistan telefon bahalary, kredite telefonlar, garaşaryna telefon, garaşaryna telewizor, kredit telewizor, рассрочка телевизор ashgabat, kredit teker ashgabat, kredit akumulator ashgabat, redmi kredit ashgabat, samsung kredit ashgabat, kondisioner kredit ashgabat, elektronika kredit ashgabat, kredit kir masynlar, karzyna hojalyk harytlary, garaşaryna hojalyk harytlar, garaşaryna teker, kredite tehnika, garaşaryna harytlar, marazilnik kredite, haladilnikler kredite, tikin masynlar kredtite, kredit tw, kredite haly, karzyna tikin maşynlar, marazilnik garaşaryna, kompýuter kredite, компьютер в рассрочку без банка, телефон в рассрочку без банка, бытовая техника в кредит в ашхабаде, интернет-магазин бытовой техники ашхабад, sagatlar kredite, smartfon garaşaryna, nagt ýa-da garaşaryna tehnika, sok maşyn garaşaryna we kredit Gas-associated Technical sulfur, Lump sulfur, Sulfur technical granulated, Production Turkmenistan, Made in Turkmenistan, Газопопутная Сера техническая, Комовая сера, Сера техническая гранулированная, Производство Туркменистана, Gaz bilen baglanyşykly tehniki kükürt, Bir bölek kükürt, Kükürt tehniki granulirlendi, Türkmenistanda öndürilen',
			url: `${serviceConfig.apiHost}/about/`,
			type: 'about',
			// "img": SapCozgut
			// "favicon": {SapCozgutIcon}
		},

		{
			path: '/contact/',
			title: t('title.contact_us'),
			description:
				'Elektronika hojalyk harytlary amatly bahadan we garaşaryna, бытовая техника в кредит по выгодным ценам',
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
				'Elektronika hojalyk harytlary amatly bahadan we garaşaryna, бытовая техника в кредит по выгодным ценам',
			keywords:
				'Sap Chozgut, Lomay Sowda, Garasharyna, Kredit, Nikai, Garantiya, Kepillik, Credit, Guarantee, Кредит бытовой техники Ашхабад, Кредит телефон Ашхабад, Рассрочка техника, Рассрочка телефон, kredit telefon ashgabat, Рассрочка телефон рядом Ашхабад, turkmenistan telefon bahalary, kredite telefonlar, garaşaryna telefon, garaşaryna telewizor, kredit telewizor, рассрочка телевизор ashgabat, kredit teker ashgabat, kredit akumulator ashgabat, redmi kredit ashgabat, samsung kredit ashgabat, kondisioner kredit ashgabat, elektronika kredit ashgabat, kredit kir masynlar, karzyna hojalyk harytlary, garaşaryna hojalyk harytlar, garaşaryna teker, kredite tehnika, garaşaryna harytlar, marazilnik kredite, haladilnikler kredite, tikin masynlar kredtite, kredit tw, kredite haly, karzyna tikin maşynlar, marazilnik garaşaryna, kompýuter kredite, компьютер в рассрочку без банка, телефон в рассрочку без банка, бытовая техника в кредит в ашхабаде, интернет-магазин бытовой техники ашхабад, sagatlar kredite, smartfon garaşaryna, nagt ýa-da garaşaryna tehnika, sok maşyn garaşaryna we kredit Gas-associated Technical sulfur, Lump sulfur, Sulfur technical granulated, Production Turkmenistan, Made in Turkmenistan, Газопопутная Сера техническая, Комовая сера, Сера техническая гранулированная, Производство Туркменистана, Gaz bilen baglanyşykly tehniki kükürt, Bir bölek kükürt, Kükürt tehniki granulirlendi, Türkmenistanda öndürilen',
			url: `${serviceConfig.apiHost}/v-grid/`,
			type: 'products',
			// "img": SapCozgut
			// "favicon": {SapCozgutIcon}
		},

		{
			path: '/product/',
			title: t('title.product'),
			description:
				'Elektronika hojalyk harytlary amatly bahadan we garaşaryna, бытовая техника в кредит по выгодным ценам',
			keywords:
				'Sap Chozgut, Lomay Sowda, Garasharyna, Kredit, Nikai, Garantiya, Kepillik, Credit, Guarantee, Кредит бытовой техники Ашхабад, Кредит телефон Ашхабад, Рассрочка техника, Рассрочка телефон, kredit telefon ashgabat, Рассрочка телефон рядом Ашхабад, turkmenistan telefon bahalary, kredite telefonlar, garaşaryna telefon, garaşaryna telewizor, kredit telewizor, рассрочка телевизор ashgabat, kredit teker ashgabat, kredit akumulator ashgabat, redmi kredit ashgabat, samsung kredit ashgabat, kondisioner kredit ashgabat, elektronika kredit ashgabat, kredit kir masynlar, karzyna hojalyk harytlary, garaşaryna hojalyk harytlar, garaşaryna teker, kredite tehnika, garaşaryna harytlar, marazilnik kredite, haladilnikler kredite, tikin masynlar kredtite, kredit tw, kredite haly, karzyna tikin maşynlar, marazilnik garaşaryna, kompýuter kredite, компьютер в рассрочку без банка, телефон в рассрочку без банка, бытовая техника в кредит в ашхабаде, интернет-магазин бытовой техники ашхабад, sagatlar kredite, smartfon garaşaryna, nagt ýa-da garaşaryna tehnika, sok maşyn garaşaryna we kredit Gas-associated Technical sulfur, Lump sulfur, Sulfur technical granulated, Production Turkmenistan, Made in Turkmenistan, Газопопутная Сера техническая, Комовая сера, Сера техническая гранулированная, Производство Туркменистана, Gaz bilen baglanyşykly tehniki kükürt, Bir bölek kükürt, Kükürt tehniki granulirlendi, Türkmenistanda öndürilen',
			url: `${serviceConfig.apiHost}/product/`,
			type: 'product',
			// "img": SapCozgut
			// "favicon": {SapCozgutIcon}
		},

		{
			path: '/wishlist/',
			title: t('title.wishlist'),
			description:
				'Elektronika hojalyk harytlary amatly bahadan we garaşaryna, бытовая техника в кредит по выгодным ценам',
			keywords:
				'Sap Chozgut, Lomay Sowda, Garasharyna, Kredit, Nikai, Garantiya, Kepillik, Credit, Guarantee, Кредит бытовой техники Ашхабад, Кредит телефон Ашхабад, Рассрочка техника, Рассрочка телефон, kredit telefon ashgabat, Рассрочка телефон рядом Ашхабад, turkmenistan telefon bahalary, kredite telefonlar, garaşaryna telefon, garaşaryna telewizor, kredit telewizor, рассрочка телевизор ashgabat, kredit teker ashgabat, kredit akumulator ashgabat, redmi kredit ashgabat, samsung kredit ashgabat, kondisioner kredit ashgabat, elektronika kredit ashgabat, kredit kir masynlar, karzyna hojalyk harytlary, garaşaryna hojalyk harytlar, garaşaryna teker, kredite tehnika, garaşaryna harytlar, marazilnik kredite, haladilnikler kredite, tikin masynlar kredtite, kredit tw, kredite haly, karzyna tikin maşynlar, marazilnik garaşaryna, kompýuter kredite, компьютер в рассрочку без банка, телефон в рассрочку без банка, бытовая техника в кредит в ашхабаде, интернет-магазин бытовой техники ашхабад, sagatlar kredite, smartfon garaşaryna, nagt ýa-da garaşaryna tehnika, sok maşyn garaşaryna we kredit Gas-associated Technical sulfur, Lump sulfur, Sulfur technical granulated, Production Turkmenistan, Made in Turkmenistan, Газопопутная Сера техническая, Комовая сера, Сера техническая гранулированная, Производство Туркменистана, Gaz bilen baglanyşykly tehniki kükürt, Bir bölek kükürt, Kükürt tehniki granulirlendi, Türkmenistanda öndürilen',
			url: `${serviceConfig.apiHost}/wishlist/`,
			type: 'wishlist',
			// "img": SapCozgut
			// "favicon": {SapCozgutIcon}
		},

		{
			path: '/profile-edit/',
			title: t('title.profileEdit'),
			description:
				'Elektronika hojalyk harytlary amatly bahadan we garaşaryna, бытовая техника в кредит по выгодным ценам',
			keywords:
				'Sap Chozgut, Lomay Sowda, Garasharyna, Kredit, Nikai, Garantiya, Kepillik, Credit, Guarantee, Кредит бытовой техники Ашхабад, Кредит телефон Ашхабад, Рассрочка техника, Рассрочка телефон, kredit telefon ashgabat, Рассрочка телефон рядом Ашхабад, turkmenistan telefon bahalary, kredite telefonlar, garaşaryna telefon, garaşaryna telewizor, kredit telewizor, рассрочка телевизор ashgabat, kredit teker ashgabat, kredit akumulator ashgabat, redmi kredit ashgabat, samsung kredit ashgabat, kondisioner kredit ashgabat, elektronika kredit ashgabat, kredit kir masynlar, karzyna hojalyk harytlary, garaşaryna hojalyk harytlar, garaşaryna teker, kredite tehnika, garaşaryna harytlar, marazilnik kredite, haladilnikler kredite, tikin masynlar kredtite, kredit tw, kredite haly, karzyna tikin maşynlar, marazilnik garaşaryna, kompýuter kredite, компьютер в рассрочку без банка, телефон в рассрочку без банка, бытовая техника в кредит в ашхабаде, интернет-магазин бытовой техники ашхабад, sagatlar kredite, smartfon garaşaryna, nagt ýa-da garaşaryna tehnika, sok maşyn garaşaryna we kredit Gas-associated Technical sulfur, Lump sulfur, Sulfur technical granulated, Production Turkmenistan, Made in Turkmenistan, Газопопутная Сера техническая, Комовая сера, Сера техническая гранулированная, Производство Туркменистана, Gaz bilen baglanyşykly tehniki kükürt, Bir bölek kükürt, Kükürt tehniki granulirlendi, Türkmenistanda öndürilen',
			url: `${serviceConfig.apiHost}/profile-edit/`,
			type: 'profile',
			// "img": SapCozgut
			// "favicon": {SapCozgutIcon}
		},

		{
			path: '/orders/',
			title: t('title.orders'),
			description:
				'Elektronika hojalyk harytlary amatly bahadan we garaşaryna, бытовая техника в кредит по выгодным ценам',
			keywords:
				'Sap Chozgut, Lomay Sowda, Garasharyna, Kredit, Nikai, Garantiya, Kepillik, Credit, Guarantee, Кредит бытовой техники Ашхабад, Кредит телефон Ашхабад, Рассрочка техника, Рассрочка телефон, kredit telefon ashgabat, Рассрочка телефон рядом Ашхабад, turkmenistan telefon bahalary, kredite telefonlar, garaşaryna telefon, garaşaryna telewizor, kredit telewizor, рассрочка телевизор ashgabat, kredit teker ashgabat, kredit akumulator ashgabat, redmi kredit ashgabat, samsung kredit ashgabat, kondisioner kredit ashgabat, elektronika kredit ashgabat, kredit kir masynlar, karzyna hojalyk harytlary, garaşaryna hojalyk harytlar, garaşaryna teker, kredite tehnika, garaşaryna harytlar, marazilnik kredite, haladilnikler kredite, tikin masynlar kredtite, kredit tw, kredite haly, karzyna tikin maşynlar, marazilnik garaşaryna, kompýuter kredite, компьютер в рассрочку без банка, телефон в рассрочку без банка, бытовая техника в кредит в ашхабаде, интернет-магазин бытовой техники ашхабад, sagatlar kredite, smartfon garaşaryna, nagt ýa-da garaşaryna tehnika, sok maşyn garaşaryna we kredit Gas-associated Technical sulfur, Lump sulfur, Sulfur technical granulated, Production Turkmenistan, Made in Turkmenistan, Газопопутная Сера техническая, Комовая сера, Сера техническая гранулированная, Производство Туркменистана, Gaz bilen baglanyşykly tehniki kükürt, Bir bölek kükürt, Kükürt tehniki granulirlendi, Türkmenistanda öndürilen',
			url: `${serviceConfig.apiHost}/orders/`,
			type: 'orders',
			// "img": SapCozgut
			// "favicon": {SapCozgutIcon}
		},

		{
			path: '/checkout/',
			title: t('title.checkout'),
			description:
				'Elektronika hojalyk harytlary amatly bahadan we garaşaryna, бытовая техника в кредит по выгодным ценам',
			keywords:
				'Sap Chozgut, Lomay Sowda, Garasharyna, Kredit, Nikai, Garantiya, Kepillik, Credit, Guarantee, Кредит бытовой техники Ашхабад, Кредит телефон Ашхабад, Рассрочка техника, Рассрочка телефон, kredit telefon ashgabat, Рассрочка телефон рядом Ашхабад, turkmenistan telefon bahalary, kredite telefonlar, garaşaryna telefon, garaşaryna telewizor, kredit telewizor, рассрочка телевизор ashgabat, kredit teker ashgabat, kredit akumulator ashgabat, redmi kredit ashgabat, samsung kredit ashgabat, kondisioner kredit ashgabat, elektronika kredit ashgabat, kredit kir masynlar, karzyna hojalyk harytlary, garaşaryna hojalyk harytlar, garaşaryna teker, kredite tehnika, garaşaryna harytlar, marazilnik kredite, haladilnikler kredite, tikin masynlar kredtite, kredit tw, kredite haly, karzyna tikin maşynlar, marazilnik garaşaryna, kompýuter kredite, компьютер в рассрочку без банка, телефон в рассрочку без банка, бытовая техника в кредит в ашхабаде, интернет-магазин бытовой техники ашхабад, sagatlar kredite, smartfon garaşaryna, nagt ýa-da garaşaryna tehnika, sok maşyn garaşaryna we kredit Gas-associated Technical sulfur, Lump sulfur, Sulfur technical granulated, Production Turkmenistan, Made in Turkmenistan, Газопопутная Сера техническая, Комовая сера, Сера техническая гранулированная, Производство Туркменистана, Gaz bilen baglanyşykly tehniki kükürt, Bir bölek kükürt, Kükürt tehniki granulirlendi, Türkmenistanda öndürilen',
			url: `${serviceConfig.apiHost}/checkout/`,
			type: 'checkout',
			// "img": SapCozgut
			// "favicon": {SapCozgutIcon}
		},

		{
			path: '/categories/',
			title: t('title.categories'),
			description:
				'Elektronika hojalyk harytlary amatly bahadan we garaşaryna, бытовая техника в кредит по выгодным ценам',
			keywords:
				'Sap Chozgut, Lomay Sowda, Garasharyna, Kredit, Nikai, Garantiya, Kepillik, Credit, Guarantee, Кредит бытовой техники Ашхабад, Кредит телефон Ашхабад, Рассрочка техника, Рассрочка телефон, kredit telefon ashgabat, Рассрочка телефон рядом Ашхабад, turkmenistan telefon bahalary, kredite telefonlar, garaşaryna telefon, garaşaryna telewizor, kredit telewizor, рассрочка телевизор ashgabat, kredit teker ashgabat, kredit akumulator ashgabat, redmi kredit ashgabat, samsung kredit ashgabat, kondisioner kredit ashgabat, elektronika kredit ashgabat, kredit kir masynlar, karzyna hojalyk harytlary, garaşaryna hojalyk harytlar, garaşaryna teker, kredite tehnika, garaşaryna harytlar, marazilnik kredite, haladilnikler kredite, tikin masynlar kredtite, kredit tw, kredite haly, karzyna tikin maşynlar, marazilnik garaşaryna, kompýuter kredite, компьютер в рассрочку без банка, телефон в рассрочку без банка, бытовая техника в кредит в ашхабаде, интернет-магазин бытовой техники ашхабад, sagatlar kredite, smartfon garaşaryna, nagt ýa-da garaşaryna tehnika, sok maşyn garaşaryna we kredit Gas-associated Technical sulfur, Lump sulfur, Sulfur technical granulated, Production Turkmenistan, Made in Turkmenistan, Газопопутная Сера техническая, Комовая сера, Сера техническая гранулированная, Производство Туркменистана, Gaz bilen baglanyşykly tehniki kükürt, Bir bölek kükürt, Kükürt tehniki granulirlendi, Türkmenistanda öndürilen',
			url: `${serviceConfig.apiHost}/categories/`,
			type: 'categories',
			// "img": SapCozgut
			// "favicon": {SapCozgutIcon}
		},

		{
			path: '/settings/',
			title: t('title.settings'),
			description:
				'Elektronika hojalyk harytlary amatly bahadan we garaşaryna, бытовая техника в кредит по выгодным ценам',
			keywords:
				'Sap Chozgut, Lomay Sowda, Garasharyna, Kredit, Nikai, Garantiya, Kepillik, Credit, Guarantee, Кредит бытовой техники Ашхабад, Кредит телефон Ашхабад, Рассрочка техника, Рассрочка телефон, kredit telefon ashgabat, Рассрочка телефон рядом Ашхабад, turkmenistan telefon bahalary, kredite telefonlar, garaşaryna telefon, garaşaryna telewizor, kredit telewizor, рассрочка телевизор ashgabat, kredit teker ashgabat, kredit akumulator ashgabat, redmi kredit ashgabat, samsung kredit ashgabat, kondisioner kredit ashgabat, elektronika kredit ashgabat, kredit kir masynlar, karzyna hojalyk harytlary, garaşaryna hojalyk harytlar, garaşaryna teker, kredite tehnika, garaşaryna harytlar, marazilnik kredite, haladilnikler kredite, tikin masynlar kredtite, kredit tw, kredite haly, karzyna tikin maşynlar, marazilnik garaşaryna, kompýuter kredite, компьютер в рассрочку без банка, телефон в рассрочку без банка, бытовая техника в кредит в ашхабаде, интернет-магазин бытовой техники ашхабад, sagatlar kredite, smartfon garaşaryna, nagt ýa-da garaşaryna tehnika, sok maşyn garaşaryna we kredit Gas-associated Technical sulfur, Lump sulfur, Sulfur technical granulated, Production Turkmenistan, Made in Turkmenistan, Газопопутная Сера техническая, Комовая сера, Сера техническая гранулированная, Производство Туркменистана, Gaz bilen baglanyşykly tehniki kükürt, Bir bölek kükürt, Kükürt tehniki granulirlendi, Türkmenistanda öndürilen',
			url: `${serviceConfig.apiHost}/settings/`,
			type: 'settings',
			// "img": SapCozgut
			// "favicon": {SapCozgutIcon}
		},

		{
			path: '/brands/',
			title: t('title.brands'),
			description:
				'Elektronika hojalyk harytlary amatly bahadan we garaşaryna, бытовая техника в кредит по выгодным ценам',
			keywords:
				'Sap Chozgut, Lomay Sowda, Garasharyna, Kredit, Nikai, Garantiya, Kepillik, Credit, Guarantee, Кредит бытовой техники Ашхабад, Кредит телефон Ашхабад, Рассрочка техника, Рассрочка телефон, kredit telefon ashgabat, Рассрочка телефон рядом Ашхабад, turkmenistan telefon bahalary, kredite telefonlar, garaşaryna telefon, garaşaryna telewizor, kredit telewizor, рассрочка телевизор ashgabat, kredit teker ashgabat, kredit akumulator ashgabat, redmi kredit ashgabat, samsung kredit ashgabat, kondisioner kredit ashgabat, elektronika kredit ashgabat, kredit kir masynlar, karzyna hojalyk harytlary, garaşaryna hojalyk harytlar, garaşaryna teker, kredite tehnika, garaşaryna harytlar, marazilnik kredite, haladilnikler kredite, tikin masynlar kredtite, kredit tw, kredite haly, karzyna tikin maşynlar, marazilnik garaşaryna, kompýuter kredite, компьютер в рассрочку без банка, телефон в рассрочку без банка, бытовая техника в кредит в ашхабаде, интернет-магазин бытовой техники ашхабад, sagatlar kredite, smartfon garaşaryna, nagt ýa-da garaşaryna tehnika, sok maşyn garaşaryna we kredit Gas-associated Technical sulfur, Lump sulfur, Sulfur technical granulated, Production Turkmenistan, Made in Turkmenistan, Газопопутная Сера техническая, Комовая сера, Сера техническая гранулированная, Производство Туркменистана, Gaz bilen baglanyşykly tehniki kükürt, Bir bölek kükürt, Kükürt tehniki granulirlendi, Türkmenistanda öndürilen',
			url: `${serviceConfig.apiHost}/brands/`,
			type: 'brands',
			// "img": SapCozgut
			// "favicon": {SapCozgutIcon}
		},

		{
			path: '/cart/',
			title: t('title.cart'),
			description:
				'Elektronika hojalyk harytlary amatly bahadan we garaşaryna, бытовая техника в кредит по выгодным ценам',
			keywords:
				'Sap Chozgut, Lomay Sowda, Garasharyna, Kredit, Nikai, Garantiya, Kepillik, Credit, Guarantee, Кредит бытовой техники Ашхабад, Кредит телефон Ашхабад, Рассрочка техника, Рассрочка телефон, kredit telefon ashgabat, Рассрочка телефон рядом Ашхабад, turkmenistan telefon bahalary, kredite telefonlar, garaşaryna telefon, garaşaryna telewizor, kredit telewizor, рассрочка телевизор ashgabat, kredit teker ashgabat, kredit akumulator ashgabat, redmi kredit ashgabat, samsung kredit ashgabat, kondisioner kredit ashgabat, elektronika kredit ashgabat, kredit kir masynlar, karzyna hojalyk harytlary, garaşaryna hojalyk harytlar, garaşaryna teker, kredite tehnika, garaşaryna harytlar, marazilnik kredite, haladilnikler kredite, tikin masynlar kredtite, kredit tw, kredite haly, karzyna tikin maşynlar, marazilnik garaşaryna, kompýuter kredite, компьютер в рассрочку без банка, телефон в рассрочку без банка, бытовая техника в кредит в ашхабаде, интернет-магазин бытовой техники ашхабад, sagatlar kredite, smartfon garaşaryna, nagt ýa-da garaşaryna tehnika, sok maşyn garaşaryna we kredit Gas-associated Technical sulfur, Lump sulfur, Sulfur technical granulated, Production Turkmenistan, Made in Turkmenistan, Газопопутная Сера техническая, Комовая сера, Сера техническая гранулированная, Производство Туркменистана, Gaz bilen baglanyşykly tehniki kükürt, Bir bölek kükürt, Kükürt tehniki granulirlendi, Türkmenistanda öndürilen',
			url: `${serviceConfig.apiHost}/cart/`,
			type: 'cart',
			// "img": SapCozgut
			// "favicon": {SapCozgutIcon}
		},

		{
			path: '/payment_and_delivery_info/',
			title: t('title.payment_and_delivery_info'),
			description:
				'Elektronika hojalyk harytlary amatly bahadan we garaşaryna, бытовая техника в кредит по выгодным ценам',
			keywords:
				'Sap Chozgut, Lomay Sowda, Garasharyna, Kredit, Nikai, Garantiya, Kepillik, Credit, Guarantee, Кредит бытовой техники Ашхабад, Кредит телефон Ашхабад, Рассрочка техника, Рассрочка телефон, kredit telefon ashgabat, Рассрочка телефон рядом Ашхабад, turkmenistan telefon bahalary, kredite telefonlar, garaşaryna telefon, garaşaryna telewizor, kredit telewizor, рассрочка телевизор ashgabat, kredit teker ashgabat, kredit akumulator ashgabat, redmi kredit ashgabat, samsung kredit ashgabat, kondisioner kredit ashgabat, elektronika kredit ashgabat, kredit kir masynlar, karzyna hojalyk harytlary, garaşaryna hojalyk harytlar, garaşaryna teker, kredite tehnika, garaşaryna harytlar, marazilnik kredite, haladilnikler kredite, tikin masynlar kredtite, kredit tw, kredite haly, karzyna tikin maşynlar, marazilnik garaşaryna, kompýuter kredite, компьютер в рассрочку без банка, телефон в рассрочку без банка, бытовая техника в кредит в ашхабаде, интернет-магазин бытовой техники ашхабад, sagatlar kredite, smartfon garaşaryna, nagt ýa-da garaşaryna tehnika, sok maşyn garaşaryna we kredit Gas-associated Technical sulfur, Lump sulfur, Sulfur technical granulated, Production Turkmenistan, Made in Turkmenistan, Газопопутная Сера техническая, Комовая сера, Сера техническая гранулированная, Производство Туркменистана, Gaz bilen baglanyşykly tehniki kükürt, Bir bölek kükürt, Kükürt tehniki granulirlendi, Türkmenistanda öndürilen',
			url: `${serviceConfig.apiHost}/payment_and_delivery_info/`,
			type: 'website',
			// "img": SapCozgut
			// "favicon": {SapCozgutIcon}
		},
	]
}

export default getTitle
