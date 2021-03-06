import { React, useState, useEffect } from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Uppy from "@uppy/core";
import Transloadit from "@uppy/transloadit";

import { getUserById, getArtistById, registerPhoto } from "../lib/api";

import {
  Nav,
  Input,
  InputFile,
  OpacityCard,
  ButtonSend,
  Category,
  MapUpload
} from '../components'

export default function Upload() {
  const messageFail = () => {
    toast.warn('Revisa la información', {
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
  toast.success('Tu foto se ha guardado.', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
  }

  const [role, setRole] = useState()
  const [artist, setArtist] = useState();
  const [user, setUser] = useState();
  const router = useRouter();
  const [uppy, setUppy] = useState();
  const [isUploadingFile, setIsUploadingFile] = useState(false);
  const [imageUrl, setImageUrl] = useState();
 
  
  const onCompleteUploadFiles = (assembly) => {
    const imageURL = assembly.results.compress_image[0].ssl_url
    setImageUrl(imageURL);
    setIsUploadingFile(false)
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
      uppy.upload().then(result => {        
        //const imageArtist = result.successful[0].uploadURL        
      });
    }
  };

  const onSubmit = async(dataRegister) => {
    const artistId = window.localStorage.getItem('id')
    let type = 'mural'
    const {isMural,isSticker,isGraffiti,address,lat,lng} = dataRegister
    if(isSticker){
      type = 'sticker'
    }else if(isGraffiti){
      type = 'isGraffiti'
    }

    let datArtistRegister = {
      type,
      artistId:[artistId],
      muralImg:imageUrl,
      address,
      lat, 
      lng
      }

  
    const uploadPhoto = await registerPhoto(datArtistRegister);    
    if (uploadPhoto.ok) {
      messageOk()      
      setTimeout(function(){
        router.push('/')
      }, 3500);
    } else {
      messageFail()
    }
   }


  const setLatLng = (lat, lng) => {
   setValue('lat', lat)
   setValue('lng', lng)
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
    .on("transloadit:complete", onCompleteUploadFiles);
    setUppy(uppyInstance);
  }, []);
 
  const { register, handleSubmit, errors, watch, setValue } = useForm({defaultValues:{
    isGraffiti:false,
    isSticker:false,
    isMural:false
  }});

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
    <form onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col justify-between'
    >  
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
            <img
              src="../icons/sube-tu-arte.png" 
              alt="Sube tu arte" 
              className="mx-auto" 
            />
          </div>
          <div 
          className='md:col-span-1'
          >
            <InputFile
            id='file'
            name='file'
            type='file'
            accept='image/png, image/jpeg'
            onChange={onFileInputChange}
            />
            <Input 
            label='Nombre del artísta:'
            placeholder='ejemplo: MexiArt'
            name='artist'
            register= {register("artist")} 
            />

            <label>
              Categoria:
            </label>
            <div 
            className="flex flex-row mt-1 w-full my-2">
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
            
            <Input 
            label='Dirección:'
            placeholder='ejemplo: Calle A #1, Ciudad'
            name='address'
            className='my-4'
            register= {register("address")} 
            />
          </div>
          <div 
          className='md:col-span-1 align-center '>
            <div className='bg-white w-100 text-black h-72'>
              <MapUpload 
                setLatLng={setLatLng} 
              />

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
    </form>
  )
}