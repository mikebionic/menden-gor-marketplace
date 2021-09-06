import React from 'react'

import './ErrorIndicator.css'
import {ReactComponent as  ErrorImage} from './alert-octagon.svg'

const ErrorIndicator = () => {
  return (
    <div className="ErrorIndicator">
      <ErrorImage />
      <span>
        Something went wrong!
      </span>
      <span>
        Try reloading the page or contact the support
      </span>
    </div>
  )
}

export default ErrorIndicator