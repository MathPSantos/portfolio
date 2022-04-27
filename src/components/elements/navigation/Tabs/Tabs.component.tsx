import { useTabs } from "@core/hooks/useTabs/useTabs.hook";
import styles from "./Tabs.module.scss";

export function Tabs() {
  const { openIndexes, toggleIndex } = useTabs();

  return (
    <div className={styles.tabs}>
      <div className={styles.tabs__sidebar}></div>
      <div className={styles.tabs__content}></div>
    </div>
  );
}
