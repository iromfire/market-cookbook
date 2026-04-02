# Сервис <Badge type="warning" text="Не подтверждено командой" />

## Stateless

✅ По возможности делай stateless

```ts
export class OrderService {
  load(id: string) {
    return this.http.get<Order>(`/api/orders/${id}`);
  }

  confirm(order: Order) {
    return this.http.post("/api/confirm", order); // ✅ явные данные
  }
}
```

❌ Не делай сервисы stateful без причины

```ts
export class OrderService {
  private _order = signal<Order | null>(null);

  load(id: string) {
    return this.http.get<Order>(`/api/orders/${id}`).pipe(
      tap((order) => this._order.set(order)), // ❌ сохраняем без необходимости
    );
  }

  confirm() {
    return this.http.post("/api/confirm", this._order()); // ❌ скрытая зависимость
  }
}
```

## Public API

✅ Продумывай публичный API

::: tip ℹ️
Скрывай детали реализации (`private`) — отдавай наружу только необходимое (`public`)

API должен быть простым и понятным для пользователя сервиса, без лишних свойств/методов и сложности
:::

## RxJS

❌ Не делай `subscribe()` внутри сервиса

```ts
export class UserService {
  private readonly http = inject(HttpClient);
  private readonly _user = signal<User | null>(null);

  loadUser(): void {
    this.http.get<User>("/api/user").subscribe((user) => this._user.set(user));
  }
}
```

✅ `subscribe()` — там, где используется

```ts
export class UserService {
  private readonly http = inject(HttpClient);

  loadUser() {
    return this.http.get<User>("/api/user");
  }
}

// В компоненте
this.userService.loadUser().subscribe((user) => this._user.set(user));
```

## SRP

✅ Сервис должен иметь одну ответственность

```ts
export class TradeService {
  loadTrades() {}

  openTrade() {}
}

export class DealService {
  createDeal() {}
}
```

❌ Не смешивай

```ts
export class TradeService {
  loadTrades() {}

  openTrade() {}

  createDeal() {}
}
```
