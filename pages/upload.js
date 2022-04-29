import { React, useState, useEffect } from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Uppy from "@uppy/core";
import Transloadit from "@uppy/transloadit";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getUserById } from "../lib/api";
import { getArtistById } from "../lib/api";

import {
  Nav,
  Input,
  InputFile,
  OpacityCard,
  ButtonSend,
  Category
} from '../components'

export default function Upload() {
  const [role, setRole] = useState()
  const [artist, setArtist] = useState();
  const [user, setUser] = useState();
  const router = useRouter();
  const [uppy, setUppy] = useState();
  const [isUploadingFile, setIsUploadingFile] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [save, setSave] = useState()
  
  const onCompleteUploadFiles = (assembly) => {
    const image = assembly.results?.compress_image[0].ssl_url;
    setImageUrl(image);
    setIsUploadingFile(false);
  };
  
  const onFileInputChange = (event) => {
    setIsUploadingFile(true);
    const file = Array.from(event.target.files)[0] || null;
    if (file) {
      uppy.reset();
      uppy.addFile({
        name: file.name,
        type: file.type,
        data: file,
      });
      uppy.upload();
    }
  };

  const messageOk = () => {
    toast.success('Registro exitoso.', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  
  const messageFail = () => {
    toast.warn('Datos registrados previamente', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });  
  }

  const onSubmit = async(dataRegister) => {
    const user = await registerUser(dataRegister)
    if (save.ok) {
      messageOk()      
      setTimeout(function(){
        router.push('/Login')
      }, 3500);
    } else {
      messageFail()
    }
   }

  useEffect(() => {
    const uppyInstance = new Uppy({
      restrictions: {
        maxNumberOfFiles: 1,
      },
    })
    .use(Transloadit, {
      params: {
        auth: { key: process.env.NEXT_PUBLIC_TRANSLOADIT_AUTH_KEY },
        template_id: process.env.NEXT_PUBLIC_TRANSLOADIT_TEMPLATE_ID,
      },
      waitForEncoding: true,
    })
    setUppy(uppyInstance);
  }, []);
  
  console.log(imageUrl)
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
        }, {})
      } else if (role === "user"){
        getUserById(id).then( ({users})  =>{
        setUser(users);
        }, {})
      }
    }, [router]
  )

  return (
    <>
      <Nav/>
      <div className={classNames(
      'bg-artist bg-no-repeat bg-cover',
      'w-full min-h-screen md:max-h-full',
      'flex justify-center'
    )}>
        <OpacityCard className={classNames(
          "w-5/6 md:w-4/5 items-center my-8 ",
          "grid gird-cols-1 md:grid-cols-2 gap-4", 
          "mt-20 mb-20 md:mt-32 md:mb-10"
        )}>
          <div className="md:col-span-2 md:row-span-1 justify-center">
            <Image 
              src="../icons/sube-tu-arte.png" 
              alt="Sube tu arte" 
              className="mx-auto" 
            />
          </div>
          <div 
          className='md:col-span-1'
          >
            <Input 
            label='Nombre del artísta:'
            placeholder='ejemplo: MexiArt'
            name='artist'
            />

            <label>
              Categoria:
            </label>
            <div 
            className="flex flex-row mt-1 w-full my-2">
              <Category 
                className='rounded-l-lg my-4'
                name='Sticker'
                value='isSticker'
              />
              <Category 
                name='Mural'
                value='isMural'
              />
              <Category 
                className='rounded-r-md  my-4'
                name='Grafitti'
                value='isGraffiti'             
              />
            </div>
            <InputFile
            id='file'
            name='file'
            type='file'
            accept='image/png, image/jpeg'
            onChange={onFileInputChange}
            />
            <Input 
            label='Dirección:'
            placeholder='ejemplo: Calle A #1, Del. B'
            name='address'
            className='my-4'
            />
          </div>
          <div 
          className='md:col-span-1 align-center '>
            <div className='bg-white w-100 text-black h-72'>
              Mapa
            </div>
          </div>
          <div 
          className="flex justify-center items-center md:col-span-2 md:row-span-1">
            <ButtonSend 
              className='mt-4 w-2/3 md:w-1/3' 
              type='submit' 
              text='Guardar'
              bgColor='Orange'
              borderColor='Orange'
            />
          </div>
        </OpacityCard>
      </div>
    </>
  )
}