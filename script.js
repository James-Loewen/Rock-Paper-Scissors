// script.js file
/*
// This function cleverly scales the native random() function
// to a desired range of possible integers based on a given max
// Because there will only ever be 3 options, I don't need a 
// separate function for getRandomInt.
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
*/

// [  0        1         2     ]
// ["rock", "paper", "scissors"]
/*
1 beats 0
2 beats 1
0 beats 2

0 loses 1
1 loses 2
2 loses 0

win case:
playerMove.index === (computerMove.index + 1) || playerMove.index === (computerMove.index - 2)

loss case:
playerMove.index === (computerMove.index - 1) || playerMove.index === (computerMove.index + 2)

tie case:
playerMove.index === computerMove.index
*/

const moves = ["rock", "paper", "scissors"];

let computerPlay = () => {
  return moves[Math.floor(Math.random() * 3)];
}

let playRound = (playerMove) => {
  let computerMove = computerPlay();
  if (moves.indexOf(playerMove) === moves.indexOf(computerMove) + 1 || moves.indexOf(playerMove) === moves.indexOf(computerMove) - 2) {
    return `${playerMove} VS ${computerMove}! You won!`;
  } else if (moves.indexOf(playerMove) === moves.indexOf(computerMove) - 1 || moves.indexOf(playerMove) === moves.indexOf(computerMove) + 2) {
    return `${playerMove} VS ${computerMove}! You lost!`;
  } else {
    return `${playerMove} VS ${computerMove}! It's a tie, play again!`
  }
}

for (let i = 0; i < 5; i++) {
  let playerMove = prompt("Pick a move: rock, paper, or scissors!").toLowerCase();
  while (moves.includes(playerMove) === false) {
    playerMove = prompt("Whoops, looks like someone doesn't know how to spell. Try again: rock, paper, or scissors!").toLowerCase();
  }
  console.log(playRound(playerMove));
}