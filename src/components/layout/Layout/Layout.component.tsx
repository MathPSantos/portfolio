import Head from "next/head";
import { ReactNode } from "react";
import { Footer } from "../Footer/Footer.component";
import { Header } from "../Header/Header.component";
import { Main } from "../Main/Main.component";

interface LayoutProps {
  title?: string;
  children: ReactNode;
}

export function Layout({ title = "math.dev", children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <Main>{children}</Main>
      <Footer mt="128" />
    </>
  );
}
