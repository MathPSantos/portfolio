import { Heading, Paragraph } from "../../elements";
import { Section } from "../Section/Section.component";

import { MAX_WIDTH_TEXT } from "@styles/contants";

import styles from "./HeroSection.module.scss";

interface HeroSectionProps {
  preTitle?: string;
  title: string;
  description: string | JSX.Element;
  posDescElement?: JSX.Element;
}

export function HeroSection({
  preTitle,
  title,
  description,
  posDescElement,
}: HeroSectionProps) {
  return (
    <div className={styles.container}>
      <Section>
        {preTitle && <Paragraph mb="16">{preTitle}</Paragraph>}
        <Heading>{title}</Heading>

        <Paragraph mt="24" maxW={MAX_WIDTH_TEXT}>
          {description}
        </Paragraph>

        {posDescElement}
      </Section>
    </div>
  );
}
