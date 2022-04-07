import React from "react";
import Link from "next/link";

export default function Menu({classChange}) {
  let menuItems = [
    {
      link: "/",
      underlineColor: "hover:decoration-pinkP hover:text-pinkP p-2 ",
      label: "Arte",
    },
    {
      link: "/",
      underlineColor: "hover:decoration-orangeP hover:text-orangeP p-2",
      label: "Artista",
    },
    {
      link: "/",
      underlineColor: "hover:decoration-greenP hover:text-greenP p-2",
      label: "Mi Perfil",
    },
  ];

  return (
    <ul className={`${classChange} flex flex-col md:flex-row items-start md:items-center  list-none`}>
      {menuItems.map(({ link, underlineColor, label }, index) => (
        <li
          className={`hover:underline hover:underline-offset-8 px-2 py-3`}
          key={`menuItem-${index}`}
        >
          <Link href={link}>
            <a className={`${underlineColor}  duration-500`}>{label}</a>
          </Link>
        </li>
      ))}
      <button className={` bg-aquaP border-2 border-aquaP hover:bg-backgroundP text-backgroundP hover:text-white rounded-sm px-1 mr-16 md:mt-0 md:mr-4 block md:hidden mx-4 mt-4`} >SUBIR FOTO</button>

    </ul>
  );
}
