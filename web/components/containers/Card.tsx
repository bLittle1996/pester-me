import { trim } from "ramda";
import { FC } from "react";
import { HTMLProps, MergableClassName } from "../../interfaces/index";

export const Card: FC<HTMLProps<HTMLDivElement> & MergableClassName> = ({
  children,
  className,
  mergeClassName = true,
  ...props
}) => {
  return (
    <div
      className={
        mergeClassName
          ? trim(`bg-white p-6 rounded shadow ${className}`)
          : className
      }
      {...props}
    >
      {children}
    </div>
  );
};
