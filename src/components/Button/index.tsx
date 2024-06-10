export default function Button({
  onClick,
  type,
  disabled,
  children,
}: {
  disabled?: boolean;
  onClick?: () => void;
  type: "button" | "submit";
  children: React.ReactNode | string;
}) {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className={`font-bold py-3 px-5 rounded-lg bg-green text-white md:max-w-xs
      ${disabled ? "opacity-50" : "cursor-pointer   hover:bg-hoverGreen"}
      `}
    >
      {children}
    </button>
  );
}
