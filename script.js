'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1; 
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess, typeof guess)

    // cuando no ingresa nada
    if(!guess) {
        displayMessage ( '😕 Ingresa un número!')

        // cuando el jugador gana
    } else if (guess === secretNumber){
        displayMessage('🎉 Número correcto')
        score = score + 10
        document.querySelector('.score').textContent = score
        document.querySelector('.number').textContent = secretNumber

        // Cambiar color del fondo
        document.querySelector('body').style.backgroundColor = '#56993a'
        document.querySelector('.number').style.width = '30rem'

        if(score > highscore) {
            highscore = score
            document.querySelector('.highscore').textContent = highscore
        }

        // cuando esta mal
    }   else if (guess !== secretNumber) {
            if(score > 1) {
                displayMessage(guess > secretNumber ? '☝️ Muy arriba!' : '👇 Muy abajo!')
                score--
                document.querySelector('.score').textContent = score
            } else {
                displayMessage ( '💥 Perdiste el juego!')
                document.querySelector('.score').textContent = 0
            }
        }
    
})

document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1; 

    document.querySelector('.score').textContent = score
    displayMessage('Empieza a adivinar...')

    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = ''

    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
})
