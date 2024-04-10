import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
    },
  },

  theme,

  plugins:[
    searchPlugin({
      isSearchable: (page) => page.path !== '/',
      getExtraFields: (page) => page.frontmatter.tags ?? [],
      locales: {
        '/': {
          placeholder: 'Search',
        },
        '/zh/': {
          placeholder: '搜索',
        },
      },
    }),
  ]  
  // Enable it with pwa
  // shouldPrefetch: false,

});