/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import classNames from "classnames";
import Link from "next/link";
import { getArtist } from "../lib/api";

export default function GridAvatar() {
  const [artists, setArtist] = useState([]);

  useEffect(() => {
    getArtist().then((response) => {
      const countImages = response.artists.length;
      const imageInitial = countImages - 15;
      const avatars = response.artists.slice(imageInitial, countImages);
      setArtist(avatars);
    });
  }, []);

  return (
    <div className={classNames(
      "items-center justify-center",
      "w-full flex ",
      "px-6 md:px-20",
      "py-6 md:py-10", 
      "mt-16 md:mt-24"     
    )}>
      <div 
        className={classNames(         
          "grid grid-cols-3 md:grid-cols-5 grid-rows-3", 
          "2xl:gap-x-20",
          'lg:max-w-screen-xl', 'w-full',
          'justify-items-center'        
        )}
      >
        {artists.map(({ imgArtist: avatar, _id: artistId }, index) => {
          const artistImage = avatar || "/icons/noavatar.png";
          return (
            <div
              className={classNames(
                'flex flex-row justify-center',
                'odd:w-20 even:w-10 odd:h-20 even:h-10',
                'md:odd:w-20 md:odd:h-20 lg:odd:w-40 lg:odd:h-40 2xl:odd:w-44 2xl:odd:h-44',
                'md:even:w-10 md:even:h-10 lg:even:w-24 lg:even:h-24 2xl:even:w-28 2xl:even:h-28',
                'break-inside-avoid',
                'break-inside-avoid-column',
                'break-inside-avoid-page',
                'mb-8',
                
                )}
              key={index}
            >
              <Link href={`/artist/${artistId}`}>
                <img
                  src={artistImage}
                  alt="artista"
                  className={classNames(
                    "object-cover cursor-pointer",
                    "rounded-full border-2 border-solid border-white",
                    "w-full h-full",
                    'animate-pulse animate-[bounce_4s_infinite]',
                  )}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
