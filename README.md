# Alfa Future Client

React, TypeScript и Vite. Установка и запуск:

```bash
npm install
npm run dev
```

Проверки: `npm run lint` и `npm run build`.

## Структура

- `src/app` — инициализация приложения и глобальные стили.
- `src/pages` — страницы; текущая страница: `home`.
- `src/widgets` — крупные блоки интерфейса.
- `src/features` — пользовательские действия.
- `src/entities` — предметные сущности.
- `src/shared` — общие компоненты и утилиты.

Создавайте слайсы по мере необходимости. В каждом слайсе экспортируйте внешний API через `index.ts` и импортируйте другие слайсы только через этот файл. Пример: `import { HomePage } from '../pages/home'`.

Направление зависимостей: `app → pages → widgets → features → entities → shared`. Не добавляйте прямые зависимости между слайсами одного слоя.
