# Стили <Badge type="tip" text="Подтверждено командой" />

## Переменные

✅ Используй CSS-переменные из UI Kit (`base-variables.scss`) для:

- цветов
- типографики
- отступов
- скруглений
- теней

```css
.card {
  background: var(--rts-bg-secondary);
  font: var(--rts-font-text-m);
  padding: var(--rts-spacing-m);
  border-radius: var(--rts-radius-m);
  box-shadow: var(--rts-shadow-m);
}
```

::: tip ℹ️

Чтобы быстро найти переменную из UI Kit (например цвет по hex из Figma), ищи по значению в `node_modules`.

:::

❌ Не хардкодь значения

❌ Не используй SCSS-переменные

## Layout

✅ Используй `flex`, `grid` и их возможности

✅ Предпочитай `gap` вместо `margin`

❌ Не задавай фиксированную ширину без необходимости. Верстка должна быть резиновой

❌ Не используй отрицательные отступы `margin: -...`

## Структура стилей

✅ Используй упрощенный БЭМ

- Формат: `block-element` и `block-element--modifier`
- Минимальная вложенность
- Имена классов должны быть осмысленными (по [Google CSS Style Rules](https://google.github.io/styleguide/htmlcssguide.html#CSS_Style_Rules))

```scss
.rts-dialog {
  &-header {
  }

  &-body {
  }

  &-footer {
    &--divided {
    }

    &--center {
    }
  }
}
```

❌ Не используй

- Селекторы по тегу (`div`, `span`)
- `id` селекторы
- Сложные селекторы

```css
.a .b > div span {
}
```

## Консистентность

✅ Используй один подход: утилитарные стили или классы

```html
<div class="rts-text_body-m">Title</div>
<div class="card-title">Title</div>
```

❌ Не смешивай их на одном элементе

```html
<div class="rts-text_body-m card-title">Title</div>
```

## Angular-специфика

✅ Используй class + style binding

```html
<div [class.error]="hasError"></div>
<div [style.width.px]="200"></div>
```

❌ Не используй

```html
<div [ngClass]="{ error: hasError }"></div>
<div [ngStyle]="{ width: '200px' }"></div>
```

✅ Стилизуй host

```css
:host {
  padding: 16px;
}
```

❌ Не создавай внутри ненужную обертку

```html
<div class="card">...</div>
```

```css
.card {
  padding: 16px;
}
```

✅ Выноси в компонент дублирующиеся стили

```html
<ui-status variant="success">Active</ui-status>
<ui-status variant="error">Failed</ui-status>
<ui-status variant="warning">Pending</ui-status>
```

❌ Не дублируй классы

```html
<div class="status status--success">Active</div>
<div class="status status--error">Failed</div>
<div class="status status--warning">Pending</div>
```

## Глобальные стили

❌ Не используй `::ng-deep`

✅ Если нужны исключения:

- вынеси в глобальные стили
- или обсуди с дизайнером, почему в этом месте сделали иначе, чем обычно
