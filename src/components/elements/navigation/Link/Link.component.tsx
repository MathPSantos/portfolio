import { cloneElement, ReactElement, ReactNode } from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";

import styles from "./Link.module.scss";

interface LinkProps extends NextLinkProps {
  children: ReactElement;
  size?: "xl" | "md" | "sm";
}

export function Link({ children, size = "md", ...props }: LinkProps) {
  const className = [styles.link, styles[`link__${size}`]].join(" ");

  return (
    <NextLink {...props}>{cloneElement(children, { className })}</NextLink>
  );
}
