import createMiddleware from 'next-intl/middleware';

const middleware = createMiddleware({
  locales: ['es'],
  defaultLocale: 'es',
});

export default middleware;

export const config = {
  matcher: ['/', '/(es)/:page*'],
};
