import { GetStaticPaths, GetStaticProps } from "next";
import { gql } from "@apollo/client";

import { Project as TProject } from "@core/types/projects/Project";

import client from "@apolloClient";
import { HeroSection, Layout } from "@components/layout";

interface ProjectProps {
  data: TProject;
}

export default function Project({ data }: ProjectProps) {
  return (
    <Layout>
      <HeroSection title={data.title} description={data.shortDescription} />
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query {
        projects {
          slug
        }
      }
    `,
  });

  const { projects } = data;

  const paths = projects.map((project: TProject) => ({
    params: { slug: [project.slug] },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug?.[0];

  const { data } = await client.query({
    query: gql`
      query Project($slug: String!) {
        projects(where: { slug: $slug }) {
          title
          slug
          shortDescription
          tags
          content {
            __typename
            ... on ProjectSection {
              title
              description
            }
          }
        }
      }
    `,
    variables: { slug },
  });

  const { projects } = data;

  console.log(projects);

  return {
    props: {
      data: projects[0],
    },
  };
};
