import { useId } from "react";
import { Icon } from "@iconify/react";

type Props = {
  label?: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string | number | readonly string[];
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  required?: boolean;
  showPassword: boolean;
};

export default function InputPassword({
  label,
  name,
  onChange,
  showPassword,
  value,
  className,
  onClick,
  required = true,
}: Props): React.JSX.Element {
  const id = useId();

  return (
    <section className="flex flex-col">
      {label ? (
        <label htmlFor={id} className="ml-1">
          {label}
        </label>
      ) : null}
      <section className="relative w-full">
        <input
          id={id}
          type={showPassword ? "text" : "password"}
          onChange={onChange}
          name={name}
          value={value}
          required={required}
          className={`${className} w-full`}
          autoComplete="off"
        />
        <button
          type="button"
          onClick={onClick}
          className="absolute centered-right -translate-x-4"
        >
          <Icon width={25} icon="raphael:view" />
        </button>
      </section>
    </section>
  );
}
