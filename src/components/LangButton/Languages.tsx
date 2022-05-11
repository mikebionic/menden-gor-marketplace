import turkmen_icon from './flags/tm.svg'
import english_icon from './flags/us.svg'
import russian_icon from './flags/ru.svg'

const Languages = [
	{
		icon: turkmen_icon,
		name: 'Türkmen',
		label: 'TKM',
		url: '/tk',
		style: 'tk',
		switchLang: 'tk',
	},

	{
		icon: english_icon,
		name: 'English',
		label: 'ENG',
		url: '/en',
		style: 'en',
		switchLang: 'en',
	},

	{
		icon: russian_icon,
		name: 'Русский',
		label: 'RUS',
		url: '/ru',
		style: 'ru',
		switchLang: 'ru',
	},
]

export default Languages
