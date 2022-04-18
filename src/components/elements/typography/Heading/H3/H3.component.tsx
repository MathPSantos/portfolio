import { HeadingComponent } from "@core/shared/components";

import { BaseHeadingProps } from "../Heading.component";

import styles from "./H3.module.scss";

export function H3({ children, ...props }: BaseHeadingProps) {
  return (
    <HeadingComponent as="h3" className={styles.h3} {...props}>
      {children}
    </HeadingComponent>
  );
}
