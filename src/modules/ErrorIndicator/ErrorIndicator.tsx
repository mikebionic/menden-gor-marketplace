import React from 'react'

import {ReactComponent as  ErrorImage} from './alert-octagon.svg'

const ErrorIndicator: React.FC = () => {
  return (
    <div className="ErrorIndicator w-full flex flex-col items-center m-auto text-purple-900">
      <ErrorImage className="mt-4 mb-2" />
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