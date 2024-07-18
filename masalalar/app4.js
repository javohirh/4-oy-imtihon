const h1El = document.querySelector(".h1");
const h2El = document.querySelector(".h2");
const inputEl = document.querySelector(".form-control");
const btnEl = document.querySelector(".btn");

let arr = [10, 20, 31, 40, 50, 97];
h2El.textContent = `Sizning arrayda quyidagi raqamlar bor ${arr} va bu funksiya ularni toq va juftga o'zgartirib beradi`;
/* 4-masala Raqamlardan iborat array qabul qilib shu array ni ichidagi raqamlarni toq va juft arraylar ga ajratib shu arraylarni qiymatini array xolda qaytaring, misol uchun: [10, 31,2,6]; {juft: [10,2,6]; toq: [31] }*/

console.log(findEvenNum(arr));

function findEvenNum(num) {
  const result = { evenNum: [], oddNum: [] };
  num.map((item) => {
    if (item % 2 === 0) {
      result.evenNum.push(item);
    }
  });
  num.map((item) => {
    if (item % 2 !== 0) {
      result.oddNum.push(item);
    }
  });
  return (h1El.innerHTML = ` Juft sonlar: ${result.evenNum}  <br/>
     Toq sonlar: ${result.oddNum} `);
}

// for orqali consoleda chiqadi

function findOddNum(num) {
  const result = { evenNum: [], oddNum: [] };

  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
      result.evenNum.push(num[i]);
    } else {
      result.oddNum.push(num[i]);
    }
  }

  return result;
}

console.log(findOddNum(arr));
