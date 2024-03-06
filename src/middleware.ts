import createMiddleware from 'next-intl/middleware';

const middleware = createMiddleware({
  // Add locales you want in the app
  locales: ['fr', 'en'],

  // Default locale if no match
  defaultLocale: 'fr'
});

export default middleware;

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en|fr)/:page*']
};
