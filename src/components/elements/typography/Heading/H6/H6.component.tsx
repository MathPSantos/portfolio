import { HeadingComponent } from "@core/shared/components";

import { BaseHeadingProps } from "../Heading.component";

import styles from "./H6.module.scss";

export function H6({ children, ...props }: BaseHeadingProps) {
  return (
    <HeadingComponent as="h6" className={styles.h6} {...props}>
      {children}
    </HeadingComponent>
  );
}
