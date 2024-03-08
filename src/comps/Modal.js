import React from 'react'

export const  Modal = ({selectImg}) => {
  return (
    <div className='backdrop'>
        <img src={selectImg} alt='en'/>
    </div>
  )
}
