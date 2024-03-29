import { ReactNode } from "react";
import { HeadingComponentProps } from "@core/shared/components";

import { H1 } from "./H1/H1.component";
import { H2 } from "./H2/H2.component";
import { H3 } from "./H3/H3.component";
import { H5 } from "./H5/H5.component";
import { H6 } from "./H6/H6.component";

export interface BaseHeadingProps extends HeadingComponentProps {
  children: ReactNode;
}

interface HeadingProps extends BaseHeadingProps {
  level?: 1 | 2 | 3 | 5 | 6;
}

export function Heading({ children, level = 1, ...props }: HeadingProps) {
  const HeadingComp = {
    1: H1,
    2: H2,
    3: H3,
    5: H5,
    6: H6,
  }[level];

  return <HeadingComp {...props}>{children}</HeadingComp>;
}
