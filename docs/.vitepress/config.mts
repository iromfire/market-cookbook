import { defineConfig } from "vitepress";

export default defineConfig({
  base: "/MarketCookbook/",
  title: "Market Cookbook",
  description: "Как мы пишем код",
  themeConfig: {
    nav: [
      { text: "Главная", link: "/" },
      { text: "Документация", link: "/form" },
    ],
    sidebar: [
      {
        text: "Codestyle",
        items: [
          { text: "Формы", link: "/form" },
          { text: "API", link: "/api" },
        ],
      },
    ],
    docFooter: {
      prev: "Предыдущая",
      next: "Следующая",
    },

    outline: {
      label: "Содержание",
    },
  },
});
