import React from 'react'

const Alert = ({msg}) => {
  return (
    <div>
      <div class="alert alert-danger" role="alert">
  {msg}
</div>
    </div>
  )
}

export default Alert
