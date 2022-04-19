import { HeadingComponent } from "@core/shared/components";

import { BaseHeadingProps } from "../Heading.component";

import styles from "./H5.module.scss";

export function H5({ children, ...props }: BaseHeadingProps) {
  return (
    <HeadingComponent as="h5" className={styles.h5} {...props}>
      {children}
    </HeadingComponent>
  );
}
