# 🎨 Стили <Badge type="warning" text="Не подтверждено командой" /> <Badge type="tip" text="Новое" />

## Переменные

✅ Используй CSS-переменные (цвета, шрифты, скругления, тени, отступы) из UIkit

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

✅ Используй style binding

```html
<div [style.width.px]="200"></div>
```

❌ Не используй

```html
<div [ngStyle]="{ width: '200px' }"></div>
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
- или уточни у дизайнера
