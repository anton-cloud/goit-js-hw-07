// // Напиши скрипт, который реагирует на изменение значения
// input#font - size - control(событие input) и изменяет
// инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

// // <input id="font-size-control" type="range" />
// // <br />
// // <span id="text">Абракадабра!</span>

const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

inputRef.addEventListener(
  "input",
  () => (textRef.style.fontSize = `${inputRef.value}px`)
);
