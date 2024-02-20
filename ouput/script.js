// function play(){
//   const home = document.querySelector(`#home`);
//   home.classList.add(`hidden`)
// }

// const { fuchsia } = require("color-name");

// const home = document.querySelector(`#home`);
// const playGround = document.querySelector(`#playGround`);
// home.addEventListener(`click`,function(){
//   home.classList.add(`hidden`)
  
//   playGround.classList.remove(`hidden`)
// })


function gameLoop(){
 const randomAlp = getRandomAlp();
 console.log(randomAlp);
 const currentAlp = document.querySelector(`#currentAlp`);
 currentAlp.innerText = randomAlp.toUpperCase();
  addBgColor(randomAlp)
}

const playNow = document.querySelector(`#playNow`);
playNow.addEventListener(`click`,function(){
  hideElement(`#home`);
  showElement(`#playGround`)
  gameLoop()
})