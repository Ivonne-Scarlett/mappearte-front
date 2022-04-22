import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { useRouter } from "next/router";
import Link from "next/link";

import {
  Nav,
  Footer,
  GridIndex,
  GridProfile,
  DarkBlueCard,
  OpacityCard,
} from "../../components";

import { getUserById } from "../../lib/api";

export default function Test() {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState([]);
  useEffect(() => {
    getUserById(id).then(({ user }) => {
      setUser(user);
    });
  }, []);
  
  const defaultImage = "/icons/noavatar.png";

  return (
    <>
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
      >
        <OpacityCard
          className={classNames(
            "h-64 w-64  lg:h-80 lg:w-80",
            /* "mt-32 md:mt-24 lg:mt-16", */ 
            "justify-center items-center",
            "pb-16 absolute flex flex-col align-middle"
          )}
        >
          <Link href={"/test"}>
            <img
              src={user.imgUser || defaultImage}
              alt="Icono de perfil de usuario"
              className={classNames(
                "bg-backgroundP object-cover cursor-pointer", 
                "rounded-full border-2 border-solid border-orangeP",
                "w-24 h-24",
                "md:w-32 md:h-32",
                "lg:w-40 lg:h-40",
                "2xl:w-60 2xl:h-60"
              )}
            />
          </Link>
          <div className="flex justify-end">
            <h3 className="font-bold text-lg mt-4 font-Mali">{user.user}</h3>
          </div>
          {/* <ButtonEdit
          onClick={sayHi}
          /> */}
        </OpacityCard>
        <div className={classNames("basis-5/12 mt-4")}>
          {/* <ButtonCamera
          onClick={sayHi}
          /> */}
        </div>
      </div>

      <DarkBlueCard className="mt-20 mb-20">
        <h3
          className={classNames(
            "font-Mochiy font-extrabold text-2xl",
            "ml-4 mb-16"
          )}
        >
          Mis Fotos
        </h3>
        <GridProfile />
      </DarkBlueCard>

      <Footer />
    </>
  );
}