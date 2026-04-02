import { defineConfig } from "vitepress";

const base = "/market-cookbook/";

export default defineConfig({
  lang: "ru-RU",
  base: base,
  head: [["link", { rel: "icon", href: `${base}favicon.svg` }]],
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
          {
            text: "Компонент",
            collapsed: false,
            items: [
              { text: "Шаблон", link: "/component-template" },
              { text: "Стили", link: "/component-styling" },
              { text: "TypeScript class", link: "/component-typescript-class" },
            ],
          },
          { text: "Сервис", link: "/service" },
          { text: "Формы", link: "/forms" },
          { text: "Состояние", link: "/state-management" },
          { text: "Use Case", link: "/use-case" },
          { text: "API", link: "/api" },
          { text: "Code Style", link: "/code-style" },
          { text: "DI", link: "/dependency-injection" },
        ],
      },

      {
        items: [
          { text: "Таблица", link: "/recipes/table" },
          { text: "Файлы", link: "/recipes/files" },
          { text: "Электронная подпись", link: "/recipes/crypto" },
          { text: "Модальное окно", link: "/recipes/modal" },
          { text: "Загрузка и скелетоны", link: "/recipes/loading" },
          { text: "Каталог", link: "/recipes/catalog" },
          { text: "Капча", link: "/recipes/captcha" },
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
