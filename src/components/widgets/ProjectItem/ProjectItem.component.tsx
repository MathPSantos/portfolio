import { Heading, Paragraph, Tag } from "@components/elements";
import { Stack } from "@components/layout";
import { Project } from "@core/types/projects/Project";
import Image from "next/image";

import styles from "./ProjectItem.module.scss";

export interface ProjectItemProps {
  data: Project;
}

export function ProjectItem({ data }: ProjectItemProps) {
  const { title, description, image_url, tags } = data;

  return (
    <div className={styles.projectItem}>
      <div className={styles.projectItem__image}>
        {image_url && <Image src={image_url} alt={title} />}
      </div>

      <div className={styles.projectItem__content}>
        <Heading level={3}>{title}</Heading>
        <Paragraph mt="12" mb="16">
          {description}
        </Paragraph>
        <Stack gap={8}>
          {tags?.map((tag, index) => (
            <Tag key={index} variant={index === 0 ? "primary" : "secondary"}>
              {tag}
            </Tag>
          ))}
        </Stack>
      </div>
    </div>
  );
}
