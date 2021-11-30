import clsx from "clsx";
import * as React from "react";

type AccentType = React.ComponentPropsWithoutRef<"span">;

export default function TextGradient({ children, className }: AccentType) {
  return (
    <span
      className={clsx(
        className,
        "bg-clip-text text-transparent",
        "bg-gradient-to-r from-primary-600 via-primary-200 to-primary-300"
      )}
      dataa-fade="5"
    >
      {children}
    </span>
  );
}
