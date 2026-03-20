# Use Case <Badge type="warning" text="Не подтверждено командой" />

UseCase — это завершённый сценарий, описывающий действие пользователя и полный бизнес-флоу системы.

Инкапсулирование функциональности в рамках usecase позволяет нам:

- во-первых, добавлять в систему новые пользовательские сценарии, не затрагивая существующие
- во-вторых, изменять отдельные пользовательские сценарии, не затрагивая текущие
- в третьих, так же быстро удалять сценарии по требованию

---

✅ Реализуй интерфейс `UseCase` из `@rts/ddd`

✅ Описывай действие пользователя

Пример: `SignContract`, `PlaceOrder`, `Login`

```ts
export class SignContractUseCase implements UseCase<
  { contractId: string; cert: Certificate },
  { contractId: string }
> {
  private readonly _contractRepo = inject(ContractRepository);
  private readonly _cryptoService = inject(CryptoService);

  execute({ contractId, cert }: { contractId: string; cert: Certificate }) {
    const contract = this._contractRepo.getById(contractId);

    if (!isCertificateValid(cert)) {
      throw new Error("Invalid certificate");
    }

    const signedContract = this._cryptoService.sign(contract, cert);

    this._contractRepo.save(signedContract);

    return { contractId };
  }
}
```

❌ Не описывай действие разработчика

Пример: `Validate...`, `Get...`, `Calculate...`

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

Лучше domain util (или сервис, в зависимости от задачи)

```ts
export const isCertificateValid = (cert: Certificate): boolean =>
  !!cert &&
  new Date() >= cert.validFrom &&
  new Date() <= cert.validTo &&
  !cert.revokedList.includes(cert.serialNumber);
```
