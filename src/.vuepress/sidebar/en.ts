import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "Servicios",
      icon: "laptop-code",
      prefix: "guide/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "Configuraciones",
      icon: "engine-code",
      prefix: "demo/",
      link: "demo/",
      collapsible: true,
      children: "structure",
    },
  ],
});
