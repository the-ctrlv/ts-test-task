interface RadioInputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  isInvalid?: boolean;
}

export default function RadioInput({
  onChange,
  placeholder,
  className,
  isInvalid,
}: RadioInputProps) {
  return (
    <input
      type="text"
      onChange={onChange}
      placeholder={placeholder}
      className={`hover:ring-dark-gray placeholder:text-md
  bg-white
  block h-[50px] w-full appearance-none truncate
    text-lg placeholder:font-normal placeholder:text-[#878787] md:placeholder:text-base
rounded-lg px-5 pr-12 font-bold font-semibold leading-6
    text-black outline-0 ring-2 transition
    placeholder:font-semibold focus:outline-none focus:ring-2 focus:ring-green
    ${className || undefined}
    ${isInvalid ? "ring-2 !ring-red-400" : "ring-borderGray"}`}
    />
  );
}
