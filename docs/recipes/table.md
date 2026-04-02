# Таблица <Badge type="warning" text="Не подтверждено командой" />

---

✅ Используй `cdk-table`

❌ Не используй `p-table`, не пиши таблицу сам

---

✅ Используй директиву `marketTable` для стилизации, вручную задавай только ширину столбцов

❌ Не пиши стили самостоятельно

```html
<cdk-table marketTable="secondary" />
```

```css
.market-table {
  .cell {
    &:nth-child(1) {
      flex-grow: 2;
    }
    &:nth-child(2) {
      flex-grow: 1;
    }
    &:nth-child(3) {
      flex-grow: 1;
    }
  }
}
```

---

✅ Используй `DataSource` для сложных таблиц (сортировка, пагинация)

❌ Для простых таблиц достаточно массива или `Observable` (статические данные)

```ts
export declare type CdkTableDataSourceInput<T> =
  | readonly T[]
  | DataSource<T>
  | Observable<readonly T[]>;
```

---

✅ Используй `rtsSorting` директиву для сортировки

❌ Не реализуй сортировку вручную
