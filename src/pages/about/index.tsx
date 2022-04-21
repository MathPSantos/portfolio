import { Heading, Paragraph, Scrollspy, Strong } from "@components/elements";
import { HeroSection, Layout, Section, Stack } from "@components/layout";

import styles from './About.module.scss';

const SPY_LIST_ITEMS = [
  {
    id: 'intro',
    label: 'Intro',
  },
  {
    id: 'contact',
    label: 'First contact with tech',
  },
  {
    id: 'worked',
    label: 'Where I’ve worked',
  },
  {
    id: 'present',
    label: 'Present',
  },
  {
    id: 'future',
    label: 'Wishes for the future',
  }
]

function About() {
  return (
    <Layout title="math.dev | About">
      <HeroSection
        preTitle="Just about me!"
        title="Everyday trying to be a little more me"
        description="Here you can know more about myself, things that I experienced, my professional carrer and my goals. Enjoy it!"
      ></HeroSection>

      <div className={styles.container}>
        <div className={styles.content}>

        <Section id="intro">
          <Heading level={2}>Intro</Heading>
          <Paragraph mt="24">
            I’m a software enginner (sometimes a designer), always seeking to
            helping people with solutions. Currently, I’m focused on bulding,
            coding and designing human-centered solutions at{" "}
            <Strong>Infosys</Strong>.
          </Paragraph>
        </Section>

        <Section id="contact">
          <Heading level={2}>First contact with tech</Heading>
          <Stack flexDirection="column" mt="24" gap={16}>
            <Paragraph>
              My first contact with technology was with my father in 2015. He was
              a developer and one day I decided to see what his work was like, but
              it was only in 2018 that I wrote my first line of code with C++ at
              the school&apos;s robotics championship.
            </Paragraph>
            <Paragraph>
              In robotics I also had contact with electronics and mechanics, but
              it was programming that I fell in love with. I participated in some
              Brazilian (<Strong>OBR</Strong>) and international (
              <Strong>FIRST Robotics Competition</Strong>) robotics championships.
            </Paragraph>
            <Paragraph>
              In the robotics team, I had the opportunity to participate in the
              development of projects with the aim of spreading science and
              technology to students from public and private schools throughout
              Brazil. These projects allowed us to receive{" "}
              <Strong>Rookie All Star</Strong> awards at the{" "}
              <Strong>regional championships in Tech Valley, NY</Strong>, and the{" "}
              <Strong>Houston World Championships</Strong> from the FIRST Robotics
              Competition.
            </Paragraph>
            <Paragraph>
              From 2019 to 2020 I took the Systems Development Technician course
              at SENAI, during the course I developed and learned about project
              development processes and where I had my first contact with Front
              End development. At the end of 2020 I got my first job as a React
              Developer at <Strong>Intelitrader</Strong>.
            </Paragraph>
            <Paragraph>
              During these last years I worked on several projects in companies,
              finished the Multimedia Technician course and create new solutions
              to the world.
            </Paragraph>
          </Stack>
        </Section>

        <Section id="worked">
          <Heading level={2}>Where I’ve worked</Heading>
        </Section>

        <Section id="present">
          <Heading level={2}>Present</Heading>
          <Paragraph mt="24">
            I&apos;m currently working at Infosys, where I aim to develop
            human-centric solutions through code and design. In addition to my
            work, I also produce content about programming, design and working on
            the internet.
          </Paragraph>
        </Section>

        <Section id="future">
          <Heading level={2}>Wishes for the future</Heading>
          <Stack flexDirection="column" mt="24" gap={16}>
            <Paragraph>
              In the not too distant future I intend to be able to reach more
              people through knowledge sharing and education. I intend to be part
              of NGOs focused on racial struggles, human and animal rights and
              science and technology education.
            </Paragraph>
            <Paragraph>
              Above all, in the future I want to be fighting for a fairer, freer
              and more plural world, because without us we are nothing.
            </Paragraph>
          </Stack>
        </Section>
        </div>

        <div className={styles.sidebar}>
          <Scrollspy listItems={SPY_LIST_ITEMS} />
        </div>
      </div>
    </Layout>
  );
}

export default About;
