import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";

import { getUserById, getArtistById, patchUser } from "../../lib/api";

import {
  Nav, 
  DarkBlueCard,
  Category, 
  ButtonSend,
  Footer
} from "../index"; 

export default function ArtistEdit () {
  const messageFail = () => {
    toast.warn("Error al guardar la información", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />;
  };
  const messageOk = () => {
    toast.success("Edición exitosa.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />;
  };

  const [role, setRole] = useState()
  const [artist, setArtist] = useState();
  const [userID, setUserID] = useState();
  const [isArtist, setIsArtist] = useState(false);
  const [user, setUser] = useState();
  const router = useRouter();
  const { register, handleSubmit, errors, setValue, watch } = useForm();
  
  useEffect( () => {
    const id = localStorage.getItem("id");
    const role = localStorage.getItem("role");
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/Login")
    } 
      setRole(role);
      if (role === 'artist') {
        getArtistById(id).then( ({artists}) => {
          setArtist(artists);
          setIsArtist(true);
        }, {})
      } else if (role === "user"){
        getUserById(id).then( ({users})  =>{
          setUser(users);
          setUserID(users._id);
          setValue("isSticker", users.isSticker);
          setValue("isMural", users.isMural);
          setValue("isGraffiti", users.isGraffiti);
        }, {})
      }
    }, [] 
  );

  const onSubmit = async (dataRegister) => {
    const user = await patchUser(userID, dataRegister)
    if (user.ok) {
      messageOk()   
      router.push("/profile")       
    } else {
      messageFail()
    }
  };

  const defaultImage = "/icons/noavatar.png";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-between"
    >
      <Nav/>
      <div
      className={classNames(
        "bg-artist bg-cover bg-center bg-no-repeat",
        "flex justify-center items-center",
        "h-96",
        "w-full",
        "px-6 md:px-20",
        "mt-24"
      )}
    >
    </div>
      <DarkBlueCard>
      <div className="flex justify-center mt-2 mb-8">
        <h3 className="font-bold text-xl text-gray-400 mt-2 font-Mali">
          { user?.user || "userName" }
        </h3>
      </div>
        <div className="flex justify-center mt-3">
          <img
            src={ user?.imgUser || defaultImage}
            alt="Icono de perfil de usuario"
            className={classNames(
              "bg-backgroundP object-cover", 
              "rounded-full border-2 border-solid border-orangeP",
              "w-24 h-24 justify-center",
              "md:w-32 md:h-32 mb-8",
              "lg:w-40 lg:h-40",
              "2xl:w-60 2xl:h-60"
            )}
          />
        </div>
        <div className="flex flex-row mx-auto mt-1 md:w-2/3">
          <Category
            className="rounded-l-lg"
            name="Sticker"
            value={watch("isSticker")}
            register={register("isSticker")}
          />
          <Category
            name="Mural"
            value={watch("isMural")}
            register={register("isMural")}
          />
          <Category
            className="rounded-r-md"
            name="Grafitti"
            value={watch("isGraffiti")}
            register={register("isGraffiti")}
          />
        </div>
        <div className='flex ' >
          <ButtonSend
          className='mx-auto mt-12 md:w-1/3' 
          type='submit' 
          text='Registrar'
          bgColor='Orange'
          borderColor='Orange'
          />
        </div>
        
      </DarkBlueCard>
      <Footer/>
    </form>
  )
}