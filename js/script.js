function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;
var argButtonName, buttonpaper, buttonrock, buttonscissors, buttonTest;

/**
 * Describe this function...
 */

buttonpaper = document.getElementById('button-paper');
buttonrock = document.getElementById('button-rock');
buttonscissors = document.getElementById('button-scissors');
buttonTest = document.getElementById('button-test');

function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');

	playerMove = argButtonName;
	/*playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/
	/*/*playerMove = getMoveName(playerInput);*/
	console.log('ruch gracza to: ' + playerMove);
	randomNumber = Math.floor(Math.random() * 3 + 1);
	console.log('wylosowana liczba to: ' + randomNumber);
	computerMove = getMoveName(randomNumber);
	console.log('ruch komputera to: ' + computerMove);
	displayResult(playerMove, computerMove);
}

/**
 * funkcja pobiera informacje o wyborze gracza (w liczbach) i przypisuje im odpowiednie zdefiniowane nazwy dla zmiennych
 */
function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
}
/**
 * funkcja porównuje zmienne wybrane przez gracza do zmiennych wylosowanych przez komputer a następne wyświetla
 * wynik na podstawie zaprogramowanego schematu
 */
function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'PAPIER' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'KAMIEŃ' && argComputerMove == 'nożyce') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'NOŻYCE' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove = argComputerMove) {
    printMessage('remis');
  } else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}
/*playerMove = argButtonName;
/*playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/
/*/*playerMove = getMoveName(playerInput);*/
/*console.log('ruch gracza to: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);*/

buttonpaper.addEventListener('click', function(){ buttonClicked('PAPIER'); });
buttonrock.addEventListener('click', function(){ buttonClicked('KAMIEŃ'); });
buttonscissors.addEventListener('click', function(){ buttonClicked('NOŻYCE'); });
/*buttonTest.addEventListener('click', function(){ buttonClicked('Guzik TEST'); });*/
