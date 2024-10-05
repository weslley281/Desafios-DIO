// Array com as notas e arquivos de áudio correspondentes
const notas = {
    "C": "sounds/C.mp3",
    "C#": "sounds/Csharp.mp3",
    "D": "sounds/D.mp3",
    "D#": "sounds/Dsharp.mp3",
    "E": "sounds/E.mp3",
    "F": "sounds/F.mp3",
    "F#": "sounds/Fsharp.mp3",
    "G": "sounds/G.mp3",
    "G#": "sounds/Gsharp.mp3",
    "A": "sounds/A.mp3",
    "A#": "sounds/Asharp.mp3",
    "B": "sounds/B.mp3"
};

// Função para tocar a nota
function tocarNota(tecla) {
    const audio = new Audio(notas[tecla]);
    audio.play();
}

// Adicionar evento de clique nas teclas do piano
document.querySelectorAll('.tecla-branca, .tecla-preta').forEach(tecla => {
    tecla.addEventListener('click', function() {
        const teclaNota = this.getAttribute('data-key');
        tocarNota(teclaNota);
    });
});

// Função para detectar a tecla pressionada no teclado
document.addEventListener('keydown', function(event) {
    const teclasMapeadas = {
        'a': 'C',
        'w': 'C#',
        's': 'D',
        'e': 'D#',
        'd': 'E',
        'f': 'F',
        't': 'F#',
        'g': 'G',
        'y': 'G#',
        'h': 'A',
        'u': 'A#',
        'j': 'B'
    };
    const nota = teclasMapeadas[event.key];
    if (nota) {
        tocarNota(nota);
    }
});
