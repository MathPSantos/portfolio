import { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import { EmailContact, Heading, Link } from "@components/elements";
import { Stack } from "../Stack/Stack.component";

import { MoonIcon, GlobeIcon } from "../../../core/shared/icons";

import styles from "./Header.module.scss";
import { HEADER_PAGES, HEADER_SOCIALS } from "./Header.data";

export function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function toggleIsNavOpen() {
    setIsNavOpen((prev) => !prev);
  }

  return (
    <header className={styles.container}>
      <div className={styles.wrappper}>
        <div className={styles.content}>
          <NextLink href="/">
            <a>
              <Image
                src="/assets/logo.svg"
                alt="Math Dev. Logo"
                height={23}
                width={38}
              />
            </a>
          </NextLink>

          <div className={styles.actions}>
            {/* <MoonIcon /> */}

            {/* <GlobeIcon /> */}

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

        <nav
          className={[styles.nav, isNavOpen ? styles.navOpen : ""].join(" ")}
        >
          <div className={styles.nav__content}>
            <div className={styles.nav__main}>
              <div className={styles.nav__mainLinks}>
                <Heading level={5}>Social</Heading>

                <Stack flexDirection="column" gap={12}>
                  {HEADER_SOCIALS.map((i) => (
                    <Link key={i.href} {...i}>
                      <a target="_blank" rel="noreferrer">
                        {i.label}
                      </a>
                    </Link>
                  ))}
                </Stack>
              </div>

              <div className={styles.nav__mainLinks}>
                <Heading level={5}>Menu</Heading>

                <Stack flexDirection="column" gap={12}>
                  {HEADER_PAGES.map((i) => (
                    <Link key={i.href} size="xl" {...i}>
                      <a>{i.label}</a>
                    </Link>
                  ))}
                </Stack>
              </div>
            </div>

            <footer>
              <Heading level={5}>Get in touch</Heading>
              <EmailContact mt="12" />
            </footer>
          </div>

          {/* Background Illustration */}
          <div className={styles.illustration}>
            <Image
              src="/assets/background.svg"
              alt="Background Illustration"
              height={704}
              width={968}
            />
          </div>
        </nav>

        {/* Overflow */}
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
    </header>
  );
}
