import React from "react";
import classNames from "classnames";

export default function ToggleSwitch() {
  return (
    <div className="flex justify-center content-center my-8">
      <label htmlFor="">Usuario</label>
      <div className="flex content-center">
        <label htmlFor="toggle-switch" className="mx-4 md:mx-7">
          <input
            type="checkbox"
            id="toggle-switch"
            className={classNames(
              "cursor-pointer",
              "h-6 md:h-8",
              "w-12 md:w-16",
              "rounded-full appearance-none",
              "bg-white bg-opacity-5",
              "border-2 border-bneon",
              "checked:bg-gray-600",
              "transition duration-200 relative",
              // "self-center"
            )} />
        </label>
      </div>
      <label htmlFor="">Artista</label>

    </div>
  )
}