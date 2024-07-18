const h1El = document.querySelector(".h1");
const h2El = document.querySelector(".h2");
const inputEl = document.querySelector(".form-control");
const btnEl = document.querySelector(".btn");

let arr = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
h2El.innerHTML = `Sizning birinchi arrayda ${arr} raqamlar mavjud <br/>  va  ikkinchi arrayda ${arr2} raqamlar mavjud `;
/* 6-masala Ikki array qabul qiladigan funksiya yasang va u funksiya ikki arrayni ichidagi raqamlarini yig’indisini qaytarsin.*/

function calcSum(arr, arr2) {
  let result = arr.concat(arr2);
  result = result.reduce((prev, current) => {
    return prev + current;
  }, 0);

  return (h1El.innerHTML = `  Ikkala arraydagi sonlar yig'indisi: ${result}   `);
}
calcSum(arr, arr2);
