## Разделение кода (code splitting)

- Ответы на вопросы
- Кахут
- Теория:
  - Программная навигация с useHistory
  - Обработка 404 c Redirect
  - Разделение кода
  - Вкладка Coverage
  - Динамический импорт модулей
  - [React.lazy](https://reactjs.org/docs/code-splitting.html#reactlazy)
  - Webpack chunks и magic comments
  - React.Suspense и fallback
  - [Инструкция по переходу на v6 в react-router-dom](https://reactrouter.com/docs/en/v6/upgrading/v5)

### Пофиксим баг в фильтре `CitiesBlock`

- в эфекте, если длина всех городов - 1, то очищаем фильтр

### Задача № 1

Пофиксим отображение активной ссылки в сайдбаре при переходе на индивидуальный
роут факультета (уберем проп `exact` из `NavLink` в `NavItem`)

### Задача № 2

Добавить кнопку `"Назад ко всем факультетам"` на страничку `DepartmentPage`

1. Сделаем так, чтобы мы всегда возвращались на ту страничку, с которой пришли
   (либо к факультетам, либо к университету)

- в `DepartmentsListPage` в `state` мы передаем объект с доп. информацией откуда
  мы пришли
- будем передавать два поля `label` и `from`
- в `label` укажем будущий текст на кнопке возврата, например,
  `'Назад ко всем факультетам'`
- теперь в `DepartmentPage` текст на кнопке подставим - `location.state.label`

2. Делаем так, чтобы информация не терялась при переходе по внутренней навигации

- для этого в `DepartmentPage` в `NavLink` также будем передавать объект с
  полями `pathname` и `state`
- только теперь в `state.label` будем прокидывать переданный нам текст
  `location.state.label`
- проверяем, как работает при переходе из университета

3. Делаем так, чтобы все не ломалось при открытии вкладки с вложенным путем в
   новом окне

- для этого в `DepartmentPage` в `handleGoBack`, в `BigButton` и в `NavLink` для
  начала проверяем наличие поля `state` в объектах (`?.`)
- потом добавляем запасной путь по умолчанию в `handleGoBack` - `"/departments"`
- и добавляем запасной текст на кнопку - `'Назад ко всем факультетам'`

### Задача № 3

Обработка неправильных путей

1. Основные пути:

- в `Main` в конце `Switch` добавим `Route` без пропа `path`, который будет
  рендерить `NotFoundPage`

2. Неверный `id` на страничке одного факультета

- в `DepartmentPage` при запросе на АПИ за факультетом по `id`, можно в `catch`
  переводить на страничку всех факультетов с помощью
  `history.replace('/departments')`
- тут же можно добавить тост с сообщением `'Факультет не найден'`

### Задача № 4

Сделать разделение кода по роутам, выполнив ленивую загрузку всех
страничек-компонентов

- в Main загружаем все странички с помощью
  [React.lazy](https://reactjs.org/docs/code-splitting.html#reactlazy):
  ```
  const DepartmentPage = lazy(() =>
    import('../../pages/DepartmentPage/DepartmentPage' /* webpackChunkName: "Department___page" */));
  ```
- проверим, как работает
- чтобы приложение не падало оборачиваем в React.Suspense весь Switch
- в пропе fallback будем использовать компонент Loader
- посмотрим как это выглядит в папочке build и на вкладке Coverage

### Задача № 5

Сделать так, чтобы при переходе на страничку одного факультета, мы видели сразу
`Описание`

- для этого в первом `Route` в `DepartmentPage` добавим проп `exact`, а в проп
  `path` передадим массив из двух путей - `[path, ${path}/description]`
- а в конце `Switch` добавим `Redirect` на `url` (`to={url}`)
- теперь пофиксим отображение активной вкладки `Описание`
- в первом `NavLink` используем проп `isActive`, чтобы определить, что линк
  активный:
  ```
  isActive={(match, location) => {
    return match?.isExact || location.pathname === url;
  }}
  ```
- чтобы было легче перейти на версию 6, заменим классический редирект
  `<Redirect to={url} />` на `Route`:
  ```
  <Route render={() => <Redirect to={url} />} />
  ```

### Вопросы:

- напомнить про применение useCallback
