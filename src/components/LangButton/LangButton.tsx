/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import { MdLanguage } from 'react-icons/md';
import { IconLabelButton } from 'common/IconLabelButton';

import Languages from './Languages';
import { Transition } from '@headlessui/react';
import { otherService } from 'sapredux/services';

const LangButton = ({ onDropdownStateChange, dropdownState, data }: any) => {
  const { i18n } = useTranslation();

  const [currentLanguage, setLanguage]: any = useState(
    filterLang(i18n.language, Languages),
  );

  const handleClick = (lang: any) => {
    i18n.changeLanguage(lang);
    otherService.setLanguage(lang);
  };

  const LanguageItem = ({ icon, data }: any) => {
    return (
      <div
        className={`w-full relative p-2 hover:text-socialBarItemHover dark:hover:text-darkFirstColor flex cursor-pointer place-items-center hover:bg-gray-100 dark:hover:bg-darkComponentColor text-black dark:text-darkTextWhiteColor`}
        onClick={() => {
          setLanguage(data);
          onDropdownStateChange(false);
          handleClick(`${data.switchLang}`);
        }}
      >
        <img src={icon} alt={data.name} className="h-5 mr-2 w-7" />
        {data.name}
      </div>
    );
  };

  const filtered_data = Languages.map((data: any) => {
    if (data !== currentLanguage) {
      return <LanguageItem icon={data.icon} key={data.name} data={data} />;
    }
  });

  return (
    <ClickAwayListener
      onClickAway={() => {
        if (dropdownState === true) {
          onDropdownStateChange(false);
        }
      }}
    >
      <div className="relative grid grid-cols-[3.5rem]">
        <IconLabelButton
          className="items-center h-auto grid-rows-1 px-0 my-3 text-lg font-medium text-white border-l border-white border-solid dark:border-darkFirstColor dark:text-darkTextWhiteColor"
          icon={
            <MdLanguage className="w-6 h-6 mx-3 text-2xl text-white dark:text-darkTextWhiteColor" />
          }
          onClick={() => {
            onDropdownStateChange(!dropdownState);
          }}
        />
        <span className="absolute top-0 right-0 font-semibold text-white dark:text-darkTextWhiteColor text-[10px]">
          {currentLanguage.label}
        </span>
        <Transition
          show={dropdownState}
          enter="transition ease-out duration-300"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-300"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <div className="grid w-32 h-auto mt-1 overflow-x-hidden overflow-y-auto text-base font-medium rounded-md shadow-lg left-12 bg-fullwhite dark:bg-darkComponentColor">
            {dropdownState ? filtered_data : null}
          </div>
        </Transition>
        {/* On Click show */}
        {/* <ul>{filtered_data}</ul> */}
      </div>
    </ClickAwayListener>
  );
};

export default LangButton;

const filterLang = (current: any, language_list: any) => {
  var current_language = null;
  language_list.map((language: any) => {
    if (language['switchLang'] === current) {
      current_language = language;
    }
  });
  return current_language;
};
