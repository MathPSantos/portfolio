import { Header, Main, Section, HeroSection } from "@components/layout";
import { Heading, Paragraph, Strong } from "@components/elements/typography";
import { Button } from "@components/elements/forms";
import { Kbd } from "@components/elements/data-display";

import { MAX_WIDTH_TEXT } from "@styles/contants";
import { OwnLeftArrowIcon } from "@core/shared/icons";
import Head from "next/head";

function Home() {
  return (
    <>
      <Head>
        <title>math.dev</title>
      </Head>
      <Header />
      <Main>
        <HeroSection
          preTitle="Hey, I’m Matheus Santos"
          title="Front End Developer and Designer and Myself"
          description={
            <>
              I’m a software enginner (sometimes a designer), always seeking to
              helping people with solutions. Currently, I’m focused on bulding,
              coding and designing human-centered solutions at{" "}
              <Strong>Infosys</Strong>.
            </>
          }
          // posDescElement={
          //   <Paragraph mt="72">
          //     Press <Kbd>tab</Kbd> or <Kbd>ctrl</Kbd> + <Kbd>...</Kbd> to
          //     interect with the page
          //   </Paragraph>
          // }
        />

        <Section>
          <Heading level={2}>Trying to make some difference</Heading>
          <Paragraph mt="24" maxW={MAX_WIDTH_TEXT}>
            Hey! I’m Matheus Santos and I love to solve my and other people
            problems. My interest in web development started back in 2018, when
            I started a System Development Technician course and have my first
            contact with <Strong>React</Strong>.{" "}
          </Paragraph>
          <Paragraph mt="16" maxW={MAX_WIDTH_TEXT}>
            During this last years I’ve had the privilege to work in{" "}
            <Strong>a start-up, a school based technology institute</Strong> and{" "}
            <Strong>a huge corporation</Strong>. My main focus nowadays is
            building and teaching accessible, inclusive and awesome products and
            digital experiences for everyone.
          </Paragraph>
          <Button mt={32} rightIcon={<OwnLeftArrowIcon />}>
            Learn more about me
          </Button>
        </Section>

        <Section>
          <Heading level={2}>What I’ve been working on</Heading>
          <Paragraph mt="24" maxW={MAX_WIDTH_TEXT}>
            As a problem solver, I’m always searching new things to create. You
            can see some projects I’ve be working on in the section bellow.
          </Paragraph>
        </Section>

        <Section>
          <Heading>Let’s talk?</Heading>
          <Paragraph mt="24" maxW={MAX_WIDTH_TEXT}>
            My inbox is always open! Have a question or only want to talk about
            someting? Send a message and I’ll always do my best to get back to
            you!
          </Paragraph>
        </Section>
      </Main>
    </>
  );
}

export default Home;
