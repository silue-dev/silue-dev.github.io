const textDisplay = document.getElementById('dynamic-text');
const phrases = ['Doctoral Research.', 'Machine Learning.', 'Software Development.', 'Engineering.'];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;
const prependText = '&nbsp;&nbsp;';

function loop() {
    isEnd = false;
    textDisplay.innerHTML = prependText + currentPhrase.join('');

    if (i < phrases.length) {
        
        if (!isDeleting && j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j]);
            j++;
            textDisplay.innerHTML = prependText + currentPhrase.join('') + '<span class="cursor">_</span>';
        }

        if(isDeleting && j <= phrases[i].length) {
            currentPhrase.pop(phrases[i][j]);
            j--;
            textDisplay.innerHTML = prependText + currentPhrase.join('') + '<span class="cursor">_</span>';
        }

        if (j == phrases[i].length) {
            isEnd = true;
            isDeleting = true;
        }

        if (isDeleting && j === 0) {
            currentPhrase = [];
            isDeleting = false;
            i++;
            if (i == phrases.length) {
                i = 0;
            }
        }
    }
    const spedUp = 30;
    const normalSpeed = 100;
    const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;
    setTimeout(loop, time);
}

loop();
