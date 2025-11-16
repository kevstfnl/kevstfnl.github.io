import type { SEOProps } from "astro-seo";

const FAVICON_LINKS = [
  { rel: "icon", type: "image/svg+xml", href: "/assets/favicons/favicon.svg" },
  {
    rel: "icon",
    type: "image/png",
    sizes: "96x96",
    href: "/assets/favicons/android-chrome-96x96.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "192x192",
    href: "/assets/favicons/android-chrome-192x192.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "512x512",
    href: "/assets/favicons/android-chrome-512x512.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/assets/favicons/apple-touch-icon.png",
  },
  { rel: "shortcut icon", href: "/assets/favicons/favicon.ico" },
  { rel: "manifest", href: "/site.webmanifest" },
] as const;

export const DEFAULT_OG_IMAGE = "/assets/images/og-default.png";

const createDefaultSEO = (canonical: string): SEOProps => ({
  title: "Portfolio de Kevin Stefanelli - Développeur web fullstack",
  description:
    "Portfolio d'un développeur web FullStack, basé dans les alentours de marseille",
  canonical,
  openGraph: {
    basic: {
      title: "Kev Stfnl",
      type: "website",
      image: DEFAULT_OG_IMAGE,
      url: canonical,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Kev Stfnl",
    description: "Portfolio …",
    image: DEFAULT_OG_IMAGE,
  },
  extend: {
    link: [...FAVICON_LINKS],
  },
});

const mergeOpenGraph = (
  base?: SEOProps["openGraph"],
  extra?: SEOProps["openGraph"],
) => {
  if (!base && !extra) return undefined;
  const baseBasic = base?.basic;
  const extraBasic = extra?.basic;
  const basic = baseBasic || extraBasic;
  if (!basic) return undefined;

  return {
    basic: {
      ...baseBasic,
      ...extraBasic,
      url: extraBasic?.url ?? baseBasic?.url,
    },
    optional:
      base?.optional || extra?.optional
        ? { ...base?.optional, ...extra?.optional }
        : undefined,
    image:
      base?.image || extra?.image
        ? { ...base?.image, ...extra?.image }
        : undefined,
    article:
      base?.article || extra?.article
        ? { ...base?.article, ...extra?.article }
        : undefined,
  };
};

const mergeExtend = (base?: SEOProps["extend"], extra?: SEOProps["extend"]) => {
  if (!base && !extra) return undefined;

  const link = [...(base?.link ?? []), ...(extra?.link ?? [])];
  const meta = [...(base?.meta ?? []), ...(extra?.meta ?? [])];

  if (!link.length && !meta.length) return undefined;

  return {
    link: link.length ? link : undefined,
    meta: meta.length ? meta : undefined,
  };
};

const mergeTwitter = (
  base?: SEOProps["twitter"],
  extra?: SEOProps["twitter"],
) => {
  if (!base && !extra) return undefined;
  return {
    ...(base ?? {}),
    ...(extra ?? {}),
  };
};

export const buildSEOProps = (
  canonical: string,
  overrides?: SEOProps,
): SEOProps => {
  const defaultSEO = createDefaultSEO(canonical);
  if (!overrides) return defaultSEO;

  return {
    ...defaultSEO,
    ...overrides,
    canonical: overrides.canonical ?? defaultSEO.canonical,
    openGraph: mergeOpenGraph(defaultSEO.openGraph, overrides.openGraph),
    twitter: mergeTwitter(defaultSEO.twitter, overrides.twitter),
    extend: mergeExtend(defaultSEO.extend, overrides.extend),
  };
};
