import { BoxComponent, BoxComponentProps } from "@core/shared/components";

import styles from "./EmailContact.module.scss";

interface EmailContactProps extends BoxComponentProps {}

export const EMAIL_CONTACT = "mathsantos.dev@gmail.com";

export function EmailContact({ ...props }: EmailContactProps) {
  return (
    <BoxComponent {...props}>
      <a className={styles.email} href={`mailto: ${EMAIL_CONTACT}`}>
        <span>{EMAIL_CONTACT}</span>
        <div />
      </a>
    </BoxComponent>
  );
}
