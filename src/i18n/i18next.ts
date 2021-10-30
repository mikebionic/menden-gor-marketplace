import i18n from "i18next"
import Backend from 'i18next-http-backend';
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

import { languages, defaultLanguage } from './i18.constants'

const language_codes = languages.map(item => { return item.iso })

i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: defaultLanguage,
		debug: true,
    whitelist: language_codes,

		interpolation: {
			escapeValue: false,
		},
	})


export default i18n