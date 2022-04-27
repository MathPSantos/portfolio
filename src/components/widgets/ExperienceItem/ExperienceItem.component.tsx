import { ReactNode } from "react";

import { Heading, Link } from "@components/elements";

import styles from "./ExperienceItem.module.scss";

interface ExperienceItemProps {
  title: string;
  company: string;
  companyUrl: string;
  initialDate: string;
  finalDate?: string;
  description: ReactNode;
}

export function ExperienceItem({
  title,
  company,
  companyUrl,
  initialDate,
  finalDate,
  description,
}: ExperienceItemProps) {
  return (
    <div className={styles.experience}>
      <Heading level={3}>
        {title}{" "}
        <Link href={companyUrl} passHref>
          <a target="_blank">@{company}</a>
        </Link>
      </Heading>

      <p className={styles.experience__date}>
        {initialDate} - {finalDate || "Current"}
      </p>

      <div>{description}</div>
    </div>
  );
}
