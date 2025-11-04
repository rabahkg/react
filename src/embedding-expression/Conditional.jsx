import React from 'react'

const Conditional = () => {
 const isLogginin = true;

  return (
    <div>
        <p>{isLoggIn ? 'Welcome back' : 'login please' }</p>
    </div>
  )
}
export default Conditional
