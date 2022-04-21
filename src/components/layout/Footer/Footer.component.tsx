import { Heading, Link, Paragraph } from "@components/elements";
import { BoxComponent, BoxComponentProps } from "@core/shared/components";
import { Stack } from "../Stack/Stack.component";

import styles from "./Footer.module.scss";

interface FooterProps extends BoxComponentProps {}

export function Footer({...props}: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <BoxComponent as="footer" className={styles.footer} {...props}>
      <div className={styles.footer__content}>
        <div className={styles.footer__main}>
          <div>
            <Heading level={2}>Matheus Santos</Heading>
            <Paragraph>Just coding and chiling!</Paragraph>
          </div>

          <div className={styles.footer__mainLinks}>
            <div>
              <Heading level={6}>Pages</Heading>
              <Stack flexDirection="column">
                <Link href="/">
                  <a>Home</a>
                </Link>
                <Link href="/">
                  <a>About</a>
                </Link>
                <Link href="/">
                  <a>Bookmarks</a>
                </Link>
                <Link href="/">
                  <a>Projects</a>
                </Link>
              </Stack>
            </div>

            <div>
              <Heading level={6}>Contact</Heading>
              <Stack flexDirection="column">
                <Link href="/">
                  <a>Send a email</a>
                </Link>
              </Stack>
            </div>
          </div>
        </div>

        <div className={styles.footer__additional}>
          <p>All rights reserved © Matheus Santos {year}</p>
          <span>Designed & Built by Matheus Santos</span>
        </div>
      </div>
    </BoxComponent>
  );
}
