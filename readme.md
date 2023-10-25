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

ПРОВЕРКА:<br>
<img src="https://github.com/asupstudent/fitness-training/workflows/project-check/badge.svg?branch=main"><br>
ДЕПЛОЙ:<br>
<img src="https://github.com/asupstudent/fitness-training/workflows/deploy-to-github-pages/badge.svg?branch=main"><br>
