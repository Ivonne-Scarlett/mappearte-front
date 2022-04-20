import React from 'react';
import Input from '../Input';
import { useForm } from "react-hook-form";
import {login} from '../../lib/api';
import ButtonSend from '../ButtonSend';
import { useRouter } from 'next/router';


export default function LoginForm() {
  const router = useRouter();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async(dataLogin) => {
   const token =  await login(dataLogin)
   if(token) {
      const payload = JSON.parse(atob(token.split('.')[1]))
      localStorage.setItem('role',payload.role)
      localStorage.setItem('id',payload.id)
      console.log('payload', payload)
      router.push('/')
   }else{
      alert('Datos invalidos, para acceder ingresa tus datos correctamente')
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
        className='md:mb-4'
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
