'use strict';

let secretNB = Math.trunc(Math.random() * 20) + 1;
let loop = 1;
//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
document.querySelector('.check').addEventListener('click', () => {
    if (loop) {
        const guess = Number(document.querySelector('.guess').value);
        // message, number(secrt nb), guess(input), check(btn), score, highscore,
        if (!guess || guess < 0 || guess > 20)
            document.querySelector('.message').textContent = 'put a value between 1 and 20!';
        else if (guess > 0 && guess <= 20) {

            if (guess === secretNB) {
                document.querySelector('.number').textContent = secretNB;
                document.querySelector('.message').textContent = 'good job ✔';
                if (document.querySelector('.score').textContent > document.querySelector('.highscore').textContent)
                    document.querySelector('.highscore').textContent = document.querySelector('.score').textContent;
                document.querySelector('body').style.backgroundColor = '#60b347';
                document.querySelector('.number').style.width = '30rem';
                loop = 0;
            }
            else if (document.querySelector('.score').textContent > 0) {
                document.querySelector('.score').textContent--;
                if (guess < secretNB)
                    document.querySelector('.message').textContent = `the secret number is > ${guess}`;
                else
                    document.querySelector('.message').textContent = `the secret number is < ${guess}`;
                if (document.querySelector('.score').textContent == 0) document.querySelector('.message').textContent = 'you lose 👎';
            }
        }
    } else document.querySelector('.message').textContent = 'you are already won ✔'
        + ' if you wanna play again just click the Again button';
})

document.querySelector('.again').addEventListener('click', () => {
    secretNB = Math.trunc(Math.random() * 20) + 1;
    loop = 1;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = '20';
    document.querySelector('body').style = '#222';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';
})
