import Link from "next/link";

import { Heading, Paragraph } from "@components/elements";
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
                <Link href="/">Home</Link>
                <Link href="/">About</Link>
                <Link href="/">Bookmarks</Link>
                <Link href="/">Projects</Link>
              </Stack>
            </div>

            <div>
              <Heading level={6}>Contact</Heading>
              <Stack flexDirection="column">
                <Link href="/">Send a email</Link>
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
