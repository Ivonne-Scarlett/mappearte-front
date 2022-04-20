import React from "react";

export default function ToggleSwitch () {
    return(
        <div className="flex justify-center items-center my-8">
            <label htmlFor="">Usuario</label>
            <div className="justify-center items-center">
                <label htmlFor="toggle-switch" className="mx-4 md:mx-7">
                    <input type="checkbox" id="toggle-switch" className="cursor-pointer h-7 w-10 md:h-9 md:w-16 rounded-full appearance-none bg-white bg-opacity-5 border-2 border-bneon checked:bg-gray-600 transition duration-200 relative"/>
                </label>
            </div>
            <label htmlFor="">Artista</label>
        
        </div>
    )
}