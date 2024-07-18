const h1El = document.querySelector(".h1");
const inputEl = document.querySelector(".form-control");
const btnEl = document.querySelector(".btn");

/*  9-masala
Arraydagi eng kichik sonni topuvchi fuksiya yarating va u eng kichik raqamni 4 chi darajasini string holda qaytarsin filter ishlatish mumkin*/

btnEl.addEventListener("click", function () {
  getMinNum(inputEl.value);
});
function getMinNum(array) {
  let num2 = array.split("");
  num2 = num2.reduce(
    (min, current) => (current < min ? current : min),
    array[0]
  );
  return (h1El.innerHTML = ` Kiritilgan sonlarning eng kichigi ${num2} va uning 4-darajasi ${
    num2 ** 4
  }`);
}
