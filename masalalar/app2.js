const h1El = document.querySelector(".h1");
const inputEl = document.querySelector(".form-control");
const btnEl = document.querySelector(".btn");

/* 2-masala  Berilgan raqamlardan tashkil topgan arrayni har birini qiymatini 2 baravar oshirib qaytaruvchi funksiya tuzing const numbers = [1, 2, 3, 4, 5];
console.log(doubleNumbers(numbers)); // [2, 4, 6, 8, 10] */

btnEl.addEventListener("click", function () {
  doubleNumbers2(inputEl.value);

  console.log(doubleNumbers(inputEl.value));
});

function doubleNumbers2(num) {
  const num2 = num.split("").map(Number);
  const result = num2.map((item) => {
    return item * 2;
  });

  return (h1El.innerHTML = result);
}

// for orqali consoleda chiqadi

function doubleNumbers(num) {
  const arr = [];
  const num2 = num.split("").map(Number);
  for (let i = 0; i < num2.length; i++) {
    arr.push(num2[i] * 2);
  }

  return arr;
}
