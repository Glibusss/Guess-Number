'use strict';

let toGuess = Math.trunc(Math.random()*19)+1;
let score = 20;
let best = 0;

document.querySelector('.check').addEventListener('click', function(){

    if(score==0)
    return;
    const val = document.querySelector('.number-input').value;

    
    if(!val)
    {
        document.querySelector('.guess-message').textContent = 'Введите число';
        return;
    }
    
    if(val!=toGuess)
    {
        
        --score;
        document.querySelector('.score').textContent = score;
        if(score==0)
        {
        document.querySelector('.guess-message').textContent = 'Game Over!'; 
        return;
        }
        if(toGuess>val)
        {
            document.querySelector('.guess-message').textContent = 'Загаданное число больше!';
        }
        else
        {
            document.querySelector('.guess-message').textContent = 'Загаданное число меньше!';
        }

        
    }
    else
    {
        document.querySelector('.guess-message').textContent = 'Верно!';
        best = score>best? score:best;
        document.querySelector('.highscore').textContent = best;
        document.querySelector('.question').textContent = toGuess;
        document.querySelector('body').style.backgroundColor = 'rgb(9, 250, 21)'
    }

    
} );

document.querySelector('.again').addEventListener('click', function(){

document.querySelector('.question').textContent = '???';
document.querySelector('.guess-message').textContent = 'Угадай число';
toGuess = Math.trunc(Math.random()*19)+1;

score = 20;
document.querySelector('.score').textContent = score;

document.querySelector('.number-input').value = '';

document.querySelector('body').style.backgroundColor = 'black'


})