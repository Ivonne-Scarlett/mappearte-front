import React from 'react';
import Input from '../Input';
import { useForm } from "react-hook-form";
import {login} from '../../lib/api';
import ButtonSend from '../ButtonSend';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function LoginForm() {
  const messageFail = () => {
    toast.warn('Datos incorrectos.', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });  
  }

  const messageOk = () => {
    toast.success('Datos correctos, ¡Bienvenido!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  const router = useRouter();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async(dataLogin) => {
    const token =  await login(dataLogin)
    if(token) {
        const payload = JSON.parse(atob(token.split('.')[1]))
        localStorage.setItem('role',payload.role)
        localStorage.setItem('id',payload.id)
        localStorage.setItem('token',token)
        messageOk()      
        setTimeout(function(){
          router.push('/')
        }, 3500);
    }else{
        messageFail()
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
      <ToastContainer />
    </form>
  )
}
