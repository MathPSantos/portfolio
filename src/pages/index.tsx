import { Heading, Link, Paragraph } from "@components/elements";
import { Main, Stack } from "@components/layout";
import { HEADER_SOCIALS } from "@components/layout/Header/Header.data";
import { BoxComponent } from "@core/shared/components";

export default function Maintenance() {
  return (
    <Main>
      <BoxComponent
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        h="100vh"
      >
        <Heading textAlign="center">Under Maintenance</Heading>
        <Paragraph textAlign="center" mt={28}>
          Soon the site will be back online, while you learn more about me in
          the links below
        </Paragraph>
        <Stack flexDirection="column" alignItems="center" mt={40}>
          {HEADER_SOCIALS.map((i, index) => (
            <Link key={index} {...i}>
              <a target="_blank">{i.label}</a>
            </Link>
          ))}
        </Stack>
      </BoxComponent>
    </Main>
  );
}
