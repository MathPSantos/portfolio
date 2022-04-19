import { BoxComponent, BoxComponentProps } from "@core/shared/components";
import { CSSProperties, ReactNode } from "react";

import styles from "./Stack.module.scss";

interface StackProps extends BoxComponentProps {
  children: ReactNode;
  flexDirection?: CSSProperties["flexDirection"];
  gap?: number;
}

export function Stack({
  children,
  flexDirection = "row",
  gap = 12,
  ...props
}: StackProps) {
  return (
    <BoxComponent
      style={{ flexDirection, gap }}
      className={styles.stack}
      {...props}
    >
      {children}
    </BoxComponent>
  );
}
