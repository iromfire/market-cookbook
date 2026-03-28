# Шаблон <Badge type="warning" text="Не подтверждено командой" />

## Семантика

✅ Используй семантические теги

```html
<header>
  <h1>Welcome to my Website</h1>
</header>
<main>
  <section>
    <h2>Some important text</h2>
    <p>More details here in this description.</p>
  </section>
</main>
<footer>...</footer>
```

❌ Не заменяй всё на `div` и `span`

```html
<div class="header">
  <div>Welcome to my Website</div>
</div>
<div class="content">
  <div class="post">
    <div>Some important text</div>
    <div>More details here in this description.</div>
  </div>
</div>
<div class="footer">...</div>
```

## Вложенность

✅ Держи структуру плоской

```html
<section>
  <h2>Title</h2>
</section>
```

❌ Не добавляй лишние обёртки

```html
<div>
  <div>
    <div>
      <h2>Title</h2>
    </div>
  </div>
</div>
```

## Условный рендеринг

✅ Управляй отображением на уровне родителя

```html
@if (user) {
<app-profile />
}
```

❌ Не перекладывай это на дочерний

```html
@if (user) {
<div>Component html...</div>
}
```

## Простота шаблона

✅ Шаблон только про отображение

```html
{{ isVisible }}
```

❌ Не пиши составные условия в шаблоне

```html
{{ b1 && b2 || !b3 }}
```

::: tip ℹ️
Шаблон — декларативное отображение уже подготовленного состояния.  
Любая логика, трансформация и вычисления должны находиться вне шаблона.
:::

## Control Flow

✅ Используй встроенный control flow

```html
@for (item of items; track item.id) {
<div>{{ item.name }}</div>
}
```

❌ Не используй структурные директивы

```html
<div *ngFor="let item of items">{{ item.name }}</div>
```

## Ссылки vs кнопки

✅ Используй `<a>` для навигации (даже если выглядит как кнопка)

```html
<a routerLink="/profile" rtsPrimaryButton> Перейти в профиль </a>
```

❌ Не делай навигацию через `<button>`

```html
<button rtsPrimaryButton (click)="router.navigate(['/profile'])">
  Перейти в профиль
</button>
```

✅ Используй `<button>` для действий (даже если выглядит как ссылка)

```html
<button rtsDarkLink (click)="onLogout()">Выйти</button>
```

❌ Не делай действия через `<a>`

```html
<a rtsDarkLink (click)="onLogout()"> Выйти </a>
```

## Локальные переменные

✅ Сохраняй в локальные переменные через `@if (...; as ...)`

```html
@if (user.profile; as profile) {
<div>{{ profile.name }}</div>
<div>{{ profile.email }}</div>
}
```

❌ Не дёргай одно и то же выражение

```html
<div>{{ user.profile.name }}</div>
<div>{{ user.profile.email }}</div>
```
