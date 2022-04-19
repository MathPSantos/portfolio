import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import { Heading, Link } from "@components/elements";
import { Stack } from "../Stack/Stack.component";

import { MoonIcon, GlobeIcon } from "../../../core/shared/icons";

import styles from "./Header.module.scss";

export function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function toggleIsNavOpen() {
    setIsNavOpen((prev) => !prev);
  }

  return (
    <header className={styles.container}>
      <div className={styles.wrappper}>
        <div className={styles.content}>
          <Image
            src="/assets/logo.svg"
            alt="Math Dev. Logo"
            height={23}
            width={38}
          />

          <div className={styles.actions}>
            <MoonIcon />

            <GlobeIcon />

            <div
              onClick={toggleIsNavOpen}
              className={[
                styles.burger,
                isNavOpen ? styles.burger__open : "",
              ].join(" ")}
            >
              <div />
              <div />
            </div>
          </div>
        </div>

        <div className={styles.nav}>
          <div
            className={[
              styles.nav__wrapper,
              isNavOpen ? styles.nav__wrapperOpen : "",
            ].join(" ")}
          >
            <div className={styles.nav__content}>
              <div className={styles.nav__main}>
                <div className={styles.nav__mainLinks}>
                  <Heading level={5}>Social</Heading>

                  <Stack flexDirection="column" gap={12}>
                    <Link href="/">
                      <a>Codesandbox</a>
                    </Link>
                    <Link href="/">
                      <a>Github</a>
                    </Link>
                    <Link href="/">
                      <a>LinkedIn</a>
                    </Link>
                    <Link href="/">
                      <a>Youtube</a>
                    </Link>
                  </Stack>
                </div>

                <div className={styles.nav__mainLinks}>
                  <Heading level={5}>Menu</Heading>

                  <Stack flexDirection="column" gap={12}>
                    <Link href="/" size="xl">
                      <a>Home</a>
                    </Link>
                    <Link href="/" size="xl">
                      <a>About</a>
                    </Link>
                    <Link href="/" size="xl">
                      <a>Projects</a>
                    </Link>
                    <Link href="/" size="xl">
                      <a>Bookmarks</a>
                    </Link>
                  </Stack>
                </div>
              </div>

              <footer>
                <Heading level={5}>Get in touch</Heading>
                {/* TODO: Email contact component */}
              </footer>
            </div>
          </div>
          <AnimatePresence>
            {isNavOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={toggleIsNavOpen}
                className={styles.nav__overflow}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
