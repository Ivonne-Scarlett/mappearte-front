import React from 'react';
import Input from '../Input';
import { useForm } from "react-hook-form";
import {login} from '../../lib/api';
import ButtonSend from '../ButtonSend';

export default function LoginForm() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async(dataLogin) => {
   const token =  await login(dataLogin)
   if(token) {
    const payload = JSON.parse(atob(token.split('.')[1]))
    localStorage.setItem('role',payload.role)
    localStorage.setItem('id',payload.id)
    console.log('payload', payload)
    //redirigir a home
   }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input 
        label='Correo'
        placeholder='Correo de usuario'
        name='email'
        register= {register("email")} 
        required
      />
       <Input 
        label='Contraseña'
        type='password'
        placeholder='Contraseña'
        name='password'
        register= {register("password")} 
        required
      />
      <ButtonSend 
        className='mt-10'
        type='submit' 
        text='Ingresar'
        bgColor='Orange'
        borderColor='Orange'
      />
    </form>
  )
}
