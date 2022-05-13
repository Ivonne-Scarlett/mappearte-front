/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import classNames from "classnames";
import Link from "next/link";
import { getArtist } from "../lib/api";
import { useSpring, animated } from 'react-spring';

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

  const styles = useSpring({
    loop: true,
    cancel: true,
    from: { rotateZ: 0 },
    to: { rotateZ: 180 },
  })

  return (
    <div className={classNames(
      "items-center justify-center",
      "w-full flex ",
      "bg-red-100", 
      "px-6 md:px-20",
      "py-6 md:py-10",      
    )}>
      <div 
        className={classNames(
          "bg-pink-900 border-2 border-solid border-white",          
          "grid grid-cols-3 md:grid-cols-5 grid-rows-3", 
          "2xl:gap-x-20",
          'lg:max-w-screen-xl', 'w-full',
          'justify-items-center'        
        )}
      >
        {artists.map(({ imgArtist: avatar, _id: artistId }, index) => {
          const artistImage = avatar || "/icons/noavatar.png";
          return (
            <animated.div style={styles} 
              className={classNames(
                'flex flex-row justify-center',
                'odd:w-20 even:w-10 odd:h-20 even:h-10',
                'md:odd:w-20 md:odd:h-20 lg:odd:w-40 lg:odd:h-40 2xl:odd:w-44 2xl:odd:h-44',
                'md:even:w-10 md:even:h-10 lg:even:w-24 lg:even:h-24 2xl:even:w-28 2xl:even:h-28',
                'break-inside-avoid',
                'break-inside-avoid-column',
                'break-inside-avoid-page',
                'mb-8'
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
                   
                  )}
                />
              </Link>
            </animated.div>
          );
        })}
      </div>
    </div>
  );
}
