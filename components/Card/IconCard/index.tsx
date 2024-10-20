import Card from "..";
import { Icon } from "@iconify/react";

interface IconCardProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  icon: string;
  type?: string;
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

export default function IconCard(
  { title, icon, type, ...props }: IconCardProps,
) {
  return (
    <Card className={`${getTypeClasses(type)} px-4 py-3`}>
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
          <div className="flex items-center gap-4">
            <Icon icon={icon} fontSize={32} fontWeight={300}></Icon>

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
    </Card>
  );
}
