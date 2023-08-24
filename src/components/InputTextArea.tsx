import { useId } from "react";

type Props = {
  label?: string;
  name: string;
  type: React.HTMLInputTypeAttribute;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  value?: string | number | readonly string[];
  className?: string;
  required?: boolean;
  placeholder?: string;
  classNameParent?: string;
  checked?: boolean;
  disabled?: boolean;
};

export default function InputTextArea({
  label,
  name,
  onChange,
  value,
  className,
  required = true,
  placeholder,
  classNameParent,
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
      <textarea
        id={id}
        rows={6}
        onChange={onChange}
        name={name}
        value={value || ""}
        required={required}
        className={`${className} w-full bg-transparent border-b`}
        placeholder={placeholder}
        autoComplete="off"
        disabled={disabled}
      />
    </section>
  );
}
