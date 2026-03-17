import { defineConfig } from "vitepress";

export default defineConfig({
  base: "/market-cookbook/",
  title: "Market Cookbook",
  description: "Как мы пишем код",
  themeConfig: {
    nav: [
      { text: "Главная", link: "/" },
      { text: "Документация", link: "/file-structure" },
    ],
    sidebar: [
      {
        items: [
          { text: "Файловая структура", link: "/file-structure" },
          { text: "Компонент", link: "/component" },
          { text: "Формы", link: "/forms" },
          { text: "Состояние", link: "/state-management" },
          { text: "Use Case", link: "/use-case" },
          { text: "API", link: "/api" },
          { text: "Code Style", link: "/code-style" },
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
