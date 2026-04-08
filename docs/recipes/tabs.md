# Табы <Badge type="warning" text="Не подтверждено командой" />

## С роутингом

✅ Используй нативное поведение ссылки `a` с `routerLink `

❌ Не пытайся использовать `rts-tab` с `routerLink `

❌ Не используй `getActiveTabIndexFromUrl `

**Пример:**

```ts
import { RouterTabComponent, RouterTabGroupComponent } from '@shared/components';
```

```html
<app-router-tab-group>
  <a routerTab routerLink="/home">Home</a>
  <a routerTab routerLink="/about">About</a>
</app-router-tab-group>
```

::: tip ℹ️

Таб можно заблокировать

```html
<a routerTab routerLink="/home" [disabled]="true">Home</a>
```

:::

## Без роутинга

[Документация табов в UI Kit](http://storybook-trunk.devtest.local/?path=/docs/%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-%D1%82%D0%B0%D0%B1%D1%8B--docs)
