import { ReactNode } from "react";

import styles from "./Main.module.scss";

interface MainProps {
  children: ReactNode;
}

export function Main({ children }: MainProps) {
  return (
    <main className={styles.container}>
      <div className={styles.content}>{children}</div>
    </main>
  );
}
