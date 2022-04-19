import React, {useState} from 'react';
import { useRouter } from 'next/router';
import { useForm } from "react-hook-form";
import {registerArtist} from '../../lib/api';

import Input from '../Input';
import ButtonSend from '../ButtonSend';
import Category from '../Category';

export default function RegisterArtistForm() {
  const router = useRouter();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async(dataRegister) => {
    console.log(dataRegister)
    // const artist = await registerArtist(dataRegister)
    // console.log('artist:',artist)
    // if (artist.ok) {
    //   router.push('/Login')
    // }
   }

   const validateEmail = () => {

   }

   if(dataRegister.email1 = dataRegister.email1){
    <Input 
    label='Correo electrónico:'
    placeholder='ejemplo: demo@gmail.com'
    name='email2'
    register= {register("email")} 
    required
    id='email2'
    />
  } else {
    alert("El correo electrónico debe ser el mismo ingresado en ambos campos de correo electrónico")
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input 
        label='Nombre artístico:'
        placeholder='ejemplo: MexiArt'
        name='artist'
        register= {register("artist")} 
        required
      />
      <label className='pb-4'>
        Categoria:
      </label>
      <div className="flex flex-row">
        <Category 
          className='rounded-l-lg'
          name='Sticker'
          value='isSticker'
          register= {register("isSticker")} 
      
        />
        <Category 
          className=''
          name='Mural'
          value='isMural'
          register= {register("isMural")} 
       
        />
        <Category 
          className='rounded-r-md'
          name='Grafitti'
          value='isGraffiti'
          register= {register("isGraffiti")} 
      
        />
      </div>
      <Input 
        label='Nombre:'
        placeholder='ejemplo: Ana Bertha'
        name='name'
        register= {register("name")} 
        required
      />
      <Input 
        label='Apellido:'
        placeholder='ejemplo: Velazco'
        name='lastName'
        register= {register("lastName")} 
        required
      />
      
      <Input 
        label='Correo electrónico:'
        placeholder='ejemplo: demo@gmail.com'
        name='email1'
        register= {register("email")} 
        required
        id='email1'
      /> 
      <Input 
        label='Correo electrónico:'
        placeholder='ejemplo: demo@gmail.com'
        name='email2'
        register= {register("email")} 
        required
        id='email2'
      />

      {/* if({dataRegister.email1} = {dataRegister.email1}){
        <Input 
        label='Correo electrónico:'
        placeholder='ejemplo: demo@gmail.com'
        name='email2'
        register= {register("email")} 
        required
        id='email2'
        />
      } else {
        alert("El correo electrónico debe ser el mismo ingresado en ambos campos de correo electrónico")
      } */}


       <Input 
        label='Contraseña:'
        type='password'
        placeholder='Contraseña'
        name='password1'
        register= {register("password")} 
        required
        id='password1'
      />
      <Input 
        label='Contraseña:'
        type='password2'
        placeholder='Contraseña'
        name='password'
        register= {register("password")} 
        required
        id='password2'
      />
{/* 
      if({dataRegister.password1} = {dataRegister.password2}){
        <Input 
        label='Contraseña:'
        type='password2'
        placeholder='Contraseña'
        name='password'
        register= {register("password")} 
        required
        id='password2'
      />
      } else {
        alert("La contraseña debe ser la misma ingresada en ambos campos de contraseña")
      } */}
     
      <ButtonSend 
        type='submit' 
        text='Registrar'
        bgColor='Orange'
        borderColor='Orange'
      />
    </form>
  )
}
