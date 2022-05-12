import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import Uppy from "@uppy/core";
import Transloadit from "@uppy/transloadit";

import { getUserById, getArtistById, patchArtist } from "../../lib/api";

import {
  Nav,
  DarkBlueCard,
  Input,
  InputFile,
  Category,
  ButtonSend,
  Footer,
} from "../index";

export default function ArtistEdit() {
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

  const [role, setRole] = useState();
  const [artist, setArtist] = useState();
  const [artistID, setArtistID] = useState();
  const [isArtist, setIsArtist] = useState(false);
  const [user, setUser] = useState();
  const [uppy, setUppy] = useState();
  const [isUploadingFile, setIsUploadingFile] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const router = useRouter();
  
  useEffect(() => {
    const id = localStorage.getItem("id");
    const role = localStorage.getItem("role");
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/Login");
    }
    setRole(role);
    if (role === "artist") {
      getArtistById(id).then(({ artists }) => {
        setArtist(artists);
        setArtistID(artists._id)
        setIsArtist(true);
        setValue("city", artists.city);
        setValue("resume", artists.resume);
        setValue("isSticker", artists.isSticker);
        setValue("isMural", artists.isMural);
        setValue("isGraffiti", artists.isGraffiti);
        console.log(artists);
      }, {});
    } else if (role === "user") {
      getUserById(id).then(({ users }) => {
        console.log("Antes del set: ", users);
        setUser(users);
      }, {});
    }
  }, [] 
  );

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
      uppy.upload().then(result => {
        console.log(result)
        setValue('imgArtist', result.successful[0].uploadURL)
      });
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
 
  const { register, handleSubmit, errors, watch, setValue } = useForm({defaultValues:{
    isGraffiti:false,
    isSticker:false,
    isMural:false
  }});

  const onSubmit = async (dataRegister) => {
    const artist = await patchArtist(artistID, dataRegister)
    if (artist.ok) {
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
      <Nav />
      <div
        className={classNames(
          "bg-artist bg-cover bg-center bg-no-repeat",
          "flex justify-center items-center",
          "h-96",
          "w-full",
          "px-6 md:px-20",
          "mt-24"
        )}
      ></div>
      <DarkBlueCard className="grid grid-cols-1 md:grid-cols-3">
        <div className="md:span-1">
          <div className="flex justify-center mt-2 mx-28">
            <h3 className=" font-bold text-lg mt-2 font-Mali">
              {artist?.artist}
            </h3>
          </div>
          <div className="flex justify-center ">
            <img
              src={artist?.imgArtist || defaultImage}
              alt="Icono de perfil de usuario"
              className={classNames(
                "bg-backgroundP object-cover",
                "rounded-full border-2 border-solid border-orangeP",
                "w-24 h-24 justify-center",
                "md:w-32 md:h-32",
                "lg:w-40 lg:h-40 my-6",
                "2xl:w-60 2xl:h-60"
              )}
            />
          </div>
        </div>
        <div className="md:col-span-2">
          <label>
            Categoria
          </label>
          <div className="flex flex-row mx-auto mt-1 ">
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
          <Input label="Ciudad" name="city" register={register("city")} />
          
          {/* <label className="my-2">
            Cambia tu imagen 
          </label> */}
          <InputFile
          id='file'
          name='file'
          type='file'
          accept='image/png, image/jpeg'
          onChange={onFileInputChange}
          register= {register("imgArtist")} 
          />
        </div>

        <div className="flex flex-col col-span-3 ">
          <Input
            label="Acerca de mi:"
            name="resume"
            register={register("resume")}
          />
          
          <ButtonSend
            className="mx-auto mt-12 md:w-1/3"
            type="submit"
            text="Guardar"
            bgColor="Orange"
            borderColor="Orange"
          />
        </div>
      </DarkBlueCard>
      <Footer />
    </form>
  );
}
