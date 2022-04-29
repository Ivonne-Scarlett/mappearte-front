import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ButtonToGo from "../components/ButtonToGo";

const menuItems = require("../config/nav.json");

export default function Nav() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [uploadTarget, setUploadTarget] = useState("");

  const messageOk = () => {
    toast.success('Sesión terminada.', {
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
    />
  }

  const onDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  const logout = () => {
    ["token", "role", "id"].forEach((value) => {
      localStorage.removeItem(value);
    });
    messageOk()      
    setTimeout(function(){
      location.href = "/";
    }, 3500);
    
  };

  useEffect(() => {
    setUploadTarget(localStorage.getItem("token") ? "/upload" : "/Login");
  }, []);
  const showMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={classNames(
        "w-full fixed top-0 left-0 md:h-20",
        "bg-backgroundP bg-opacity-80",
        "py-2 px-6 md:px-20 h-14"
      )}
    >
      <div
        className={classNames(
          "flex justify-between items-start",
          "md:mt-2",
          isMenuOpen ? "w-screen" : ""
        )}
      >
        <Link href={"/"} passHref>
          <Image
            src="/icons/logo.png"
            alt="Logotipo mappearte"
            className={classNames("w-32 md:w-40 lg:w-44", "cursor-pointer")}
          />
        </Link>
        <button className="" onClick={showMenu}>
          <Image
            src="/icons/menu.png"
            alt="Icono de menu"
            className={classNames(
              "absolute right-8 mt-2",
              "cursor-pointer justify-center",
              "md:hidden"
            )}
          />
        </button>
        <div
          className={classNames(
            "flex flex-col md:flex-row items-center",
            isMenuOpen
              ? "mt-12 pt-4 md:pt-0 bg-backgroundP/60 backdrop-blur-md w-full"
              : ""
          )}
        >
          <ul
            className={classNames(
              "ml-3 md:ml-0",
              "items-start md:items-center",
              "list-none",
              "h-auto w-60 md:w-80",
              "md:flex md:flex-row",
              isMenuOpen ? "block md:hidden" : "hidden md:block"
            )}
          >
        <div className='flex'>       
            <Link href={"/profile"} passHref>
              <Image
                src="../icons/avatarIndex.png"
                alt="avatar"
                className={classNames(
                  "cursor-pointer",
                  "outline outline-2 outline-offset-2 outline-black hover:outline-violet-600 invert",
                  "rounded-full w-6 h-6",
                  "ml-2",
                  "block md:hidden"
                )}
              />
            </Link>
            <div className="cursor-pointer block md:hidden pl-2" onClick={onDropdownClick}>
              ▼
              <div
                onClick={logout}
                className={classNames(
                  showDropdown || "invisible")}
              >
                Salir
              </div>
            </div>
             </div>
            <ButtonToGo
              bgColor="Cyan"
              borderColor="Cyan"
              className={classNames(
                "cursor-pointer",
                "text-xs px-2 py-2 mr-4",
                "w-1/3 hidden md:block"
              )}
              route={uploadTarget}
            >
              Subir Foto
            </ButtonToGo>
            {menuItems.map(({ link, label }, index) => (
              <li
                className={classNames(
                  "px-2 py-3 cursor-pointer",
                  "hover:underline hover:underline-offset-8"
                )}
                key={`menuItem-${index}`}
              >
                <Link href={link} passHref>
                  <a
                    className={classNames(
                      "hover:decoration-lime-400 hover:text-lime-400",
                      "duration-500"
                    )}
                  >
                    {label}
                  </a>
                </Link>
              </li>
            ))}
            <ButtonToGo
              bgColor="Cyan"
              borderColor="Cyan"
              className={classNames(
                "cursor-pointer",
                "text-xs px-2 py-2",
                "ml-2 mt-3 mb-6 w-1/2",
                "block md:hidden"
              )}
              route={uploadTarget}
            >
              Subir Foto
            </ButtonToGo>
          </ul>
          <Link href={"/profile"} passHref>
            <Image
              src="../icons/avatarIndex.png"
              alt="Imagen de perfil"
              className={classNames(
                "cursor-pointer ",
                "outline outline-2 outline-offset-2 outline-black hover:outline-violet-600 invert",
                "ml-4 rounded-full w-6 h-6",
                "hidden md:block"
              )}
            />
          </Link>
          <div className="cursor-pointer hidden md:block justify-items-end pl-2 mt-4" onClick={onDropdownClick}>
            ▼
            <div
              onClick={logout}
              className={classNames(
                showDropdown || "invisible")}
            >
              Salir
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
