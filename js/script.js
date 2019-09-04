function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
//var argMoveId, argPlayerMove, argComputerMove, argButtonName;


/**
 * Describe this function...
 */

let mwynik = 0, cwynik = 0;
const buttonpaper = document.getElementById('button-paper'),
			buttonrock = document.getElementById('button-rock'),
			buttonscissors = document.getElementById('button-scissors'),
			buttonTest = document.getElementById('button-test');

function buttonClicked(argButtonName) {
	let playerMove, randomNumber, computerMove, playerInput;
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
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
		mwynik = mwynik+1;
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Wygrywasz!');
		mwynik = mwynik+1;
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!');
		mwynik = mwynik+1;
  } else if (argPlayerMove == argComputerMove) {
    printMessage('remis');
  } else {
    printMessage('Przegrywasz :(');
		cwynik = cwynik+1;
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
	console.log("komputer wynik " + cwynik,"mój wynik " + mwynik);
	document.getElementById('wynik').innerHTML = 'wynik komputer ' + cwynik + ' mój wynik ' + mwynik;
	//printMessage('wynik komputer ' + cwynik + ' mój wynik ' + mwynik);
}

buttonpaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonrock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonscissors.addEventListener('click', function(){ buttonClicked('nożyce'); });
/*buttonTest.addEventListener('click', function(){ buttonClicked('Guzik TEST'); });*/
console.log(buttonpaper)
