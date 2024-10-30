import { twMerge } from "tailwind-merge";

interface InputFieldProps extends React.HTMLAttributes<HTMLInputElement> {
  title?: string;
  labelClassName?: string;
  placeholder?: string;
  name?: string;
  required?: boolean;
  value?: string;
}

export default function InputField(
  { labelClassName, required, placeholder, title, value, name, ...props }:
    InputFieldProps,
) {
  return (
    <>
      {title
        ? (
          <label
            className={`block ${labelClassName} font-medium mb-1`}
            htmlFor={props.id}
          >
            {title}
            {required ? " *" : null}
          </label>
        )
        : ""}

      <div className="relative w-full">
        <input
          {...props}
          value={value}
          type={props.datatype}
          placeholder={placeholder}
          className={twMerge("w-full block rounded-md outline-none border px-3 py-2 border-neutral-200 dark:border-neutral-800 shadow-sm focus:ring focus:ring-info dark:focus:ring-info-dark text-base-dark bg-inherit dark:text-base-light", props.className)}
          name={name}
          id={props.id}
        />
      </div>
    </>
  );
}
