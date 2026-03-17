# Формы

---

✅ Используй типизированные формы

```ts
type ArticleForm = FormGroup<{
  title: FormControl<string>;
  description: FormControl<string>;
}>;

@Injectable()
export class ArticleFormService extends AbstractFormService<ArticleForm, void> {
  init(): ArticleForm {
    this._form = this._formBuilder.group({
      title: this._formBuilder.nonNullable.control(""),
      description: this._formBuilder.nonNullable.control(""),
    });

    return this._form;
  }
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

✅ Используй одно обновление формы через patchValue

```ts
form.patchValue({
  title: article.title,
  description: article.description,
});
```

❌ Не обновляй каждый контрол отдельно

```ts
form.controls.title.setValue(article.title);
form.controls.description.setValue(article.description);
```

---

✅ Используй `(ngSubmit)` с `type="submit"`

❌ Не используй `(click)` с `type="button"`

---

✅ Используй `getRawValue()` для получения значения формы с `disabled` полями

---

✅ Если надо реализовать `ControlValueAccessor` используй `AbstractRtsControl` из `@rts/uikit`

❌ Не передавай контрол через `input`

---

✅ Используй uikit для вертски форм

```html
<rts-cdk-form-field>
  <rts-cdk-label>Электронная почта для уведомлений</rts-cdk-label>
  <rts-input
    [formControl]="organizationForm.controls.email"
    rtsInputEmailAddress
    [required]="true"
  />
  <rts-cdk-error>
    {{ makeEmailErrorMessage(organizationForm.controls.email) }}
  </rts-cdk-error>
</rts-cdk-form-field>
```

❌ Не пиши маркер обязательности (`*`) руками. Укажи `[required]="true"` на контроле

---

✅ Используй утилиты

- `withRequiredIf `

```ts
snils: this._formBuilder.control(organization.snils, {
  validators: withRequiredIf(
    organizationType === OrganizationTypeEnum.PhysicalPerson,
    SNILS_MIN_LENGTH_VALIDATOR,
  ),
});
```

- `isControlRequired`
- `touchAndValidityAll` – используется перед отправкой формы
- Если у контрола может быть несколько видов ошибок создай утилиту `makeSomeControlErrorMessage`

```ts
export const makeEmailErrorMessage = (control: FormControl): string | null => {
  if (control.hasError("required")) {
    return "Укажите адрес электронной почты. Пример: example@company.ru";
  }

  if (control.hasError("pattern")) {
    return "Пожалуйста, введите корректный адрес электронной почты. Пример: example@company.ru";
  }

  return null;
};
```
