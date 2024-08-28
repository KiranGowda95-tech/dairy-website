import React from 'react'

const Notifications = ({message,type}) => {
    if (!message) return null
  return (
    <div>
      {message}
    </div>
  )
}

export default Notifications
