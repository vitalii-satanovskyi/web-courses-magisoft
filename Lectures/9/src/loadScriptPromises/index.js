// Результаты смотреть в консоли

/*****************************************************************/
/*                 1 - Version Promise                           */
/*****************************************************************/

function loadScript(src) {
  return new Promise(function(resolve, reject) {
    let script = document.createElement("script");
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));

    document.head.append(script);
  });
}

let promise = loadScript("./script.js");

promise.then(
  script => newFunction(),
  error => alert(`Ошибка: ${error.message}`)
);
