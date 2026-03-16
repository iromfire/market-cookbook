# Формы

✅ Используй типизированные формы

```ts
type ArticleForm = FormGroup<{
  title: FormControl<string>;
  description: FormControl<string>;
}>;

@Injectable()
export class ArticleFormService extends AbstractFormService<ArticleForm, void> {
  this._form = this._formBuilder.group({
    title: this._formBuilder.nonNullable.control(''),
    description: this._formBuilder.nonNullable.control(''),
  });

  return this._form;
}
```

❌ Не используй enum для типизации форм

---

Используй преимущества типизации

**html:**

✅ `[formControl]="form.controls.title"`

❌ `formControlName="title"`

**typescript:**

✅ `form.controls.title`

❌ `form.get('title')`

---

✅ Выноси форму в `FormService`, если форма содержит более одного поля

✅ Наследуй FormService от `AbstractFormService`

❌ Не выноси если форма содержит одно поле, создай контрол в компоненте

```ts
searchControl = new FormControl("", { nonNullable: true });
```

---

✅ `FormService` должен занимать только формой

❌ Не добавляй поля, не связанные с формой

❌ Не добавляй лишние зависимости

❌ Не размещай бизнес-логику

---

✅ Используй `(ngSubmit)` с `type="submit`

❌ Не используй `(click)` с `type="button"`

---

✅ Если надо реализовать `ControlValueAccessor` используй `AbstractRtsControl` из `@rts/uikit`

---

✅ Используй `getRawValue()` для получения значения формы с `disabled` полями
