import Image from "next/image";

import styles from "./Header.module.scss";

import { MoonIcon, GlobeIcon } from "../../../core/shared/icons";

export function Header() {
  return (
    <header className={styles.container}>
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

          <div className={styles.burger}>
            <div />
            <div />
          </div>
        </div>
      </div>
    </header>
  );
}
