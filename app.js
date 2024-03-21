let maxNumber = 10;
let secretNumber = parseInt(Math.random() * maxNumber + 1);
let bet;
let attempt = 1;

let title = document.querySelector('h1');
title.innerHTML = `What's the number?`;

let paragraph = document.querySelector('p');
paragraph.innerHTML = `Choose a number between 1 and ${maxNumber}`;

function betVerify(){
    console.log('o botao foi clicado')
}
while (bet != secretNumber){
    bet = prompt(`Choose a number between 1 and ${maxNumber}`);
    if(bet == secretNumber){
        break;
    } else{
        if(bet > secretNumber){
            alert(`The secret number is less than ${bet}`);
        } else{
            alert(`The secret number is bigger than ${bet}`);
        }
        attempt++;
    }
}

let attemptWord = attempt > 1 ? 'attempts' : 'attempt';
alert(`Congrats! You found out the secret number was ${secretNumber} after ${attempt} ${attemptWord}`);