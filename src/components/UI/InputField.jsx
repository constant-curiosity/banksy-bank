export default function InputField({
  label,
  htmlForLabel,
  name,
  type,
  value,
  onChange,
  ariaLabel,
  ariaDescribedBy,
}) {
  return (
    <div>
      <label
        htmlFor={htmlForLabel}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="mt-1">
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          aria-label={ariaLabel}
          aria-describedby={ariaDescribedBy}
          className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 lg:text-lg"
        />
      </div>
    </div>
  );
}
