const h1El = document.querySelector(".h1");
const inputEl = document.querySelector(".form-control");
const btnEl = document.querySelector(".btn");

// 1-masala   String holda raqamlar beriladi va uni teskari arrayga aylantiruvchi
// funksiya tuzing. Misol uchun: "34567" => [7, 6, 5, 4, 3]

function reverseOrder(array) {
  const num2 = array.split("").map(Number);
  const arr = num2.reverse();
  return (h1El.innerHTML = arr);
}
btnEl.addEventListener("click", function () {
  reverseOrder(inputEl.value);

  console.log(reverseOrder1(inputEl.value));
});

// for orqali consoleda chiqadi

function reverseOrder1(array) {
  const num2 = array.split("").map(Number);

  let arr = [];
  for (let i = num2.length - 1; i >= 0; i--) {
    arr.push(Number(num2[i]));
  }
  return arr;
}
