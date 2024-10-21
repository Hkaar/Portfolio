interface TextAreaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  title?: string;
  labelClassName?: string;
  name?: string;
  placeholder?: string;
}

export default function TextArea(
  { className, labelClassName, placeholder, title, name, ...props }: TextAreaProps,
) {
  return (
    <div className="space-y-1">
      {title
        ? (
          <label
            className={`block ${labelClassName} font-medium`}
            htmlFor={props.id}
          >
            {title}
          </label>
        )
        : ""}

      <div className="relative">
        <textarea
          placeholder={placeholder}
          className={`${className} block rounded-md outline-none border px-3 py-2 border-gray-200 dark:border-gray-800 
                    shadow-sm focus:ring focus:ring-accent dark:focus:ring-primary-dark text-base-dark dark:bg-base-dark dark:text-base-light`}
          name={name}
          id={props.id}
          cols={3}
          rows={5}
        >
          {props.children}
        </textarea>
      </div>
    </div>
  );
}
