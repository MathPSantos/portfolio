import { ReactNode } from "react";
import { BoxComponent, BoxComponentProps } from "@core/shared/components";

import styles from "./Section.module.scss";

interface SectionProps extends BoxComponentProps {
  children: ReactNode;
}

export function Section({ children, ...props }: SectionProps) {
  return (
    <BoxComponent as="section" className={styles.section} {...props}>
      {children}
    </BoxComponent>
  );
}
