import { ReactNode } from "react";

import styles from "./Kbd.module.scss";

interface KbdProps {
  children: ReactNode;
}

export function Kbd({ children }: KbdProps) {
  return <span className={styles.kbd}>{children}</span>;
}
