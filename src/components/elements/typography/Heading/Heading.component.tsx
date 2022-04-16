import { ReactNode } from "react";
import { HeadingComponentProps } from "@core/shared/components";

import { H1 } from "./H1/H1.component";
import { H2 } from "./H2/H2.component";

export interface BaseHeadingProps extends HeadingComponentProps {
  children: ReactNode;
}

interface HeadingProps extends BaseHeadingProps {
  level?: 1 | 2;
}

export function Heading({ children, level = 1, ...props }: HeadingProps) {
  const HeadingComp = {
    1: H1,
    2: H2,
  }[level];

  return <HeadingComp {...props}>{children}</HeadingComp>;
}
