# Задания DOM

## Резюме
Каждый раз, когда мы посещаем веб-страницу, наш браузер сначала отправляет запрос на сервер, запрашивая контент, и сервер отправляет ответ с HTML для этой страницы.

HTML в ответе сервера - это просто текст. Но когда браузер получает ответ, он анализирует этот текст на наличие объектов Javascript. Каждый объект представляет собой один элемент HTML, и они связаны друг с другом в древовидной структуре, представляющей текст HTML.

Этот набор объектов известен как  *document object model, или кратко - DOM.*

Если мы перевернем слова, то сможем сказать, что DOM моделирует документ. Обычно Вы начинаете взаимодействовать с DOM, используя переменную под названием `document`, которая представляет «корневой узел» - узел, который является родительским элементом всех других узлов HTML под ним.

DOM действует похожим образом. Мы можем получить доступ к узлам с определенными классами, получить их дочерние узлы и многое другое –и делаем это точно так же. В браузере мы взаимодействуем с DOM через JavaScript. Давайте посмотрим, как это работает.

## Release

### Release 0: HTML, DOM и инструменты Dev

Чтобы начать изучение DOM, мы рассмотрим документ HTML и то, как он представляется в браузере. В этом репозитории находится файл `index.html`. Можно заметить, что это довольно простой документ HMTL. Начнем с тега `<html>`. Вложенными в тег `<html>` являются теги `<head>` и `<body>`. Затем в теге `<body>` вложены большее количество тегов - `<header>` и `<main>`. Прочитайте файл, чтобы понять структуру HTML-документа. Какие еще элементы существуют? Как они организованы?

После того, как поймете структуру HTML, откройте `index.html` в браузере. Когда мы открываем файл, браузер получает текст документа и анализирует его в DOM. Каждый элемент HTML анализируется в объект DOM, а объекты DOM организуются в древовидную структуру (см. [Иллюстрация] [дерево узлов html5rocks]).

Мы можем изучить дерево DOM с помощью инструментов разработчика нашего браузера ([chrome dev tools] []). Если мы используем браузер Chrome, то найти DOM мы сможем на вкладке «Элементы». Древовидная структура DOM отображается как контур, который мы можем визуально исследовать, расширяя и сворачивая отдельные ветви. Когда наш курсор перемещается по узлу в контуре, то этот узел выделяется в режиме просмотра страницы. Это показано на Рисунке 1.

! [с помощью инструментов dev] (../readme-assets/aquapals-dev-tools.gif)
*Рисунок 1*. Использование инструментов разработчика Chrome для изучения DOM.

### Release 1: извлечение информации из DOM

DOM представляет собой объектно-ориентированное представление HTML-документа. И, как мы знаем, объекты предоставляют интерфейсы для взаимодействия с ними. Объекты DOM не являются исключением. В браузере мы можем взаимодействовать с DOM посредством JavaScript. В этом выпуске мы рассмотрим, как можно извлекать информацию из DOM.

Мы будем работать в консоли JavaScript браузера ([chrome console] []). Это часть инструментов dev. В Chrome он доступен на вкладке «Консоль». В этой консоли мы можем писать и выполнять JavaScript.

Мы получаем доступ к DOM через один объект: `document`. Что мы можем сделать с этим объектом? Это корень дерева DOM, и мы можем задать ему элемент с определенным идентификатором, элементами с определенным классом и т. д. Откройте консоль в инструментах dev и вытащите некоторую информацию из DOM; действуйте согласно коду на Рисунке 2.

```js
// Get the document object. (Зайдайте объект документа)
document;

// Get the title of the page. (Зайдайте заголовок страницы)
document.title;

// Get the element with the id "fish-list". (Зайдайте элемент с ID "fish-list")
document.getElementById("fish-list");

// Get all the <span> elements. (Зайдайте все элементы <span>)
document.getElementsByTagName("span");

// Get all the elements with the class "fish-list-card". (Зайдайте все элементы класса "fish-list-card".)
document.getElementsByClassName("fish-list-card");

// Get all the <h1> elements that descend from the element with the id "main". (Зайдайте все <h1> элементы, которые идут ниже эелемента с ID "main)
let main = document.getElementById("main");
main.getElementsByTagName("h1");

// Get the children of the first element with the class "fish-list-card". (Зайдайте дочерний элемент первого элемента с классом "fish-list-card".)
let firstCard = document.getElementsByClassName("fish-list-card")[0];
firstCard.children;

// Get the text inside the element with the id "wordmark". (Зайдайте текст внутри элемента с ID “wordmark")
let wordmark = document.getElementById("wordmark");
wordmark.innerText;

// Get the value of the id attribute of the first <span> tag. (Зайдайте значения атрибута ID первого <span> тега)
let firstSpan = document.getElementsByTagName("span")[0];
firstSpan.attributes["id"].value;
```
*Рисунок 2*.  Вытаскивание информации из DOM.

Теперь пришло время извлечь некоторую информацию из DOM самостоятельно. В консоли откройте ответы на следующие вопросы из DOM.

- Каков адрес, указанный на веб-странице?
- Как называется последняя рыба в списке?
- Какова значение атрибута `src` для изображения черного бандита-ангела?


