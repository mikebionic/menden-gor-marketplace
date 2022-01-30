/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React , { useState } from 'react'
import { withRouter } from 'react-router'
import { useTranslation } from 'react-i18next'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'


import { MdLanguage } from 'react-icons/md';
import { IconLabelButton } from 'common/IconLabelButton';

import Languages from './Languages'

const LangButton = ({onDropdownStateChange, dropdownState, data}: any) => {
  const {i18n} = useTranslation()

  const [currentLanguage, setLanguage]:any = useState(filterLang(i18n.language, Languages))

  const handleClick = (lang:any) => {
    i18n.changeLanguage(lang)
  }
  
  const styles = dropdownState ? {display: 'block'} : null

  const LanguageItem = ({data}:any) => {
    return (
      <li>
        <a className={`${data.style}`} 
        onClick={() => {
          setLanguage(data)
          onDropdownStateChange(false)
          handleClick(`${data.switchLang}`)}}>{data.name}</a>
      </li>
    )
  }

    const filtered_data = Languages.map((data:any) => {
      if (data !== currentLanguage){
        return <LanguageItem icon={data.icon} key={data.name} data={data} />
      }
    })

  return (
    <ClickAwayListener onClickAway={ () => {
      if (dropdownState === true){
        onDropdownStateChange(false)}}} >
      <div className="flex flex-row-reverse mr-1">
        <IconLabelButton
          className="items-center grid-rows-1 px-0 my-3 text-lg font-medium text-white border-l border-white border-solid h-1/3"
          icon={
            <MdLanguage className="w-6 h-6 mx-3 text-2xl text-white" />
          }
          onClick={()=> {
            onDropdownStateChange(!dropdownState)
          }}
        />
        <span className="absolute font-semibold text-white text-10 ">
          {currentLanguage.label}
        </span>

        <ul>
          {filtered_data}
        </ul>
      </div>
    </ClickAwayListener>
    
  )
}

export default withRouter(LangButton)


const filterLang = (current: any, language_list: any) => {
  var current_language = null;
  language_list.map((language: any) => {
    if (language['switchLang'] === current){
      current_language = language;
    }
  })
  return current_language;
}