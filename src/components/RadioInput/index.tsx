/* eslint-disable no-nested-ternary */

import { ChangeEvent } from "react";

interface RadioInputProps {
  value: string;
  label: string;
  name: string;
  isChecked: boolean;
  isInvalid?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function RadioInput({
  value,
  label,
  isChecked,
  isInvalid,
  onChange,
  name,
}: RadioInputProps) {
  return (
    <label className="flex gap-2 items-center cursor-pointer">
      <input
        className={`${isInvalid ? "border-red-500" : ""} hidden`}
        name={name}
        checked={isChecked}
        value={value}
        type="radio"
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChange(event);
        }}
      />
      <div
        className={`relative mb-0 mr-2  rounded-full border-2 h-4 w-4
              ${isChecked ? "border-green" : "border-borderGray"}
              `}
      >
        {isChecked && (
          <span
            className="
     absolute left-1/2 top-1/2 block h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green"
          />
        )}
      </div>
      <span className="font-semibold text-base">{label}</span>
    </label>
  );
}
