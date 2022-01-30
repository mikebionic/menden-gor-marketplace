// favicons
// import {SapCozgutIcon} from './icon/SapCozgut.ico'
// import {SapHasapIcon} from './icon/SapHasap.ico'
// import {SapSargytIcon} from './icon/Sapsargyt.ico'
// import {LsIcon} from './icon/LS.ico'
// import {HilliIcon} from './icon/Hilli.ico'

// // images
// import SapCozgut from './images/og_sapcozgut.png'
// import AkHasap from './images/og_akhasap.png'
// import Service from './images/og_service.png'
// import Contact from './images/og_contact.png'
// import SapSargyt from './images/og_sapsargyt.png'
// import SapHasap from './images/og_saphasap.png'
// import LS from './images/og_ls.png'
// import Hilli from './images/og_hilli.png'


const getTitle = (t:any) => {
  
  return [
    {
      "path": "/",
      "title": "Sap Hasap | Sap Çözgüt",
      "description": "Söwda awtomatlaşdyrma, Ynamdar hyzmat, Döwrebap internet sahypalary, Mobile programma üpjünçiligi",
      "keywords": "Sap Chozgut, Sap Hasap, Akhasap, Sap Sargyt, Hilli, Ls, Service",
      "url": "https://saphasap.com",
      "type": "website",
      // "img": SapCozgut
      // "favicon": {SapCozgutIcon}
    },
    {
      "path": "/sapcozgut",
      "title": t('title.sapchozgut'),
      "description": "Söwda awtomatlaşdyrma, Ynamdar hyzmat, Döwrebap internet sahypalary, Mobile programma üpjünçiligi",
      "keywords": "Sap Chozgut, Sap Hasap, Akhasap, Sap Sargyt, Hilli, Ls, Service",
      "url": "https://saphasap.com/sapchozgut",
      "type": "organisation",
      // "img": SapCozgut
      // "favicon": {SapCozgutIcon}
    },

    {
      "path": "/contact",
      "title": t('title.contact_us'),
      "description": "Biz bilen habarlaşmak üçin...",
      "keywords": "Sap Chozgut, Sap Hasap, Akhasap, Sap Sargyt, Hilli, Ls, Service",
      "url": "https://saphasap.com/contact",
      "type": "contact",
      // "img": Contact
      // "favicon": {SapCozgutIcon}
    },

    {
      "path": "/akhasap",
      "title": t('title.akhasap'),
      "description": "Akhasap, Akhasap gurnamak, Akhasap hyzmatlaryna ýardam bermek ",
      "keywords": "Sap Chozgut, Sap Hasap, Akhasap, Sap Sargyt, Hilli, Ls, Service",
      "url": "https://saphasap.com/akhasap",
      "type": "desktop program",
      // "img": AkHasap
      // "favicon": ""
    },

    {
      "path": "/saphasap",
      "title": t('title.saphasap'),
      "description": "",
      "keywords": "Sap Chozgut, Sap Hasap, Akhasap, Sap Sargyt, Hilli, Ls, Service",
      "url": "https://saphasap.com/saphasap",
      "type": "desktop program",
      // "img": SapHasap
      // "favicon": {SapHasapIcon}
    },

    {
      "path": "/sapsargyt",
      "title": t('title.sapsargyt'),
      "description": "Söwda agentligi üçin programma üpjünçiligi. Söwda aluw-satuw hyzmatlaryny awtomatlaşdyrma",
      "keywords": "Sap Chozgut, Sap Hasap, Akhasap, Sap Sargyt, Hilli, Ls, Service",
      "url": "https://saphasap.com/sapsargyt",
      "type": "mobile application",
      // "img": SapSargyt
      // "favicon": {SapSargytIcon}
    },

    {
      "path": "/hilli",
      "title": t('title.hilli'),
      "description": "Ýokary hilli kompýuter hyzmatlary, kompýuterleri şeýle hem kompýutere degişli gurallar bilen üpjün edilen",
      "keywords": "Sap Chozgut, Sap Hasap, Akhasap, Sap Sargyt, Hilli, Ls, Service",
      "url": "https://saphasap.com/hilli",
      "type": "website",
      // "img": Hilli
      // "favicon": {HilliIcon}
    },

    {
      "path": "/lomaysowda",
      "title": t('title.ls'),
      "description": "Lomaý söwdalar amatly bahadan amala aşyrylýar",
      "keywords": "Sap Chozgut, Sap Hasap, Akhasap, Sap Sargyt, Hilli, Ls, Service",
      "url": "https://saphasap.com/ls",
      "type": "website",
      // "img": LS
      // "favicon": {LsIcon}
    },

    {
      "path": "/service",
      "title": t('title.service'),
      "description": "Ýokary hilli service hyzmatlaryny Sap Çözgüt kompaniýasy size üpjün eder.",
      "keywords": "Sap Chozgut, Sap Hasap, Akhasap, Sap Sargyt, Hilli, Ls, Service",
      "url": "https://saphasap.com/service",
      "type": "service",
      // "img": Service,
      // "favicon": {SapCozgutIcon}
    }
  ]
}

export default getTitle