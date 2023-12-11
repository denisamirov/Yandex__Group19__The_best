let notes = document.querySelectorAll('.key');

function playSound(keyCode) {
    let audio;
    console.log(keyCode)
    if (keyCode === 'a') { // Если это клавиша A
        audio = new Audio('./C.mp3');
    } else if (keyCode === 's') { // Если это клавиша S
        audio = new Audio('./D.mp3');
    } else if (keyCode === 'd') { // Если это клавиша D
        audio = new Audio('./E.mp3');
    } else if (keyCode === 'f') { // Если это клавиша D
        audio = new Audio('./F.mp3');
    } else if (keyCode === 'g') { // Если это клавиша D
        audio = new Audio('./G.mp3');
    } else if (keyCode === 'h') { // Если это клавиша D
        audio = new Audio('./A.mp3');
    } else if (keyCode === 'j') { // Если это клавиша D
        audio = new Audio('./H.mp3');
    }



    else if (keyCode === '0') { // Включение мелодии
        audio = new Audio('https://zvukogram.com/mp3/p5/3464/krasivaya-i-krasivaya-fortepiannaya-muzyika-40481.mp3');
        
    }
    // Если аудиофайл определён, воспроизводим его
    if (audio) {
        audio.play();
    }
}

document.addEventListener('keydown', function(e) {
    playSound(e.key)
})

