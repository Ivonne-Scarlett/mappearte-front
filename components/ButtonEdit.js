import React from 'react'
import ButtonToGo from './ButtonToGo'

export default function ButtonEdit({route}) {
  return (
    <>
      <ButtonToGo
      color='White'
      route= {route}
      >
        <img 
        src='/icons/editPencil.png' 
        alt='Icono de editar foto' 
        className='w-auto mx-auto my-auto' 
        />
      </ButtonToGo>
    </>
  )
}
