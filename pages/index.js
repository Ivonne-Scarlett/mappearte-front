import React from 'react';
import ButtonToGo from '../components/ButtonGoTo';
import ButtonSend from '../components/ButtonSend';

export default function Home() {
  const sayHi = () => {
    console.log('Hola')
  }
  return (
    <div>
      <ButtonToGo 
      color='Aqua'
      nameButton='SUBIR FOTO'
      route="/"
      />
      <ButtonSend 
      color='Pink'
      nameButton='registrarme'
      OnClick={sayHi}
      />         
    </div>
  )
}
