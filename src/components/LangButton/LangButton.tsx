/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React , { useState } from 'react'
import { withRouter } from 'react-router'
import { useTranslation } from 'react-i18next'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

import Languages from './Languages'
import './LangButton.scss'

const LangButton = ({onDropdownStateChange, dropdownState, data}: any) => {
  const {i18n} = useTranslation()

  const [currentLanguage, setLanguage] = useState(filterLang(i18n.language, Languages))

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
    <nav>
      <ClickAwayListener onClickAway={ () => {
        if (dropdownState === true){
          onDropdownStateChange(false)}}} >
        <div className="lang-menu">
          {/* <div className={`selected-lang ${currentLanguage.style}`}
            onClick={()=> {
              onDropdownStateChange(!dropdownState)
            }}>
            {currentLanguage.name}
          </div> */}
          {/* <ul style={styles}>
            
            {filtered_data}

          </ul> */}
        </div>
      </ClickAwayListener>
    </nav>
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