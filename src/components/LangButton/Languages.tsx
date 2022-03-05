import Turkmen from './flags/tm.svg';
import English from './flags/us.svg';
import Russian from './flags/ru.svg';

const Languages = [
  {
    icon: <Turkmen />,
    name: 'Türkmen',
    label: 'TKM',
    url: '/tk',
    style: 'tk',
    switchLang: 'tk',
  },

  {
    icon: <English />,
    name: 'English',
    label: 'ENG',
    url: '/en',
    style: 'en',
    switchLang: 'en',
  },

  {
    icon: <Russian />,
    name: 'Русский',
    label: 'RUS',
    url: '/ru',
    style: 'ru',
    switchLang: 'ru',
  },
];

export default Languages;
