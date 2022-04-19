import { ReactNode } from "react";

import styles from "./Tag.module.scss";

interface TagProps {
  variant?: "primary" | "secondary";
  children: ReactNode;
}

export function Tag({ variant = "primary", children }: TagProps) {
  const CLASS_NAME = `${styles.tag} ${styles[variant]}`;

  return <div className={CLASS_NAME}>{children}</div>;
}
