import { ReactNode } from "react";
import { TextComponent, TextComponentProps } from "@core/shared/components";

import styles from "./Paragraph.module.scss";

export interface ParagraphProps extends TextComponentProps {
  children: ReactNode;
}

export function Paragraph({ children, ...props }: ParagraphProps) {
  return (
    <TextComponent className={styles.paragraph} {...props}>
      {children}
    </TextComponent>
  );
}
