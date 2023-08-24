import { useId } from "react";

type Props = {
  label?: string;
  name: string;
  type: React.HTMLInputTypeAttribute;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value?: string | number | readonly string[];
  className?: string;
  required?: boolean;
  placeholder?: string;
  classNameParent?: string;
  checked?: boolean;
  disabled?: boolean;
};

export default function Input({
  label,
  name,
  onChange,
  type,
  value,
  className,
  required = true,
  placeholder,
  classNameParent,
  checked,
  disabled,
}: Props): React.JSX.Element {
  const id = useId();

  return (
    <section className={`flex flex-col gap-4 ${classNameParent}`}>
      {label ? (
        <label htmlFor={id} className="text-spacecadet font-argentcf p-bigger2">
          {label}
        </label>
      ) : null}
      <input
        id={id}
        type={type}
        onChange={onChange}
        name={name}
        value={value}
        checked={checked}
        inputMode={type === "number" ? "numeric" : undefined}
        required={required}
        className={`${className} w-full`}
        placeholder={placeholder}
        autoComplete="off"
        disabled={disabled}
      />
    </section>
  );
}
