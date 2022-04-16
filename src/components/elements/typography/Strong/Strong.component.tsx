import { TextComponent } from "@core/shared/components";

import { ParagraphProps } from "../";

import styles from "./Strong.module.scss";

export function Strong({ children, ...props }: ParagraphProps) {
  return (
    <TextComponent as="strong" className={styles.strong} {...props}>
      {children}
    </TextComponent>
  );
}
