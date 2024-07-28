// components/ToggleSwitch.tsx

import React from "react";
import { cn } from "@/lib/utils";

interface ToggleSwitchProps {
  isChecked: boolean;
  onToggle: () => void;
  labelOn: string;
  labelOff: string;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  isChecked,
  onToggle,
  labelOn,
  labelOff,
}) => {
  return (
    <div className="flex items-center justify-center space-x-4">
      <div
        className={cn(
          "relative flex items-center bg-[#ff8906] rounded-full p-1 transition-all duration-300 ease-in-out",
          {
            "bg-[#f25f4c]": isChecked,
          }
        )}
        style={{ width: "150px", height: "30px" }}
      >
        <div
          className={cn(
            "absolute left-0 w-1/2 h-full bg-white rounded-full shadow-md transition-all duration-300 ease-in-out",
            {
              "transform translate-x-full": isChecked,
              "transform translate-x-0": !isChecked,
            }
          )}
          style={{ width: "80px" }}
        ></div>
        <div className="flex w-full justify-around">
          <span
            className={cn(
              "text-sm font-extrabold cursor-pointer",
              {
                "text-slate-950": !isChecked,
                "text-black": isChecked,
              }
            )}
            onClick={onToggle}
          >
            {labelOff}
          </span>
          <span
            className={cn(
              "text-sm font-extrabold cursor-pointer",
              {
                "text-gray-200": !isChecked,
                "text-white": isChecked,
              }
            )}
            onClick={onToggle}
          >
            {labelOn}
          </span>
        </div>
      </div>
    </div>
  );
};
