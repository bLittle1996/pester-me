import NextLink, { LinkProps } from "next/link";
import { FC } from "react";

export const Link: FC<LinkProps> = ({ children, ...props }) => (
  <NextLink {...props}>
    <a>{children}</a>
  </NextLink>
);
