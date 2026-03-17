# API

## HTTP

✅ Все API должно быть сгенерировано автоматически. См. `@ui-api`

❌ Не писать API вручную

```
@ui-api
├─ repositories
├─ models
└─ enums
```

## WebSocket

✅ Взаимодействие через `NgEventBus`

❌ Не обрабатывай событие без проверки id сущности
