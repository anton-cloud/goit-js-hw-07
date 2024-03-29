// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories,
//   то есть элементов li.item.Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет
// в консоль текст заголовка элемента(тега h2) и количество элементов
// в категории(всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

// ======================================================

const categoriesRef = document.querySelector("#categories");

const countLi = categoriesRef.children.length;

console.log(`В списке ${countLi} категории.`);

const itemRef = document.querySelectorAll(".item");

itemRef.forEach((item) => {
  const a = item.children[0].textContent;
  const b = item.children[1].children.length;
  console.log(`Категория: ${a}`);
  console.log(`Количество элементов: ${b}`);
});
