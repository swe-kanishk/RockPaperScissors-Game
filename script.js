(function () {
  const rockBtn = document.querySelector(".rock-btn");
  const paperBtn = document.querySelector(".paper-btn");
  const scissorsBtn = document.querySelector(".scissors-btn");

  const userHand = document.querySelector(".user-hand");
  const computerHand = document.querySelector(".computer-hand");

  const userScore = document.querySelector(".user-score");
  const computerScore = document.querySelector(".computer-score");

  const result = document.querySelector(".result");

  const optionsList = ["", "rock", "paper", "scissors"];
  let userValue = null;

  rockBtn.addEventListener("click", () => {
    userHand.querySelector(".hand-icon").classList.add("shakeUserHands");
    computerHand
      .querySelector(".hand-icon")
      .classList.add("shakeComputerHands");
    result.innerText = "shaking...";
    userValue = 1;
    play();
  });

  paperBtn.addEventListener("click", () => {
    result.innerText = "shaking...";
    userHand.querySelector(".hand-icon").classList.add("shakeUserHands");
    computerHand
      .querySelector(".hand-icon")
      .classList.add("shakeComputerHands");

    userValue = 2;
    play();
  });

  scissorsBtn.addEventListener("click", () => {
    result.innerText = "shaking...";
    userHand.querySelector(".hand-icon").classList.add("shakeUserHands");
    computerHand
      .querySelector(".hand-icon")
      .classList.add("shakeComputerHands");

    userValue = 3;
    play();
  });

  function play() {
    const computerIndex = Math.floor(Math.random() * 3 + 1);
    const winner = findWinner(computerIndex);

    setTimeout(() => {
      if (computerIndex === 1)
        computerHand.querySelector(".hand-icon").innerText = "🪨";
      else if (computerIndex === 2)
        computerHand.querySelector(".hand-icon").innerText = "🧾";
      else computerHand.querySelector(".hand-icon").innerText = "✂️";

      if (userValue === 1)
        userHand.querySelector(".hand-icon").innerText = "🪨";
      else if (userValue === 2)
        userHand.querySelector(".hand-icon").innerText = "🧾";
      else userHand.querySelector(".hand-icon").innerText = "✂️";

      userHand.querySelector(".hand-icon").classList.remove("shakeUserHands");
      computerHand
        .querySelector(".hand-icon")
        .classList.remove("shakeComputerHands");

      if (winner === "draw") {
        setTimeout(
          () => (userHand.querySelector(".hand-icon").innerText = "🤜"),
          2000
        );
        setTimeout(
          () => (computerHand.querySelector(".hand-icon").innerText = "🤛"),
          2000
        );
        result.innerText = "Match Draw";
      } else if (winner === "user") {
        userScore.innerText = parseInt(userScore.innerText) + 1;
        setTimeout(
          () => (userHand.querySelector(".hand-icon").innerText = "🤜"),
          2000
        );
        setTimeout(
          () => (computerHand.querySelector(".hand-icon").innerText = "🤛"),
          2000
        );
        result.innerText = "You won!";
      } else {
        computerScore.innerText = parseInt(computerScore.innerText) + 1;
        setTimeout(
          () => (userHand.querySelector(".hand-icon").innerText = "🤜"),
          2000
        );
        setTimeout(
          () => (computerHand.querySelector(".hand-icon").innerText = "🤛"),
          2000
        );
        result.innerText = "computer wins";
      }
    }, 3000);
  }
  function findWinner(computerValue) {
    if (computerValue === userValue) return "draw";
    else {
      if (computerValue === 1 && userValue === 2) return "computer";
      else if (computerValue === 1 && userValue === 3) return "computer";
      else if (computerValue === 2 && userValue === 1) return "user";
      else if (computerValue === 2 && userValue === 3) return "user";
      else if (computerValue === 3 && userValue === 1) return "user";
      else if (computerValue === 3 && userValue === 2) return "computer";
    }
  }
})();
