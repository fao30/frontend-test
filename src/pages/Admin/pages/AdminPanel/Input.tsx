import { Icon } from "@iconify/react/dist/iconify.js";
import { useId } from "react";

type InputProps = {
  label?: string;
  name?: string;
  type: React.HTMLInputTypeAttribute;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value?: string | number | readonly string[];
  required?: boolean;
  placeholder?: string;
  className?: string;
  maxLength?: number;
  pattern?: string;
  disabled?: boolean;
  checked?: boolean;
};

export default function Input({
  label,
  name,
  onChange,
  type,
  value,
  required = true,
  placeholder,
  className,
  maxLength,
  pattern,
  disabled,
  checked,
}: InputProps): React.JSX.Element {
  const id = useId();

  return (
    <section className={`flex flex-col gap-y-2 ${className}`}>
      {label ? (
        <label
          htmlFor={id}
          className="text-spacecadet content-heading p-bigger2"
        >
          {label}
        </label>
      ) : null}
      <input
        id={id}
        type={type}
        onChange={onChange}
        disabled={disabled}
        maxLength={maxLength}
        minLength={maxLength}
        name={name}
        value={value || ""}
        checked={checked}
        pattern={pattern}
        inputMode={type === "number" ? "numeric" : undefined}
        required={required}
        className="bg-transparent w-full px-1 py-2 p-bigger placeholder-crayola border-b-1 border-crayola"
        placeholder={placeholder}
        autoComplete="off"
      />
    </section>
  );
}
