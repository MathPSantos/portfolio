import { ReactNode } from "react";
import { Box, BoxProps } from "@core/shared/components";

import styles from "./Section.module.scss";

interface SectionProps extends BoxProps {
  children: ReactNode;
}

export function Section({ children, ...props }: SectionProps) {
  return (
    <Box as="section" className={styles.section} {...props}>
      {children}
    </Box>
  );
}
