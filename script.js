const moves = ["Rock", "Paper", "Scissors"];
var playerPoints = 0;
var computerPoints = 0;

const resultDisplay = document.querySelector('.results');
const resultContainer = document.querySelector('#results-list');
const playerPointsDisplay = document.querySelector('#player-points');
const computerPointsDisplay = document.querySelector('#computer-points');
const winnerDisplay = document.querySelector('#winner');

let newResult = (res) => {
  const tempResult = document.createElement('li');
  tempResult.style.color = 'blue';
  tempResult.textContent = res;
  resultContainer.appendChild(tempResult);
} 

let computerPlay = () => {
  return moves[Math.floor(Math.random() * moves.length)];
}

let evaluateWinner = (playerMove, computerMove) => {
  if (moves.indexOf(playerMove) === moves.indexOf(computerMove) + 1 || moves.indexOf(playerMove) === moves.indexOf(computerMove) - 2) {
    playerPoints += 1;
    playerPointsDisplay.textContent = playerPoints;
    return `${playerMove} vs ${computerMove}! You won!`;
  } else if (moves.indexOf(playerMove) === moves.indexOf(computerMove) - 1 || moves.indexOf(playerMove) === moves.indexOf(computerMove) + 2) {
    computerPoints += 1;
    computerPointsDisplay.textContent = computerPoints;
    return `${playerMove} vs ${computerMove}! You lost!`;
  } else {
    return `${playerMove} vs ${computerMove}! It's a tie, play again!`;
  }
}

let playRound = (e) => {
  let computerMove = computerPlay();
  let playerMove = e.target.value;
  if (playerPoints >= 5 || computerPoints >= 5) {
    return
  } else {
    newResult(evaluateWinner(playerMove, computerMove));
  }

  if (playerPoints === 5 || computerPoints === 5) {
    let whoWon = playerPoints > computerPoints ? 'You' : 'The computer';
    let winner = document.createElement('h2');
    winner.style.color = 'red';
    winner.textContent = `${whoWon} won!`;
    // let containyBoy = document.querySelector('.btn-container');
    winnerDisplay.appendChild(winner);
    document.querySelector('#reset').style.display = 'inline-block';
  }
}

const btns = document.querySelectorAll('.move');
btns.forEach(btn => btn.addEventListener('click', playRound));

let reset = () => {
  playerPoints = 0;
  playerPointsDisplay.textContent = playerPoints;
  computerPoints = 0;
  computerPointsDisplay.textContent = computerPoints;
  while (winnerDisplay.firstChild) {
    winnerDisplay.removeChild(winnerDisplay.firstChild);
  }
  while (resultContainer.firstChild) {
    resultContainer.removeChild(resultContainer.firstChild);
  }
  document.querySelector('#reset').style.display = 'none';
}

const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', reset);