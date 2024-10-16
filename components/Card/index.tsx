import { Icon } from "@iconify/react";

interface CardProps extends React.HTMLAttributes<HTMLElement> {
  icon?: string;
  type?: string;
  title?: string;
  tooltip?: string;
}

const getTypeClasses = (type?: string): string => {
  switch (type) {
    case "primary":
      return "bg-primary text-base-light";

    case "secondary":
      return "bg-secondary text-base-light";

    case "tertiary":
      return "bg-tertiary text-base-light";

    default:
      return "";
  }
};

export default function Card(
  { icon, type, title, tooltip, ...props }: CardProps,
) {
  return (
    <div
      className={`${props.className} ${
        getTypeClasses(type)
      } relative group border w-fit border-gray-200 dark:border-gray-800 rounded-md px-4 py-3`}
    >
      {(icon && title) || title
        ? (
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              {icon
                ? (
                  <Icon
                    icon={icon}
                    fontSize={32}
                    fontWeight={300}
                  >
                  </Icon>
                )
                : null}
              <span className="font-semibold text-lg tracking-tight">
                {title}
              </span>
            </div>

            <div className="flex-1">
              {props.children}
            </div>
          </div>
        )
        : null}

      {icon && !title
        ? (
          <div className="flex items-center gap-2">
            <Icon icon={icon} fontSize={48} fontWeight={300}></Icon>

            {props.children
              ? (
                <div className="flex-1">
                  {props.children}
                </div>
              )
              : null}
          </div>
        )
        : null}

      {!icon && !title
        ? (
          <div className="flex-1">
            {props.children}
          </div>
        )
        : null}

      {tooltip
        ? (
          <span className="absolute hidden lg:group-hover:grid place-items-center -left-14 -top-2 -translate-y-full w-48 px-2 py-1 
                        bg-gray-600 rounded-lg text-center text-white text-sm after:content-[''] after:absolute after:left-1/2 
                        after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent 
                        after:border-t-gray-600">
            {tooltip}
          </span>
        )
        : null}
    </div>
  );
}
