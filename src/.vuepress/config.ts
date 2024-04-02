import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,

});