import { useState } from "react";

import { TAG_COLOR } from "../utils/tag-color";

export const ColorPickDropDown = () => {
  const [isDropDown, setIsDropDown] = useState(false);
  const [color, setColor] = useState("teal-200");

  return (
    <div className="w-full relative flex">
      <button
        type="button"
        className={`w-full bg-${color} rounded-lg`}
        onClick={() => setIsDropDown(!isDropDown)}
      ></button>
      {isDropDown ? (
        <div className="absolute top-7">
          <div className="grid grid-cols-3 w-20 h-20 bg-white rounded-lg justify-items-center content-evenly p-1">
            {TAG_COLOR.map((item: any) => (
              <button
                className={`bg-${item} w-5 h-5 rounded-md`}
                key={item}
              ></button>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};
