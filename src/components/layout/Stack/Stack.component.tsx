import { CSSProperties, ReactNode } from "react";

import styles from "./Stack.module.scss";

interface StackProps {
  children: ReactNode;
  flexDirection?: CSSProperties["flexDirection"];
  gap?: number;
}

export function Stack({
  children,
  flexDirection = "row",
  gap = 12,
}: StackProps) {
  return (
    <div style={{ flexDirection, gap }} className={styles.stack}>
      {children}
    </div>
  );
}
