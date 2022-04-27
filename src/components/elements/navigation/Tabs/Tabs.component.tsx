import { ReactNode } from "react";

import { useTabs } from "@core/hooks/useTabs/useTabs.hook";
import styles from "./Tabs.module.scss";

type Tab = {
  title: string;
  content: ReactNode;
};

interface TabsProps {
  items: Tab[];
}

export function Tabs({ items }: TabsProps) {
  const { openIndexes, toggleIndex } = useTabs();

  return (
    <div className={styles.tabs}>
      <div className={styles.tabs__sidebar}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`${styles.tabs__sidebar__item} ${
              openIndexes.includes(index)
                ? styles.tabs__sidebar__item_active
                : ""
            }`}
            onClick={() => toggleIndex(index)}
          >
            {item.title}
          </div>
        ))}
      </div>
      <div className={styles.tabs__content}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`${styles.tabs__content__item} ${
              openIndexes.includes(index)
                ? ""
                : styles.tabs__content__item_hidden
            }`}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
}
