# Модальное окно <Badge type="warning" text="Не подтверждено командой" />

## Сервис

✅ Используй `OverlayService` из `@rts/uikit`

```ts
this._overlayService.openDialog(EisYearlyPaymentDialogComponent, {
  data: {
    fromYear,
    toYear,
    contractPrice,
  },
  title: "Сведения об объемах оплаты долгосрочного договора",
  width: "640px",
});
```

::: tip ℹ️
Компонент должен наследоваться от `DialogComponent` из `@rts/uikit`

В классе будут доступны:

- `data` — данные, переданные при открытии (только в `ngOnInit`)
- `close()` — метод закрытия, который может принимать данные
  :::

::: tip ℹ️
Для открытия в формате сайдбара используй метод `openSidebar`
:::

❌ Не используй `NgbModal`, `DialogService`, `p-dialog`

## Нейминг

✅ Имя компонента должно заканчиваться на `Dialog`

- `FeedbackDialogComponent`
- `UserSettingsDialogComponent`

❌ Не используй в названии `Modal`, `Sidebar` и другие вариации

❌ Не опускай суффикс `Dialog`

- `FeedbackModalComponent`
- `FeedbackComponent`
- `UserSettingsSidebarComponent`

## Стили

✅ Используй готовые CSS классы из UI Kit

- `rts-dialog-content`
- `rts-dialog-content__title`
- `rts-dialog-footer`
- `rts-dialog-footer--center`
- `rts-dialog-footer--divided`

❌ Не пиши стили сам
