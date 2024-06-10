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
    <label>
      <input
        className={isInvalid ? "border-red-500" : ""}
        name={name}
        checked={isChecked}
        value={value}
        type="radio"
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChange(event);
        }}
      />
      <span>{label}</span>
    </label>
  );
}
