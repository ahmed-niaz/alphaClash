// re-useable function

function hideElement(elementID) {
  const element = document.querySelector(elementID);
  element.classList.add(`hidden`);
}

function showElement(elementID) {
  const element = document.querySelector(elementID);
  element.classList.remove(`hidden`);
}

function addBgColor(elementID){
    // const element = document.getElementById(elementID);
    const element = document.querySelector(`#${elementID}`);
    element.classList.add(`bg-rose-950`);
    element.classList.add(`text-white`);
    element.classList.add(`font-bold`)
}


// function removeBgColor(element){
//     const element = document.querySelector(element);
//     element.classList.remove(`bg-rose-950`)
// }

function getRandomAlp() {
  const alpString = `abcdefghijklmnopqrstuvwxyz`;
  const alp = alpString.split(``);
  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);
  const alphabet = alp[index];
  return alphabet;
}
