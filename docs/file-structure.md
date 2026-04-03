# Файловая структура <Badge type="warning" text="Не подтверждено командой" />

Следуем принципам:

- **LIFT** [Angular Style Guide — LIFT](https://v17.angular.io/guide/styleguide#lift)
  - **L**ocate — файлы лежат рядом с местом использования
  - **I**dentify — понятные и предсказуемые имена
  - **F**lat — избегаем лишней вложенности
  - **T**ry to be DRY — не дублируем код по возможности
- **Pages First**
  - Основная единица структуры — UI страница (или группа страниц, связанная одним смыслом), а не сущности или домены как на BE.
  - Вся логика страницы находится рядом со страницей.

## Основные директории

### 📁 features

> Крупные разделы приложения, которые подключаются через **роутинг**. Обычно это **страница** или **группа связанных страниц**

#### Пример:

```
features/
├── procedure/
│   ├── quotation-session/
│   ├── single-supplier/
│   ├── price-request/
│   └── shared/
└── companies-catalog/
```

::: tip ℹ️
Страницы можно и нужно группировать по смыслу, несмотря на то что иногда они делаются в отдельных PBI.
Например: `user-management`: `user-list`, `add-user`, `edit-user`
:::

❌ Не клади feature на самый верхний уровень в `app`. Все feature должны лежать внутри `features`

❌ Не импортируй одну feature в другую

---

#### Переиспользование:

- общее внутри feature → `features/<feature>/shared`
- общее для всего проекта → `shared` или `libs`

---

#### Структура внутри `features/<feature>`:

✅ Храни связанные файлы **вместе по смыслу**, а не по типу. [Angular Style Guide — Organize by feature areas](https://angular.dev/style-guide#organize-your-project-by-feature-areas)

✅ Держи структуру плоской до тех пор, пока это возможно

**Когда делим:**

- 7 элементов внутри папки → **ОБЯЗАТЕЛЬНО** делим на подпапки (папка тоже считается как элемент)

**Как делим:**

- 📌 **Основной и обязательный способ** — группировка по смыслу
- 🚫 Деление на `components` / `services` и т.п. **запрещено по умолчанию**
- ⚠️ Разрешено **только если невозможно адекватно выделить смысловые группы** (скорее всего стоит пересмотреть структуру и границы)

:::details Пример

В папке стало больше **7** элементов (10), надо создавать подпапки

```
organization-page/
├── organization-page.component.ts
├── organization-page.component.html
├── organization-page.component.scss
├── organization-form.service.ts
├── organization-inn-kpp-async.validator.ts
├── passport-form.service.ts
├── individual-entrepreneur-about-block/
├── judicial-person-about-block/
├── physical-person-about-block/
└── passport-block/
```

❌ Деление по типу

```
organization-page/
├── organization-page.component.ts
├── organization-page.component.html
├── organization-page.component.scss
├── components/
│   ├── individual-entrepreneur-about-block/
│   ├── judicial-person-about-block/
│   ├── passport-block/
│   └── physical-person-about-block/
├── services/
│   ├── organization-form.service.ts
│   └── passport-form.service.ts
└── inn-kpp-async.validator.ts
```

✅ Деление по смыслу

```
organization-page/
├── organization-page.component.ts
├── organization-page.component.html
├── organization-page.component.scss
├── organization/
│   ├── individual-entrepreneur-about-block/
│   ├── judicial-person-about-block/
│   ├── physical-person-about-block/
│   ├── organization-form.service.ts
│   └── inn-kpp-async.validator.ts
└── passport/
    ├── passport-block/
    └── passport-form.service.ts
```

:::

---

❌ Не используй деление по слоям: `domain`, `application`, `adapters`, `presentation`, `infrastructure`

---

##### Итого пример структуры

✅

```
procurement/
├── procurement-list-page/
├── procurement-create-page/
├── procurement-details-page/
└── shared/
```

:::details Смотреть полностью

```
procurement/
├── procurement-list-page/
│   ├── procurement-list-page.component.ts
│   ├── procurement-list-page.state.ts
│   ├── filters/
│   │   ├── filters.component.ts
│   │   ├── filters.service.ts
│   │   └── filters.utils.ts
│   ├── table/
│   │   ├── table.component.ts
│   │   └── table.utils.ts
│   └── bulk-actions/
│       ├── bulk-actions.component.ts
│       └── bulk-actions.service.ts

├── procurement-create-page/
│   ├── procurement-create-page.component.ts
│   ├── procurement-create-page.state.ts
│   ├── type-selector/
│   │   ├── type-selector.component.ts
│   │   └── type-selector.service.ts
│   ├── common-form/
│   │   ├── common-form.component.ts
│   │   ├── common-form.service.ts
│   │   └── common-form.validators.ts
│   ├── goods/
│   │   ├── goods.component.ts
│   │   ├── goods.service.ts
│   │   ├── goods.model.ts
│   │   └── goods.utils.ts
│   ├── services/
│   │   ├── services.component.ts
│   │   ├── services.service.ts
│   │   └── services.model.ts
│   ├── tender/
│   │   ├── tender.component.ts
│   │   ├── tender.service.ts
│   │   └── tender.rules.ts
│   └── attachments/
│       ├── attachments.component.ts
│       └── attachments.service.ts

├── procurement-details-page/
│   ├── procurement-details-page.component.ts
│   ├── header/
│   │   └── header.component.ts
│   ├── timeline/
│   │   ├── timeline.component.ts
│   │   └── timeline.utils.ts
│   ├── participants/
│   │   ├── participants.component.ts
│   │   └── participants.service.ts
│   └── decisions/
│       ├── decisions.component.ts
│       ├── decisions.service.ts
│       └── decisions.rules.ts

└── shared/
    ├── procurement.model.ts
    ├── procurement.mapper.ts
    ├── procurement-status.utils.ts
    └── procurement.constants.ts
```

:::

❌

```
procurement/
├── components/
├── services/
├── utils/
├── models/
├── rules/
├── mappers/
└── constants/
```

:::details Смотреть полностью

```
procurement/
├── components/
│   ├── procurement-list-page.component.ts
│   ├── procurement-create-page.component.ts
│   ├── procurement-details-page.component.ts
│   ├── filters.component.ts
│   ├── table.component.ts
│   ├── bulk-actions.component.ts
│   ├── type-selector.component.ts
│   ├── common-form.component.ts
│   ├── goods.component.ts
│   ├── services.component.ts
│   ├── tender.component.ts
│   ├── attachments.component.ts
│   ├── header.component.ts
│   ├── timeline.component.ts
│   ├── participants.component.ts
│   └── decisions.component.ts
├── services/
│   ├── procurement-list.service.ts
│   ├── procurement-create.service.ts
│   ├── filters.service.ts
│   ├── bulk-actions.service.ts
│   ├── type-selector.service.ts
│   ├── common-form.service.ts
│   ├── goods.service.ts
│   ├── services.service.ts
│   ├── tender.service.ts
│   ├── attachments.service.ts
│   ├── participants.service.ts
│   └── decisions.service.ts
├── utils/
│   ├── filters.utils.ts
│   ├── table.utils.ts
│   ├── goods.utils.ts
│   ├── timeline.utils.ts
│   └── procurement-status.utils.ts
├── models/
│   ├── procurement.model.ts
│   ├── goods.model.ts
│   └── services.model.ts
├── rules/
│   ├── tender.rules.ts
│   └── decisions.rules.ts
├── mappers/
│   └── procurement.mapper.ts
└── constants/
    └── procurement.constants.ts
```

:::

---

#### Импорты в рамках одной feature:

✅ Используй относительные пути, когда работаешь с файлами внутри одной feature

```ts
import { UserCardComponent } from '../ui/user-card.component';
import { UserService } from '../data/user.service';
```

❌ Не используй абсолютный импорт внутри той же feature

```ts
import { UserCardComponent } from '@root/features/user/ui/user-card.component';
import { UserService } from '@root/features/user/data/user.service';
```

---

### 📦 libs

> Полноценный **изолированный модуль с логикой**, который используется как отдельная внутренняя библиотека (как npm пакет) и не привязан к конкретной странице

**Пример:**

- `address`
- `okpd2`
- `search`
- `phone`
- `crypto`

❌ Не используй деление по слоям: `domain`, `application`, `adapters`, `presentation`, `infrastructure`

---

### 🧩 shared

> Переиспользуемые примитивы без доменной логики — общие элементы и утилиты, не привязанные к конкретной странице

**Пример:**

- `components`
- `utils`
- `pipes`
- `directives`

❌ Не используй `common`. Он `deprecated`

❌ Не размазывай по `shared` то, что можно собрать в одну `libs`.

Например вместо:

- `shared/address-input`
- `shared/address-validator`
- `shared/address-utils`

лучше сделать:

`libs/address`

## Взаимодействие директорий

- `shared` → базовый слой, ни от кого не зависит
- `libs` → могут использовать `shared`
- `features` → могут использовать `libs` и `shared`

## Barrel Imports (`index.ts`)

### Создание

Делаем **один** `index.ts` на директорию и экспортируем только то, что **используется снаружи**, скрывая внутреннюю реализацию.

**Пример:**

На уровне `libs/address` один `index.ts` — точка входа в библиотеку.

**Legacy директории:**

Для старых директорий используйте скрипт, который заменит все импорты на **относительные внутри папки**

```bash
npx tsx scripts/replace-imports.ts src/app/<папка>
```

После этого удалите неиспользуемые `index.ts` вручную

### Использование

Импорты выполняем только через публичный API (`index.ts`) модуля. Используем алиасы (`@shared/utils`, `@libs/phone`)
— это сохраняет инкапсуляцию и защищает от поломок при рефакторинге.

✅

```ts
import { formatDate } from '@shared/utils';
import { parsePhone } from '@libs/phone';
```

❌

```ts
import { formatDate } from '@shared/utils/lib/date/format-date';
import { parsePhone } from '@libs/phone/internal/parser';
```

## Куда положить файл?

| Уровень           | Папка                 | Вопрос для размещения                          | Примеры                                                       |
| ----------------- | --------------------- | ---------------------------------------------- | ------------------------------------------------------------- |
| **Блок**          | `feature/page/block/` | Нужно только этому UI блоку?                   | `order-form.validators.ts`, `orders-filter.utils.ts`          |
| **Страница**      | `feature/page/`       | Нужно нескольким блокам одной страницы?        | `order-create-page.usecase.ts`                                |
| **Feature**       | `feature/shared/`     | Нужно нескольким страницам фичи?               | `orders.store.ts`, `orders.service.ts`, `order-status-badge/` |
| **Бизнес-логика** | `libs/`               | Нужно нескольким фичам, но это логика?         | `crypto.service.ts`, `Okpd2SelectorComponnent`                |
| **UI / Утилиты**  | `shared/`             | Нужно нескольким фичам, но это UI или утилита? | `ButtonComponent`, `date.utils.ts`, `pipes`                   |
| **Приложение**    | `core/`               | Singleton на всё приложение?                   | `auth.interceptor.ts`, `error-handler.service.ts`             |
