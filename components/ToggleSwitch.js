import React from "react";

export default function ToggleSwitch () {
    return(
        <div className="flex justify-center bg-gray-900 items-center">
            <label htmlFor="">Usuario</label>
            <div className="justify-center items-center">
                <label htmlFor="toggle-switch" className="mx-4 md:mx-8">
                    <input type="checkbox" id="toggle-switch" className="cursor-pointer h-4 w-8 md:h-8 md:w-16 rounded-full appearance-none bg-white bg-opacity-5 border-2 border-neon checked:bg-gray-600 transition duration-200 relative"/>
                </label>
            </div>
            <label htmlFor="">Artista</label>
        
        </div>
    )
}