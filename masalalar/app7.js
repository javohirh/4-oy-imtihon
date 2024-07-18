const h1El = document.querySelector(".h1");
const inputEl = document.querySelector(".form-control");
const btnEl = document.querySelector(".btn");

/*7-masala String qabul qiladigan funksiya yarating va u stringni birinchi va oxirgi elementlarini o’chirib yuborsin slice ishlatish mumkin emas.*/

btnEl.addEventListener("click", () => {
  delSymbol(inputEl.value);
});

function delSymbol(text) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    if (i === 0) {
      result += "";
    } else if (i === text.length - 1) {
      result += "";
    } else {
      result += text[i];
    }
  }
  return (h1El.innerHTML = result);
}
