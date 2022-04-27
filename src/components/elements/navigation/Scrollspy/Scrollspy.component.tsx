import { useEffect, useState } from "react";

import { Heading } from "@components/elements";

import styles from "./Scrollspy.module.scss";

interface SpyItem {
  inView: boolean;
  element: HTMLElement;
  label: string;
}

interface ScrollspyState {
  items: SpyItem[];
}

interface ListItem {
  id: string;
  label: string;
}

interface ScrollspyProps {
  listItems: ListItem[];
}

const TIMER_CHECKER = 100;

export function Scrollspy({ listItems }: ScrollspyProps) {
  const [state, setState] = useState<ScrollspyState>({
    items: [],
  });

  useEffect(() => {
    const interval = setInterval(() => spy(), TIMER_CHECKER);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function spy() {
    const items = listItems.map((i) => {
      const element = document.getElementById(i.id);
      return {
        inView: element ? isInView(element) : false,
        element,
        label: i.label,
      } as SpyItem;
    });

    const firstTrueItem = items.find((item) => !!item && item.inView);

    if (!firstTrueItem) {
      return;
    } else {
      const update = items.map((item) => {
        return { ...item, inView: item === firstTrueItem } as SpyItem;
      });

      setState({ items: update });
    }
  }

  function scrollTo(element: HTMLElement) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }

  function isInView(element: HTMLElement) {
    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;

    const rect = element.getBoundingClientRect();
    return viewportHeight - rect.top > 0 && rect.bottom > 0;
  }

  return (
    <div className={styles.spy}>
      <Heading mb="24" level={5}>
        Summary
      </Heading>
      <ul>
        {state.items.map((item, index) => {
          return (
            <li
              key={index}
              className={item.inView ? styles.active : ""}
              onClick={() => scrollTo(item.element)}
            >
              {item.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
