import {Pathnames} from 'next-intl/navigation';

export const locales = ['fr', 'en'] as const;

export const pathnames = {
  '/': '/',
  '/steps': {
    fr: '/les-etapes',
    en: '/steps'
  },
  '/advantages': {
    fr: '/les-avantages',
    en: '/advantages'
  },
  '/founders': {
    fr: '/les-fondateurs',
    en: '/founders'
  },
  '/amazing-dubai': {
    fr: '/amazing-dubai',
    en: '/amazing-dubai'
  },
  '/amazing-dubai/[projectSlug]': {
    fr: '/amazing-dubai/[projectSlug]',
    en: '/amazing-dubai/[projectSlug]'
  },
  '/contact': {
    fr: '/nous-contacter',
    en: '/contact'
  },
  
  
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;