export const themeData = JSON.parse("{\"encrypt\":{\"config\":{\"/demo/encrypt.html\":[\"$2a$10$Vk3saS5sNx1As41rfP.GL.XF69L252vFvRkN8T3mRgYa1Jmtj772u\"],\"/zh/demo/encrypt.html\":[\"$2a$10$YgL3L5bobSEeuXyGLwgX6uZxAivqwbHiV.8H12FRAXZcbm6ba1Z8O\"]}},\"author\":{\"name\":\"Mr.Hope\",\"url\":\"https://mister-hope.com\"},\"logo\":\"https://www.bantotal.com/wp-content/uploads/2017/11/nuevo-logo-web_Mesa-de-trabajo-1.png\",\"repo\":\"vuepress-theme-hope/vuepress-theme-hope\",\"docsDir\":\"src\",\"locales\":{\"/\":{\"lang\":\"en-US\",\"navbarLocales\":{\"langName\":\"English\",\"selectLangAriaLabel\":\"Select language\"},\"metaLocales\":{\"author\":\"Author\",\"date\":\"Writing Date\",\"origin\":\"Original\",\"views\":\"Page views\",\"category\":\"Category\",\"tag\":\"Tag\",\"readingTime\":\"Reading Time\",\"words\":\"Words\",\"toc\":\"On This Page\",\"prev\":\"Prev\",\"next\":\"Next\",\"lastUpdated\":\"Last update\",\"contributors\":\"Contributors\",\"editLink\":\"Edit this page on GitHub\",\"print\":\"Print\"},\"outlookLocales\":{\"themeColor\":\"Theme Color\",\"darkmode\":\"Theme Mode\",\"fullscreen\":\"Full Screen\"},\"encryptLocales\":{\"iconLabel\":\"Page Encrypted\",\"placeholder\":\"Enter password\",\"remember\":\"Remember password\",\"errorHint\":\"Please enter the correct password!\"},\"routeLocales\":{\"skipToContent\":\"Skip to main content\",\"notFoundTitle\":\"Page not found\",\"notFoundMsg\":[\"There’s nothing here.\",\"How did we get here?\",\"That’s a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"back\":\"Go back\",\"home\":\"Take me home\",\"openInNewWindow\":\"Open in new window\"},\"navbar\":[\"/\",\"/demo/\",{\"text\":\"Guide\",\"icon\":\"lightbulb\",\"prefix\":\"/guide/\",\"children\":[{\"text\":\"Bar\",\"icon\":\"lightbulb\",\"prefix\":\"bar/\",\"children\":[\"baz\",{\"text\":\"...\",\"icon\":\"ellipsis\",\"link\":\"#\"}]},{\"text\":\"Foo\",\"icon\":\"lightbulb\",\"prefix\":\"foo/\",\"children\":[\"ray\",{\"text\":\"...\",\"icon\":\"ellipsis\",\"link\":\"#\"}]}]}],\"sidebar\":{\"/\":[\"\",{\"text\":\"Servicios\",\"icon\":\"laptop-code\",\"prefix\":\"guide/\",\"collapsible\":true,\"children\":\"structure\"},{\"text\":\"Configuraciones\",\"icon\":\"engine-code\",\"prefix\":\"demo/\",\"link\":\"demo/\",\"collapsible\":true,\"children\":\"structure\"}]},\"footer\":\"Default footer\",\"displayFooter\":true}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
