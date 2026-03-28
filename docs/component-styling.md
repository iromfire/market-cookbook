# Стили <Badge type="warning" text="Не подтверждено командой" />

## Переменные

✅ Используй CSS-переменные из UI Kit для:

- цветов
- типографики
- отступов
- скруглений
- теней

❌ Не хардкодь значения

❌ Не используй SCSS-переменные

## Layout

✅ Используй `flex`, `grid` и их возможности

✅ Предпочитай `gap` вместо `margin`

❌ Не задавай фиксированную ширину без необходимости. Верстка должна быть резиновой

## Структура стилей

✅ Минимальная вложенность

✅ Используй селекторы по классу

❌ Не используй:

- БЭМ
- селекторы по тегу (`div`, `span`)
- `id` селекторы
- сложные селекторы

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
<ui-status type="success">Active</ui-status>
<ui-status type="error">Failed</ui-status>
<ui-status type="warning">Pending</ui-status>
```

❌ Не дублируй классы

```html
<div class="status status-success">Active</div>
<div class="status status-error">Failed</div>
<div class="status status-warning">Pending</div>
```

## Глобальные стили

❌ Не используй `::ng-deep`

✅ Если нужны исключения:

- вынеси в глобальные стили
- или обсуди с дизайнером, почему в этом месте сделали иначе, чем обычно
