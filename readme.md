## Краткая инструкция по работе
Для начала работы у вас должент быть установлен **Node.js**

### Основные команды для работы
- Установка - `npm i`
- Запуск локального сервера без минификаций - `npm start`
- Запуск локального сервера c минификациями, <br>
данный вариант не используется в разработке, <br>
он нужен только для тестов производительности <br>
на локальном хосте  - `npm run dev`
- Сборка проекта, минификация скриптов <br>
и оптимизация изображений перед деплоем на прод - `npm run build`
- Запуск тестирования на соответствия кодгайдам - `npm test`
- Создание webp изображений в директории source - `npm run webp`

### Вся разработка ведётся в директории `source`
### Итоговый код попадает в директорию `build`

Проект занял по дням весь период работы на проекте, по 2-3 часа в день каждый день.
Время распределял так чтобы не работать как на гредировании по 10 часов в день)))

npm run lint-js
ругается на tabs.js

C:\Users\admin\VSCodeProjects\fitness-self-test\source\js\modules\tabs\tabs.js
   14:16  error  'entry' is never reassigned. Use 'const' instead                           prefer-const
   85:9   error  'height' is never reassigned. Use 'const' instead                          prefer-const
  152:14  error  'key' is never reassigned. Use 'const' instead                             prefer-const
  153:22  error  Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins
  335:41  error  Unexpected string concatenation                                            prefer-template
  343:39  error  Unexpected string concatenation                                            prefer-template

этот компонент я брал уже готовый с Лиги решений

Спасибо
