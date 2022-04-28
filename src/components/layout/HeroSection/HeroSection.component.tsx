import { Heading, Paragraph } from "../../elements";
import { Section } from "../Section/Section.component";

import { MAX_WIDTH_TEXT } from "@styles/contants";

import styles from "./HeroSection.module.scss";
import Image from "next/image";

interface HeroSectionProps {
  preTitle?: string;
  title: string;
  description?: string | JSX.Element;
  PosDescElement?: JSX.Element;
}

export function HeroSection({
  preTitle,
  title,
  description,
  PosDescElement,
}: HeroSectionProps) {
  return (
    <div className={styles.container}>
      <Section>
        {preTitle && <Paragraph mb="16">{preTitle}</Paragraph>}

        <Heading>{title}</Heading>

        {description && (
          <Paragraph mt="24" maxW={MAX_WIDTH_TEXT}>
            {description}
          </Paragraph>
        )}

        {PosDescElement}
      </Section>

      <div className={styles.background}>
        <Image
          src="/assets/background.svg"
          alt="Background Illustration"
          height={704}
          width={968}
        />
      </div>
    </div>
  );
}
