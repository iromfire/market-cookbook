import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Market Cookbook",
  description: "Как мы пишем код",
  themeConfig: {
    nav: [
      { text: "Главная", link: "/" },
      { text: "Документация", link: "/forms" },
    ],

    sidebar: [
      {
        text: "Codestyle",
        items: [{ text: "Формы", link: "/forms" }],
      },
    ],
  },
});
