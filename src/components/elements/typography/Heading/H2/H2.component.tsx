import { Heading } from "@core/shared/components";

import { BaseHeadingProps } from "../Heading.component";

import styles from "./H2.module.scss";

export function H2({ children, ...props }: BaseHeadingProps) {
  return (
    <Heading as="h2" className={styles.h2} {...props}>
      {children}
    </Heading>
  );
}
