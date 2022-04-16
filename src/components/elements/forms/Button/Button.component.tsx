import { ReactNode } from "react";

import { ButtonComponent, ButtonPropsComponent } from "@core/shared/components";

import styles from "./Button.module.scss";

interface ButtonProps extends ButtonPropsComponent {
  children: ReactNode;
  variant?: "primary";
}

export function Button({
  children,
  variant = "primary",
  ...props
}: ButtonProps) {
  const CLASS_NAME = `${styles.button} ${styles[variant]}`;

  return (
    <ButtonComponent className={CLASS_NAME} {...props}>
      {children}
    </ButtonComponent>
  );
}
