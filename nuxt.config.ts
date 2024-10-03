export default defineNuxtConfig({
  ssr: false, // Disable server-side rendering for static hosting
  app: {
    baseURL: '/my-portfolio/',  // Replace with actual repository name
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/google-fonts"]
})
