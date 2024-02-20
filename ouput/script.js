// function play(){
//   const home = document.querySelector(`#home`);
//   home.classList.add(`hidden`)
// }



// const home = document.querySelector(`#home`);
// const playGround = document.querySelector(`#playGround`);
// home.addEventListener(`click`,function(){
//   home.classList.add(`hidden`)

//   playGround.classList.remove(`hidden`)
// })

function gameLoop() {
  const randomAlp = getRandomAlp();
  const currentAlp = document.querySelector(`#currentAlp`);
  currentAlp.innerText = randomAlp.toUpperCase();
  addBgColor(randomAlp);
}

document.addEventListener(`keyup`, pressKeyBtn);

function pressKeyBtn(e) {
  const gamerPressed = e.key;
  const currentAlp = document.querySelector(`#currentAlp`);
  const expectedAlp = currentAlp.innerText.toLowerCase();

  if (gamerPressed === expectedAlp) {
    // const scoreElement = document.querySelector('#score');
    // const score = parseInt(scoreElement.innerText);
    // const updatedScore = score + 1;
    // scoreElement.innerText = updatedScore;

    const score = getElementValue(`score`);
    const updatedScore = score + 1;
    setElementValue(`score`, updatedScore);

    removeBgColor(expectedAlp);
    gameLoop();
  } else {
    // const gemElement = document.querySelector(`#gem`);
    // const gem = parseInt(gemElement.innerText);
    // const downGrade = gem -1;
    // gemElement.innerText = downGrade;

    const gem = getElementValue(`gem`);
    const downGrade = gem - 1;
    setElementValue(`gem`, downGrade);
    if(downGrade === 0){
      gameOver()
    }
  }
}

const playNow = document.querySelector(`#playNow`);
playNow.addEventListener(`click`, function () {
  hideElement(`#home`);
  showElement(`#playGround`);
  gameLoop();
});

function gameOver(){
  hideElement(`#playGround`);
  showElement(`#scoreCard`);
  const finalScore = getElementValue(`score`);
  setElementValue(`finalScore`,finalScore);
}

function playAgain(){
  hideElement(`#scoreCard`);
  showElement(`#playGround`);
  gameLoop()
  // location.reload()
  setElementValue(`gem`, 5);
  setElementValue(`score`, 0);
}

