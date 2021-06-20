// Напиши скрипт который, при наборе текста в инпуте
// input#name - input(событие input), подставляет его
// текущее значение в span#name - output.Если инпут пустой,
// в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

const ref = {
  input: document.querySelector("#name-input"),
  name: document.querySelector("#name-output"),
};

ref.input.addEventListener("input", onInput);

function onInput(event) {
  if (ref.input.value === "") {
    return (ref.name.textContent = "незнакомец");
  }
  ref.name.textContent = ref.input.value;
}
