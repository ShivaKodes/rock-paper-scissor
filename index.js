/**  getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
*/

const totalScore = { computerScore: 0, userScore: 0 };
function getComputerChoice() {
  const choice = ["Rock", "Paper", "Scissors"];
  const computerChoice = choice[Math.floor(Math.random() * choice.length)];

  return computerChoice;
}

//** getResult compares playerChoice & computerChoice and returns the score accordingly **//
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0

function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  // All situations where human draws, set `score` to 0
  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
  // Otherwise human loses (aka set score to -1)
  // return score

  let score;
  if (playerChoice === computerChoice) {
    score = 0;
  } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
    score = 1;
  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    score = 1;
  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    score = 1;
  } else {
    score = -1;
  }
  return score;
}

//** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**//
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
  const res = document.querySelector(".result-text");
  const computerChoce = document.querySelector(".comp-choice");
  const yourChoice = document.querySelector(".your-choice");
  const userScore = document.querySelector(".user-score");
  const compScore = document.querySelector(".computer-score");
  totalScore.userScore += score;

  computerChoce.innerText = "Computer Chose : " + computerChoice;
  yourChoice.innerText = "You Chose : " + playerChoice;

  if (score == 0) {
    res.innerText = "Draw!";
  } else if (score > 0) {
    res.innerText = "You Won!";
    userScore.innerText = totalScore.userScore;
    compScore.innerText = totalScore.computerScore;
  } else {
    res.innerText = "You Lost!";
    totalScore.computerScore += score + 2;
    userScore.innerText = totalScore.userScore;
    compScore.innerText = totalScore.computerScore;
  }
}

//** Calculate who won and show it on the screen **//
function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice();
  const score = getResult(playerChoice, computerChoice);
  showResult(score, playerChoice, computerChoice);
}

// ** Make the RPS buttons actively listen for a click and do something once a click is detected **//
function playGame() {
  // use querySelector to select all RPS Buttons
  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked */
  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument
  // Add a click listener to the end game button that runs the endGame() function on click

  const rpsBtns = document.querySelectorAll(".rpsBtn");
  rpsBtns.forEach((rpsBtn) => {
    rpsBtn.addEventListener("click", () => {
      onClickRPS(rpsBtn.value);
    });
  });

  const restart = document.querySelector(".btn");
  restart.onclick = () => {
    endGame(totalScore);
  };
}

// ** endGame function clears all the text on the DOM **//
function endGame(totalScore) {
  totalScore.computerScore = 0;
  totalScore.userScore = 0;

  const res = document.querySelector(".result-text");
  const computerChoce = document.querySelector(".comp-choice");
  const yourChoice = document.querySelector(".your-choice");
  const userScore = document.querySelector(".user-score");
  const compScore = document.querySelector(".computer-score");

  res.innerText = "";
  computerChoce.innerText = "";
  yourChoice.innerText = "";
  userScore.innerText = totalScore.userScore;
  compScore.innerText = totalScore.computerScore;
}

playGame();
