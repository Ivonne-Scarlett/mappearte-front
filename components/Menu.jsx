import React from "react";
import Link from "next/link";

export default function Menu({classChange}) {
  let menuItems = [
    {
      link: "/",
      underlineColor: "hover:decoration-pinkP hover:text-pinkP p-4 ",
      label: "Arte",
    },
    {
      link: "/",
      underlineColor: "hover:decoration-orangeP hover:text-orangeP p-4",
      label: "Artista",
    },
    {
      link: "/",
      underlineColor: "hover:decoration-greenP hover:text-greenP p-4",
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
    </ul>
  );
}
