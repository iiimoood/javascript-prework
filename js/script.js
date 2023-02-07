function getMoveName(argMoveId) {
  if (argMoveId == 1) {
    return "kamień";
  } else if (argMoveId == 2) {
    return "papier";
  } else if (argMoveId == 3) {
    return "nożyce";
  } else {
    printMessage("Nie znam ruchu o id " + argMoveId + ".");
    return "nieznany ruch";
  }
}

function displayResult(argComputerMove, argPlayerMove) {
  if (argComputerMove == "kamień" && argPlayerMove == "papier") {
    printMessage("Ty wygrywasz!");
  } else if (argComputerMove == "papier" && argPlayerMove == "nożyce") {
    printMessage("Ty wygrywasz!");
  } else if (argComputerMove == "nożyce" && argPlayerMove == "kamień") {
    printMessage("Ty wygrywasz!");
  } else if (argComputerMove == argPlayerMove) {
    printMessage("Remis!");
  } else {
    printMessage("Przegrywasz!");
  }
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log("Wylosowana liczba to: " + randomNumber);

let computerMove = getMoveName(randomNumber);

/* if (randomNumber == 1) {
  computerMove = "kamień";
} else if (randomNumber == 2) {
  computerMove = "papier";
} else randomNumber == 3;
{
  computerMove = "nożyce";
} */

printMessage("Mój ruch to: " + computerMove);

let playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");

console.log("Gracz wpisał: " + playerInput);

let playerMove = getMoveName(playerInput);

/*if (playerInput == "1") {
  playerMove = "kamień";
} else if (playerInput == "2") {
  playerMove = "papier";
} else playerInput == "3";
{
  playerMove = "nożyce";
} */

printMessage("Twój ruch to: " + playerMove);
displayResult(computerMove, playerMove);
