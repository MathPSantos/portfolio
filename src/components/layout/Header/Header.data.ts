interface HeaderLink {
  label: string;
  href: string;
  passHref: boolean;
}

export const HEADER_SOCIALS: HeaderLink[] = [
  {
    label: "Github",
    href: "https://github.com/MathPSantos",
    passHref: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mathpsantos/",
    passHref: true,
  },
  // {
  //   label: "Youtube",
  //   href: "",
  //   passHref: true,
  // },
];

export const HEADER_PAGES: HeaderLink[] = [
  {
    label: "Home",
    href: "/",
    passHref: false,
  },
  {
    label: "About",
    href: "/about",
    passHref: false,
  },
  // {
  //   label: "Projects",
  //   href: "/projects",
  // },
  // {
  //   label: "Bookmarks",
  //   href: "/bookmarks",
  // },
];
