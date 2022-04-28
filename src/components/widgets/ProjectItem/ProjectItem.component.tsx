import { Heading, Link, Paragraph, Tag } from "@components/elements";
import { Stack } from "@components/layout";
import Image from "next/image";
import { useRouter } from "next/router";

import { Project } from "@core/types/projects/Project";

import styles from "./ProjectItem.module.scss";

export interface ProjectItemProps {
  data: Project;
}

export function ProjectItem({ data }: ProjectItemProps) {
  const router = useRouter();

  const { slug, title, shortDescription, image_url, tags } = data;

  function handleClick() {
    router.push(`/projects/${slug}`);
  }

  return (
    <div className={styles.projectItem} onClick={handleClick}>
      <div className={styles.projectItem__image}>
        {image_url && <Image src={image_url} alt={title} />}
      </div>

      <div className={styles.projectItem__content}>
        <Heading level={3}>{title}</Heading>
        <Paragraph mt="12" mb="16">
          {shortDescription}
        </Paragraph>
        <Stack gap={8} flexWrap="wrap">
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
