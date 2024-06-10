export default function Button({
  onClick,
  type,
  children,
}: {
  onClick?: () => void;
  type: "button" | "submit";
  children: React.ReactNode | string;
}) {
  return (
    <button type={type || "button"} onClick={onClick}>
      {children}
    </button>
  );
}
