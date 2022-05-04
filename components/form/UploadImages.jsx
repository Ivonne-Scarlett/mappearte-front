//Este componente no se esta rederizando 
//lo dejo para seguir teniendo el ejemplo de subir imagen que inicio Job

import React, { useState, useEffect } from "react";
import Uppy from "@uppy/core";
import Transloadit from "@uppy/transloadit";
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  Input,
  InputFile,
  ButtonSend,
  Category,
  OpacityCard
 } from '../index';

export default function UploadImg() {
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

  const [uppy, setUppy] = useState();
  const [isUploadingFile, ç] = useState(false);
  const [imageUrl, setImageUrl] = useState();

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

  const router = useRouter();
  const { register, handleSubmit, errors, watch } = useForm({defaultValues:{
    isGraffiti:false,
    isSticker:false,
    isMural:false
  }});

  const onSubmit = async(dataRegister) => {
    const user = await registerUser(dataRegister)
    if (user.ok) {
      messageOk()      
      setTimeout(function(){
        router.push('/Login')
      }, 3500);
    } else {
      messageFail()
    }
   }

  return (
    <form onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col justify-between'
    >
    <OpacityCard className={classNames(
      'grid grid-cols-1 md:grid-cols-1 gap-4',
      'mx-6 md:mx-32 lg:mx-40',
      'my-8 md:my-6 lg:my-10'
    )}
    >
      <img
      src='../icons/sube-tu-arte.png'
      alt='Sube tu arte'
      className='mx-auto'
      />
      <div>
        <Input
          label='Nombre del artísta:'
          placeholder='ejemplo: MexiArt'
          name='artist'
        />
      </div>
      <div className='my-2'>
          <label className=''>
            Categoria:
          </label>
          <div className="flex flex-row mt-1 w-full">
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
        </div>
        <div>
        <InputFile
          id='file'
          name='file'
          type='file'
          accept='image/png, image/jpeg'
          onChange={onFileInputChange}
        />
      </div>
      <div>
        <Input
        label='Ubicación:'
        placeholder='ejemplo: Calle Balderas #27, Del. Cuauhtémoc '
        name='name'
        />
      </div>
      <div className='py-2 mx-8 md:mx-28 lg:mx-44'>
        <ButtonSend
          className='mt-4'
          type='submit'
          text='Guardar'
          bgColor='Cyan'
          borderColor='Cyan'
        />
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-1 gap-0 md:gap-7 mb-4">
        //en teoria esto seria el mapa, falta acomodarlo bien
        // y definir tamano
        <div
         className={classNames(
            'bg-gray-200',
            'h-auto w-auto'
         )}></div>
      </div> */}
    </OpacityCard>
  </form>
)
}