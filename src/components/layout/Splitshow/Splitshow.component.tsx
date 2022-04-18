import { BoxComponent, BoxComponentProps } from "@core/shared/components";
import styles from "./Splitshow.module.scss";

interface ChildComponentProps<T> {
  data: T;
}

interface SplitshowProps<T> extends BoxComponentProps {
  items: T[];
  isAlined?: boolean;
  ChildComponent: (props: ChildComponentProps<T>) => JSX.Element;
}

export function Splitshow<T>({
  items,
  isAlined = false,
  ChildComponent,
  ...props
}: SplitshowProps<T>) {
  function spliteEvenAndOddItems(items: T[]) {
    const evenItems = items.filter((_, index) => index % 2 === 0);
    const oddItems = items.filter((_, index) => index % 2 !== 0);

    return [evenItems, oddItems];
  }

  const [leftItems, rightItems] = spliteEvenAndOddItems(items);

  return (
    <BoxComponent className={styles.splitshow} {...props}>
      <div
        className={`${styles.splitshow__item} ${styles.splitshow__itemLeft}`}
      >
        {leftItems.map((item, index) => (
          <ChildComponent key={index} data={item} />
        ))}
      </div>
      <div
        style={{ marginTop: isAlined ? "0" : "120px" }}
        className={`${styles.splitshow__item} ${styles.splitshow__itemRight}`}
      >
        {rightItems.map((item, index) => (
          <ChildComponent key={index} data={item} />
        ))}
      </div>
    </BoxComponent>
  );
}
