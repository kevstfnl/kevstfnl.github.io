import { GithubIcon, LinkedinIcon, type Icon } from "@lucide/astro";

export type SocialLink = {
  href: string;
  label: string;
  icon: typeof Icon;
}

export const socialLinks: SocialLink[] = [
  {
    href: "/linkedin",
    label: "Linkedin",
    icon: LinkedinIcon
  },
  {
    href: "/github",
    label: "Github",
    icon: GithubIcon
  },
]