### Release 2: Обновление DOM

Объекты DOM также предоставляют методы для внесения изменений в DOM. Например, мы можем изменять текст, который появляется на странице, добавлять классы к объектам и т. д. Мы можем даже создавать новые элементы и добавлять их в DOM. Мы продолжим работу в консоли с нашей страницей AquaPals. Действуйте согласно коду на Рисунке 3; по мере обновления DOM мы увидим изменения, отраженные в просмотре страницы.

```js
// Change the text inside the element with the id "wordmark". (Измените текст внутри элемента с ID “wordmark")
let wordmark = document.getElementById("wordmark");
wordmark.innerText = "Aqua-Pets";

// Add the class "light" to the element with the id "wordmark". (Добавьте класс "light" элементу с ID “wordmark")
wordmark.className += " light";

// Change the text inside the first <h1> tag in the element with the id "main". (Измените текст внутри первого <h1> тега в элементе с ID "main")
let main = document.getElementById("main");
let mainHeading = main.getElementsByTagName("h1")[0];
mainHeading.innerText = "Fish for $ale";

// Create a <footer> element and append it to the end of the <body>. (Создайте элемент <footer> и прикрепите его к концу <body>)
let footerText = document.createElement("span");
footerText.innerText = "AquaPals - 2016"
let footer = document.createElement("footer");
footer.id = "footer";
footer.className = "light flex-column";
footer.appendChild(footerText);
footer    // Take a look at the element we've built. (Взгляните на элемент, который создали)
let body = document.getElementById("body");
body.appendChild(footer);    // The footer element appears at the page view bottom.

// Update the styling of the <footer>. (Обновите стиль <footer>)
footer.style.paddingTop = "6em";
footer.style.paddingBottom = "6em";
```
*Рисунок 3*.  Обновление DOM через JavaScript.

Мы собираемся сделать некоторые обновления самостоятельно, но прежде чем сделать это, обновите страницу. Что случилось с нашими изменениями? Они исчезли! Почему? Помните, что когда страница загружается, браузер анализирует документ в DOM. DOM - это объект, который представляет HTML, но это не HTML. Когда мы редактируем DOM, мы меняем объекты только в дереве DOM. Мы не редактируем HTML-файл, из которого был создан DOM. Когда мы обновляем страницу, браузер повторно разбирает файл и создает новое дерево DOM.

Теперь пришло время обновить DOM самостоятельно. В консоли выполните следующие изменения.

- Измените название «Akindynos Clownfish» как «Clownfish».
- Добавьте другую рыбу в список, используя только Javascript (без редактирования файла HTML). Файл изображения предоставляется, а добавляемые элементы будут выглядеть так в HTML.

  ```
  <li id="fish-9" class="fish-list-card flex-column light">
      <img src="./images/green-wrasse.jpg" class="fish-list-card-image" alt="fish pic">
      <span class="fish-list-card-name">
        Green Wrasse
      </span>
  </li>
  ```

### Release 3: Прослушивание событий

Когда пользователи взаимодействуют с веб-страницей, они нажимают на элементы, подтверждают различные формы и т. д. Этими элементами являются события, для которых объекты DOM могут прослушиваться. Например, мы можем взять объект DOM и поручить ему прослушать информацию для пользователя, активируя этот объект щелчком. Когда мы это делаем, мы предоставляем функцию обратного вызова для ее выполнения в том случае, если происходит клик. Продолжая работать в консоли с нашей страницей AquaPals, добавьте прослушиватель событий. Действуйте согласно коду на Рисунке 4.


```js
// Define a function that will open an alert box. (Определите функцию, которая будет открываться в качестве предупреждения)
function alertWordmarkClick() { alert("You clicked the wordmark."); }

// Listen for click events on the element with the id "wordmark". (Слушайте клики на события с элементами, имеющими ID "wordmark")
let wordmark = document.getElementById("wordmark");
wordmark.addEventListener("click", alertWordmarkClick);
```
*Рисунок 4*.  Добавление прослушивания событий к объектам DOM.

Мы настроили устройство для прослушивания событий таким образом, чтобы по щелчку на слово «AqualPals» открывалось окно предупреждения. Возможно, пользователь нажмет на словосочетание, а возможно и нет. Но если это произойдет, то обязательно откроется окно предупреждения.
Отлично, теперь давайте продолжим и нажмем на словосочетание для того, чтобы открыть окно предупреждения!


## Выводы

В этой задаче мы исследовали объектную модель документа и способы взаимодействия с ней. Когда браузер делает HTTP-запрос, и сервер отвечает посредством HTML, то браузер анализирует HTML при помощи DOM. DOM является объектно-ориентированным представлением HTML. Объекты, которые содержат DOM, предоставляют интерфейсы, которые мы можем использовать для взаимодействия с ними. В браузере мы взаимодействуем с DOM вместе с использованием JavaScript. Это позволяет нам извлекать информацию из DOM, обновлять DOM, а также слушать и реагировать на события.


[chrome консоль]: https://developer.chrome.com/devtools#console
[chrome dev tools]: https://developer.chrome.com/devtools
[html5rocks tree tree]: http://www.html5rocks.com/en/tutorials/internals/howbrowserswork/#DOM
