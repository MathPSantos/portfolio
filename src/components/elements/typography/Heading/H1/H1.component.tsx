import { Heading } from "@core/shared/components";

import { BaseHeadingProps } from "../Heading.component";

import styles from "./H1.module.scss";

export function H1({ children, ...props }: BaseHeadingProps) {
  return (
    <Heading as="h1" className={styles.h1} {...props}>
      {children}
    </Heading>
  );
}
