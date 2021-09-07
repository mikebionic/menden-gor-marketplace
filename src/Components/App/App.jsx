import React from 'react'
import { useTranslation } from 'react-i18next'

import Shimmer from '../Loaders/Shimmer/Shimmer.jsx'
import Spinner from '../Loaders/Spinner/Spinner.jsx'

const App = () => {
  const {t} = useTranslation()

  return (
    <div className="container mx-auto mt-3 font-thin">
      <h1 className="text-5xl text-red-900">{t('test.mendengor')}</h1>
      <Spinner />
      <Shimmer />
    </div>
  )
}

export default App
