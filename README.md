# Svg Icons To SvgPrite

## зависимости

```
svgo tsx fs-extra glob node-html-parser
```

## Как использовать

```
yarn build:svg
npm build:svg
```

В папке svg/icons лежат наши иконки для проекта, в svg/optimize лежат оптимизированные иконки при помощи svgo. Команда build:svg делает оптимизацию иконок из папки icons в папку optimize, потом выполняется скрипт build.ts , он делает спрайт и копирует в src/assets/icons
