interface InputFieldProps extends React.HTMLAttributes<HTMLInputElement> {
  title?: string;
  labelClassName?: string;
  placeholder?: string
  name?: string;
  required?: boolean
}

export default function InputField(
  { labelClassName, required, placeholder, title, name, ...props }: InputFieldProps,
) {
  return (
    <div className={`${props.className}`}>
      {title
        ? (
          <label
            className={`block ${labelClassName} font-medium mb-1`}
            htmlFor={props.id}
          >
            {title}
            {required ? '*' : null}
          </label>
        )
        : ""}

      <div className="relative w-full">
        <input
          type={props.datatype}
          placeholder={placeholder}
          className={`w-full block rounded-md outline-none border px-3 py-2 border-gray-200 dark:border-gray-800 
                    shadow-sm focus:ring focus:ring-info dark:focus:ring-info-dark text-base-dark dark:bg-base-dark dark:text-base-light`}
          name={name}
          id={props.id}
        />
      </div>
    </div>
  );
}
