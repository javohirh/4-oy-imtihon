const h1El = document.querySelector(".h1");
const inputEl = document.querySelector(".form-control");
const btnEl = document.querySelector(".btn");

/*  9-masala
 	

String da raqam qabul qilib faqat oxirida 0 raqami bo'lsa ochirib tashlaydigan va qaytaradigan funksiya tuzing*/

btnEl.addEventListener("click", function () {
  delLastZero(inputEl.value);
});
function delLastZero(array) {
  const num2 = array.split("");
  let arr = [];
  let zeroCount = 0;
  let lastZeroIndex = 0;

  for (let i = 0; i < num2.length; i++) {
    arr.push(num2[i]);
    if (num2[i] === "0") {
      zeroCount++;
      lastZeroIndex = i;
    }
  }

  if (zeroCount > 1) {
    arr.splice(lastZeroIndex, 1);
  } else if (zeroCount === 1) {
    arr = arr.filter((item) => item !== "0");
  }

  return (h1El.innerHTML = arr);
}
