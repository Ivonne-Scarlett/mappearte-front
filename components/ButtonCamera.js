import React from 'react'
import ButtonToGo from './ButtonGoTo'

export default function ButtonCamera({route}) {
  return (
    <>
      <ButtonToGo
      color='White'
      route= {route}
      >
        <img 
        src='/icons/editCameraSm.png' 
        alt='Icono de editar' 
        className='w-auto mx-auto my-auto' 
        />
      </ButtonToGo>
    </>
  )
}
