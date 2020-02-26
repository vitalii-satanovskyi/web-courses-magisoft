// !!! Примеры запускать по очереди !!!
// Раскомментированным оставлять только примерк, который хотите запустить
// Результаты смотреть в консоли

/*****************************************************************/
/*                 1 - Version without callback                  */
/*****************************************************************/

function loadScript(src) {
  const script = document.createElement("script");
  script.src = src;
  document.head.append(script);
}

loadScript("./script.js");
// newFunction еще не доступна нам
newFunction();

/*****************************************************************/
/*                  2 - Version with callback                    */
/*****************************************************************/

// function loadScript(src, callback) {
//   const script = document.createElement("script");
//   script.src = src;
//   script.onload = () => callback(script);
//   document.head.append(script);
// }

// loadScript("./script.js", () => {
//   newFunction();
// });

/*****************************************************************/
/*       3 - Version with callback and handeling errors       */
/*****************************************************************/

// function loadScript(src, callback) {
//   let script = document.createElement("script");
//   script.src = src;

//   script.onload = () => callback(null, script);
//   script.onerror = () =>
//     callback(new Error(`Не удалось загрузить скрипт ${src}`));

//   document.head.append(script);
// }

// loadScript("./script.js", () => {
//   newFunction();
// });
