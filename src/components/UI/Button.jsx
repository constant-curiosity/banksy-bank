export default function Button({
  type,
  onClick,
  children,
  className,
  "aria-label": ariaLabel,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
