import React from 'react';
import { useRouter } from 'next/router'
import ButtonToGo from "../components/ButtonGoTo";
import ButtonSend from "../components/ButtonSend";
import Nav from '../components/Nav';



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
    nameButton='REGISTRARME'
    OnClick={sayHi}
    />         

    </div>
  )
}
