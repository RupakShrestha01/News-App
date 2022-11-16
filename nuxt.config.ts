import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  meta: {
    title: "News-Patra",
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "",
      },
    ],
  },

  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },

  css: ["~/assets/css/main.css"],
});
