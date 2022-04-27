import { Section, HeroSection, Splitshow, Layout } from "@components/layout";
import { ProjectItem } from "@components/widgets";
import {
  Heading,
  Paragraph,
  Strong,
  Button,
  Kbd,
  EmailContact,
} from "@components/elements";

import { OwnLeftArrowIcon } from "@core/shared/icons";
import { BoxComponent } from "@core/shared/components";
import { Project } from "@core/types/projects/Project";

import { MAX_WIDTH_TEXT } from "@styles/contants";
import { useRouter } from "next/router";

const PROJECTS_DATA: Project[] = [
  {
    title: "financee.",
    description:
      "A mobile app to help you centralize your incomes, withdraws and investments.",
    tags: ["Product", "Design", "Code", "Mobile"],
  },
  {
    title: "Taco app",
    description:
      "Platform made to help nutricionists to consult the Brazilian Table of Food Composition (TACO).",
    tags: ["Design", "Code", "Mobile", "Web"],
  },
];

function Home() {
  const router = useRouter();

  return (
    <Layout>
      <HeroSection
        preTitle="Hey, I’m Matheus Santos"
        title="Frontend Developer and Designer and Myself"
        description={
          <>
            I’m a software enginner (sometimes a designer), always seeking to
            helping people with solutions. Currently, I’m focused on bulding,
            coding and designing human-centered solutions at{" "}
            <Strong>Infosys</Strong>.
          </>
        }
        PosDescElement={
          <Paragraph mt="72">
            Press <Kbd>tab</Kbd> or <Kbd>ctrl</Kbd> + <Kbd>...</Kbd> to interect
            with the page
          </Paragraph>
        }
      />

      <Section>
        <Heading level={2}>Trying to make some difference</Heading>
        <Paragraph mt="24" maxW={MAX_WIDTH_TEXT}>
          Hey! I’m Matheus Santos and I love to solve my and other people
          problems. My interest in web development started back in 2018, when I
          started a System Development Technician course and have my first
          contact with <Strong>React</Strong>.{" "}
        </Paragraph>
        <Paragraph mt="16" maxW={MAX_WIDTH_TEXT}>
          During this last years I’ve had the privilege to work in{" "}
          <Strong>a start-up, a school based technology institute</Strong> and{" "}
          <Strong>a huge corporation</Strong>. My main focus nowadays is
          building and teaching accessible, inclusive and awesome products and
          digital experiences for everyone.
        </Paragraph>
        <Button
          mt={32}
          rightIcon={<OwnLeftArrowIcon />}
          onClick={() => router.push("/about")}
        >
          Learn more about me
        </Button>
      </Section>

      <Section>
        <Heading level={2}>What I’ve been working on</Heading>
        <Paragraph mt="24" maxW={MAX_WIDTH_TEXT}>
          As a problem solver, I’m always searching new things to create. You
          can see some projects I’ve be working on in the section bellow.
        </Paragraph>

        <Splitshow
          mt="60"
          isAlined
          items={PROJECTS_DATA}
          ChildComponent={ProjectItem}
        />

        <BoxComponent d="flex" justifyContent="center">
          <Button mt={72} mx="auto" rightIcon={<OwnLeftArrowIcon />}>
            See all projects
          </Button>
        </BoxComponent>
      </Section>

      <Section mt={120} mb={200}>
        <Heading>Let’s talk?</Heading>
        <Paragraph mt="24" maxW={MAX_WIDTH_TEXT}>
          My inbox is always open! Have a question or only want to talk about
          someting? Send a message and I’ll always do my best to get back to
          you!
        </Paragraph>
        <EmailContact mt="64" />
      </Section>
    </Layout>
  );
}

export default Home;
