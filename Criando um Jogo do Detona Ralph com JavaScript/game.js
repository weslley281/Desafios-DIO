const windows = document.querySelectorAll('.window');
const hitSound = document.getElementById('hitSound');
let ralph;

function showRalph() {
    // Remove Ralph de qualquer janela atual
    if (ralph) {
        ralph.style.display = 'none';
    }

    // Escolher uma janela aleatoriamente
    const randomWindow = Math.floor(Math.random() * windows.length);
    ralph = document.createElement('div');
    ralph.id = 'ralph';
    windows[randomWindow].appendChild(ralph);
    ralph.style.display = 'block';

    // Quando o Ralph for clicado
    ralph.addEventListener('click', () => {
        hitSound.play(); // Tocar som de acerto
        ralph.style.display = 'none';
        setTimeout(showRalph, 1000); // Ralph reaparece depois de 1 segundo
    });
}

// Iniciar o jogo
showRalph();
