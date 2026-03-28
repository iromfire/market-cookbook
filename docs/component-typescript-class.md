# TypeScript class <Badge type="warning" text="Не подтверждено командой" />

## Общие правила

✅ Standalone

✅ OnPush

✅ Инициализируй свойства при объявлении — избегай отложенной инициализации (`ngOnInit` и т.д.)

✅ Подписки только через async. Или конвертация в `signal` (`toSignal`). Минимум ручных `subscribe()`

✅ Single File Component (SFC) – для небольших компонентов держи шаблон и стили в одном файле

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
- `signal` и `Observable` как основной инструмент

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
