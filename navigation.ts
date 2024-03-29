import { createLocalizedPathnamesNavigation, Pathnames } from 'next-intl/navigation';

export const locales = ['en', 'fr'] as const;

export const pathnames = {
  '/': '/',

  '/?menu=true': '/?menu=true',

  '/about': {
    en: '/about',
    fr: '/a-propos'
  },

  '/about?menu=true': {
    en: '/about?menu=true',
    fr: '/a-propos?menu=true'
  },

  '/work': {
    en: '/work',
    fr: '/projets'
  },

  '/work/[projectName]': {
    en: '/work/[projectName]',
    fr: '/projets/[projectName]'
  },

  '/work/[projectName]?menu=true': {
    en: '/work/[projectName]?menu=true',
    fr: '/projets/[projectName]?menu=true'
  },

  '/work?menu=true': {
    en: '/work?menu=true',
    fr: '/projets?menu=true'
  },

  '/contact': '/contact',

  '/contact?menu=true': '/contact?menu=true',

  '/legal': '/legal'
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, pathnames });
