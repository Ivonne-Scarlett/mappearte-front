import Image from "next/image";
import { useState } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";


export default function CarouselProfile({artist}) {
  const images = [
    {
      "src":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcbjG50JGpow9OBuuFMh5Vw1CPDuPFokahgg&usqp=CAU",
      "caption": "San Francisco"
    },
    {
      "src":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFC-50_0SY-eBf8V0Fthpka-20GVslwclimx_XP5AUtQYZ_48hUu_cloPKHYwvub3O1v8&usqp=CAU",
      "caption": "San Francisco"
    },
    {
      "src":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcbjG50JGpow9OBuuFMh5Vw1CPDuPFokahgg&usqp=CAU",
      "caption": "San Francisco"
    },
    {
      "src":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV_lCI-85knTISG5XODn3BizdlomWoUfcdcdaim71scOOiq9Q1jh6qUl5W9Ynw02Q_pQ4&usqp=CAU",
      "caption": "San Francisco"
    },
    {
      "src":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFC-50_0SY-eBf8V0Fthpka-20GVslwclimx_XP5AUtQYZ_48hUu_cloPKHYwvub3O1v8&usqp=CAU",
      "caption": "San Francisco"
    },
    {
      "src":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3aKYCfyiH2yYuS4F_EP6sLZ_TDa3pu8CQVXPA3PCspBOsYWfPB3UIYAiaeSCozbBf4Xw&usqp=CAU",
      "caption": "San Francisco"
    },
    {
      "src":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZEeeZrlLjSnYe4zeDytqA73BCspVy_01I_BUUkAHq--irQ1fNc4_VVIkJLu66RvUQTP0&usqp=CAU",
      "caption": "San Francisco"
    },
  ]

  console.log(artist)
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleNextSlide = () => {
    let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };
  
  return (
    // <div>
    //   <p>Carousel</p>        
    // </div>
    <div className="relative">
      <AiOutlineLeft
        onClick={handlePrevSlide}
        className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
      />
      
      <div className="w-full md:w-2/5 h-[20vh] md:h-[30vh] flex overflow-hidden relative m-auto">
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className="relative z-10 w-full h-full"
        >
          
          {images.map((image, index) => {
            console.log('images',image.src)
            if (index === currentSlide) {
              return (
                <div className="w-full h-full">
                  <img
                    key={index}
                    layout="fill"
                    objectFit="contain"
                    className="animate-fadeIn w-full h-full object-fill"
                    alt="image"
                    src={image.src}
                  />
                </div>
              );
            }
          })}
        </Swipe>
      </div>
      <AiOutlineRight
        onClick={handleNextSlide}
        className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
      />

      <div className="relative flex justify-center p-2">
        {images.map((_, index) => {
          return (
            <div
              className={
                index === currentSlide
                  ? "h-4 w-4 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"
                  : "h-4 w-4 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer"
              }
              key={index}
              onClick={() => {
                setCurrentSlide(index);
              }}
            />
          );
        })}
      </div>
    </div>
  )
}
