(function () {
  const rockBtn = document.querySelector(".rock-btn");
  const paperBtn = document.querySelector(".paper-btn");
  const scissorsBtn = document.querySelector(".scissors-btn");
  const userHandIcon = document.querySelector(".user.hand-icon");
  const computerHandIcon = document.querySelector(".computer.hand-icon");
  const result = document.querySelector(".result");
  const userScore = document.querySelector(".user-score");
  const computerScore = document.querySelector(".computer-score");

  const rockIcon = "✊";
  const paperIcon = "🤚";
  const scissorsIcon = "✌️";
  const iconsList = [rockIcon, paperIcon, scissorsIcon];

  rockBtn.addEventListener("click", () => {
    calculateResult(rockIcon, scissorsIcon)
});
  paperBtn.addEventListener("click", ()=>{
    calculateResult(paperIcon, rockIcon)
});
  scissorsBtn.addEventListener("click", ()=>{
    calculateResult(scissorsIcon, paperIcon)
});

  function calculateResult(selectedIcon, winningIcon) {
    result.innerText = "shaking"
    userHandIcon.innerText = "🤜";
    computerHandIcon.innerText = "🤛";
    userHandIcon.classList.add('shakeUserHands')
    computerHandIcon.classList.add('shakeComputerHands')

    setTimeout(() => {
        userHandIcon.classList.remove('shakeUserHands')
        computerHandIcon.classList.remove('shakeComputerHands')

        const computerChoice = Math.floor(Math.random()*3)
        computerHandIcon.innerText = iconsList[computerChoice]
        userHandIcon.innerText = selectedIcon

        if(userHandIcon.innerText === computerHandIcon.innerText) result.innerText = "Match Draw"
        else if(computerHandIcon.innerText === winningIcon) {
            result.innerText = "You won!"
            userScore.innerText = parseInt(userScore.innerText) + 1
        } else {
            result.innerText = "You Loose, computer won!!"
            computerScore.innerText = parseInt(computerScore.innerText) + 1
        }
    }, 1200)
  }
})();
