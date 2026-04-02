# Use Case <Badge type="warning" text="Не подтверждено командой" />

Use Case — это законченный пользовательский сценарий, описывающий **действие пользователя** и полный бизнес-флоу системы от входа до результата.

Главная цель — изолировать поведение системы на уровне сценариев.

## Зачем это нужно

Инкапсуляция логики в Use Case даёт:

- независимое добавление новых сценариев без влияния на существующие
- безопасное изменение текущих сценариев
- простое удаление устаревших сценариев
- явную структуру бизнес-логики (всё лежит в сценариях, а не размазано по сервисам)

## Правила

✅ Реализуй интерфейс `UseCase` из `@rts/ddd`

✅ Описывай **действие пользователя**, а не техническую операцию

- `SignContract`
- `PlaceOrder`
- `Login`
- `RegisterUser`

**Пример:**

```ts
export class SignContractUseCase implements UseCase<
  { contractId: string; cert: Certificate },
  { contractId: string }
> {
  private readonly _contractRepo = inject(ContractRepository);
  private readonly _cryptoService = inject(CryptoService);

  execute(params: { contractId: string; cert: Certificate }) {
    const { contractId, cert } = params;

    return this._contractRepo.getById(contractId).pipe(
      switchMap((contract) => {
        if (!isCertificateValid(cert)) {
          return throwError(() => new Error("Invalid certificate"));
        }

        return this._cryptoService.sign(contract, cert);
      }),
      switchMap((signedContract) => {
        return this._contractRepo.save(signedContract);
      }),
      map(() => ({ contractId })),
    );
  }
}
```

---

❌ Не превращай Use Case в утилиты или низкоуровневые операции:

- `Validate...`
- `Get...`
- `Calculate...`
- `IsSomething...`

**Пример:**

```ts
export class IsCertificateValidUseCase implements UseCase<
  Certificate,
  boolean
> {
  execute(cert: Certificate): boolean {
    return (
      !!cert &&
      new Date() >= cert.validFrom &&
      new Date() <= cert.validTo &&
      !cert.revokedList.includes(cert.serialNumber)
    );
  }
}
```

Такие вещи выносятся в утилиты или сервис:

```ts
export const isCertificateValid = (cert: Certificate): boolean =>
  !!cert &&
  new Date() >= cert.validFrom &&
  new Date() <= cert.validTo &&
  !cert.revokedList.includes(cert.serialNumber);
```

## Критерий проверки

Если Use Case нельзя описать как:

> "Пользователь делает X"

— значит это не Use Case.
