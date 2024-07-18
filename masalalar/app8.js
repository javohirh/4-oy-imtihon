const h1El = document.querySelector(".h1");
const inputEl = document.querySelector(".form-control");
const btnEl = document.querySelector(".btn");

/*8-masala Array qabul qiluvchi funksiya yarating va u funksiya arrayni ichidagi elementlarini teskari qilsin reverse ishlatish mumkin emas*/

btnEl.addEventListener("click", function () {
  reverseOrder(inputEl.value);
});

function reverseOrder(array) {
  const num2 = array.split("");

  let arr = [];
  for (let i = num2.length - 1; i >= 0; i--) {
    arr.push(num2[i]);
  }
  return (h1El.innerHTML = arr);
}

//  agar arrayda qiladigan bo'lsak ichidagi split bo'lmaydi

// let num = [1, 2, 3, 4];
// function reverseOrder1(array) {
//   let arr = [];
//   for (let i = array.length - 1; i >= 0; i--) {
//     arr.push(array[i]);
//   }
//   return arr;
// }
// console.log(reverseOrder1(num));
