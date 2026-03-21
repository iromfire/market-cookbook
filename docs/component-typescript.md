# Компонент <Badge type="warning" text="Не подтверждено командой" />

Эта страница содержит лучшие практики и рекомендации по написанию TypeScript-классов в Angular компонентах.

## Общие правила

- только standalone компоненты
- для небольших компонентов держи шаблон и стили в одном файле
- инициализируй значения сразу при объявлении, если это возможно

## Signals API

Используй современные сигнальные API Angular:

- `input`
- `output` / `outputFromObservable`
- `model`
- `signal`
- `computed`
- `effect`
- `viewChild` / `viewChildren`
- `contentChild` / `contentChildren`

::: tip ℹ️

Многие API поддерживают `required`

:::

---

### Двусторонний биндинг

❌

```ts
selected = input(false);
selectedChange = output<boolean>();
```

✅

```ts
selected = model(false);
```

## Lifecycle hooks

❌ Старайся избегать lifecycle хуков:

- `ngOnInit`
- `ngOnChanges`
- `ngOnDestroy`
- `ngDoCheck`
- `ngAfterContentInit`
- `ngAfterContentChecked`
- `ngAfterViewInit`
- `ngAfterViewChecked`
- `afterEveryRender`
- `afterNextRender`

### Альтернативы

- инициализировать компонент в `constructor`, вместо `ngOnInit`
- `computed()` и `effect()`
- `viewChild()` / `viewChildren()`
- `takeUntilDestroyed()`
- сигналы и observable как основной инструмент

## Интерфейсы lifecycle

Если используешь lifecycle метод — обязательно реализуй интерфейс:

✅

```ts
export class UserPage implements OnInit {
  ngOnInit() {}
}
```

❌

```ts
export class UserPage {
  ngOnInit() {}
}
```
