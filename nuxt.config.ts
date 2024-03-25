// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@sidebase/nuxt-auth'],
  auth: {
    //globalAppMiddleware: true,
    baseURL: process.env.AUTH_ORIGIN,
    provider: {
      type: 'authjs',
      // endpoints: {
      //   signIn: { path: '/login', method: 'post' },
      //   signOut: { path: '/auth/logout', method: 'get' },
      //   signUp: { path: '/auth/register', method: 'post' },
      //   getSession: { path: '/auth/me', method: 'get' },
      // },
      // pages: {
      //   login: '/auth/login',
      // },
      // token: {
      //   signInResponseTokenPointer: '/accessToken',
      // },
      // sessionDataType: {},
    },
    // enableSessionRefreshPeriodically: 5000,
    // enableSessionRefreshOnWindowFocus: true,
    // globalMiddlewareOptions: {
    //   allow404WithoutAuth: true, // Defines if the 404 page will be accessible while unauthenticated
    //   addDefaultCallbackUrl: '/', // Where authenticated user will be redirected to by default
    // },
  },
  css: ['~/styles/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
