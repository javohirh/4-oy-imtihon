const h1El = document.querySelector(".h1");
const h2El = document.querySelector(".h2");
const inputEl = document.querySelector(".form-control");
const btnEl = document.querySelector(".btn");
let arr = [10, 20, 30, 40, 50];
h2El.textContent = `Sizning arrayda quyidagi raqamlar bor ${arr} qaysi raqamni indexini topmoqchisiz`;
/* 3-masala Berilgan arraydagi elementning indexini qaytaruvchi funksiya tuzing. let arr = [10, 20, 30, 40, 50];
let element = 30;
 // Output: Index of 30 in array: 2

element = 15;
 // Output -1*/

btnEl.addEventListener("click", function () {
  findIndex2(arr, +inputEl.value);
  console.log(findIndex(arr));
});

function findIndex2(num, item) {
  const index = num.indexOf(item);
  if (index === -1) {
    return (h1El.innerHTML = -1);
  } else {
    return (h1El.innerHTML = `index of ${item} in array: ${index}`);
  }
}

// for orqali consoleda chiqadi

function findIndex(num) {
  let item = +inputEl.value;
  for (let i = 0; i < num.length; i++) {
    if (num[i] === item) {
      return `index of ${item} in array: ${i}`;
    }
  }

  return -1;
}
