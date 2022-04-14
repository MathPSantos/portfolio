import { ReactNode } from "react";
import { Text, TextProps } from "@core/shared/components";

import styles from "./Paragraph.module.scss";

export interface ParagraphProps extends TextProps {
  children: ReactNode;
}

export function Paragraph({ children, ...props }: ParagraphProps) {
  return (
    <Text className={styles.paragraph} {...props}>
      {children}
    </Text>
  );
}
