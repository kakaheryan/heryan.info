import clsx from "clsx";

import UnstyledLink, { UnstyledLinkProps } from "./LinkHref";

export default function ButtonAnimate({
  children,
  className = "",
  ...rest
}: UnstyledLinkProps) {
  return (
    <div className="inline-block relative">
      <div
        className={clsx(
          "absolute -inset-0.5 rounded blur",
          "bg-gradient-to-r from-primary-500 via-primary-300 to-primary-400",
          " dark:via-primary-300 z-0"
        )}
      />
      <UnstyledLink
        {...rest}
        className={clsx(
          "transform-gpu scale-100 hover:scale-[1.03] active:scale-[0.97]",
          "transition duration-100",
          className
        )}
      >
        {children}
      </UnstyledLink>
    </div>
  );
}
