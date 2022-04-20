import { Heading, Link, Paragraph } from "@components/elements";
import { Stack } from "../Stack/Stack.component";

import styles from "./Footer.module.scss";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
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
    </footer>
  );
}
