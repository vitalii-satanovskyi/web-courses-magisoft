# Использование JS для создания интерактивности на странице

- Функции, контекст, привязка контекста;
- Работа с DOM, events, event propagation;
- Event delegation;
- Debounce для событий скрола, ресайза, автозаполнения;

---

## Function Declaration

```
  function showMessage() {
    alert( 'Hello everyone!' );
  }
```

- Значения переданные в функцию копируются в локальные переменные
- Функция может возвращать значение, если return не указан, либо вызывается без значения - функция возвращает undefined
- Имеет объект arguments
- Всплывает

---

## Локальные переменные

Локальные переменные - переменные объявленные внутри функции

```
  function showMessage() {
    let MESSAGE = "Hello, I'm JavaScript!"; // local variable

    alert( MESSAGE );
  }

  showMessage(); // Hello, I'm JavaScript!

  alert( MESSAGE ); // <-- Error! The variable is local to the function
```

---

## Внешние переменные

Пример 1.
Функция обладает полным доступом к внешним переменным и может изменять их значение.

```
let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  alert(message);
}

showMessage(); // Hello, John
```

---

## Внешние переменные

Пример 2. Внешняя переменная используется, только если внутри функции нет такой локальной.

```
let userName = 'John';

function showMessage() {
  userName = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + userName;
  alert(message);
}

alert( userName ); // John before the function call

showMessage();

alert( userName ); // Bob, the value was modified by the function
```

---

## Параметры функции

Мы можем передать внутрь функции любую информацию, используя параметры (также называемые аргументы функции).

```
function showMessage(from, text) { // arguments: from, text
  alert(from + ': ' + text);
}

showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage('Ann', "What's up?"); // Ann: What's up? (**)
```

---

## Параметры по умолчанию

Если параметр не указан, то его значением становится undefined.

```
function showMessage(from, text) {

  from = '*' + from + '*'; // немного украсим "from"

  alert( from + ': ' + text );
}

showMessage("Аня"); // Такой вызов выведет "Аня: undefined".
```

```
function showMessage(from, text = "текст не добавлен") {
  alert( from + ": " + text );
}

showMessage("Аня"); // Аня: текст не добавлен
```

Теперь, если параметр text не указан, его значением будет "текст не добавлен"

---

## Возвращение значения
