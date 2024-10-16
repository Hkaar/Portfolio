interface InputFieldProps extends React.HTMLAttributes<HTMLInputElement> {
    title?: string;
    labelClassName?: string;
    name?: string;
}

export default function InputField(
    { className, labelClassName, title, name, ...props }: InputFieldProps,
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
                <input
                    type={props.datatype}
                    className={`${className} block rounded-md outline-none border px-3 py-2 border-gray-200 dark:border-gray-800 
                    shadow-sm focus:ring focus:ring-accent dark:focus:ring-primary-dark text-base-dark dark:bg-base-light`}
                    name={name}
                    id={props.id}
                />
            </div>
        </div>
    );
}
