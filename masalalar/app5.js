const h1El = document.querySelector(".h1");
const h2El = document.querySelector(".h2");
const inputEl = document.querySelector(".form-control");
const btnEl = document.querySelector(".btn");

/* 5-masala String qabul qiluvchi funksiya yarating va u stringni nechta ! belgisi bo’lsa hammasini olib tashlagan holda qaytarsin replace metodi ishlatish mumkin emas // "salom dunyo! hello world!" -> "salom dunyo hello world"*/

btnEl.addEventListener("click", function () {
  console.log(delExplonation(inputEl.value));
});

function delExplonation(text) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== "!") {
      result += text[i];
    }
  }
  return (h1El.innerHTML = result);
}
