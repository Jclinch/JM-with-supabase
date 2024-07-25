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
          "relative flex items-center bg-purple-100 rounded-full p-1 transition-all duration-300 ease-in-out",
          {
            "bg-purple-100": isChecked,
          }
        )}
        style={{ width: "200px", height: "50px" }}
      >
        <div
          className={cn(
            "absolute left-0 w-1/2 h-full bg-white rounded-full shadow-md transition-all duration-300 ease-in-out",
            {
              "transform translate-x-full": isChecked,
              "transform translate-x-0": !isChecked,
            }
          )}
          style={{ width: "100px" }}
        ></div>
        <div className="flex w-full justify-around">
          <span
            className={cn(
              "text-sm font-medium cursor-pointer",
              {
                "text-purple-500": !isChecked,
                "text-gray-400": isChecked,
              }
            )}
            onClick={onToggle}
          >
            {labelOff}
          </span>
          <span
            className={cn(
              "text-sm font-medium cursor-pointer",
              {
                "text-gray-400": !isChecked,
                "text-purple-500": isChecked,
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
