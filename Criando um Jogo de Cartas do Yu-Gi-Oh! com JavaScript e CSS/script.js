// Armazenar escolha do jogador e oponente
let escolhaJogador = "";
let escolhaOponente = "";

// Atribuir ação de clique para as cartas
document.querySelectorAll('.card-choice').forEach(card => {
    card.addEventListener('click', function() {
        escolhaJogador = this.id;
        document.querySelectorAll('.card-choice').forEach(card => {
            card.classList.remove('selected');
        });
        this.classList.add('selected');
    });
});

// Função que retorna a escolha do oponente
function escolhaAleatoriaOponente() {
    const escolhas = ['monstro', 'magia', 'armadilha'];
    const randomIndex = Math.floor(Math.random() * 3);
    return escolhas[randomIndex];
}

// Função para determinar o resultado
function calcularResultado(jogador, oponente) {
    if (jogador === oponente) {
        return "Empate!";
    }
    if (
        (jogador === 'monstro' && oponente === 'armadilha') ||
        (jogador === 'magia' && oponente === 'monstro') ||
        (jogador === 'armadilha' && oponente === 'magia')
    ) {
        return "Você venceu!";
    } else {
        return "O oponente venceu!";
    }
}

// Função para iniciar o jogo
document.getElementById('jogar').addEventListener('click', function() {
    if (escolhaJogador === "") {
        alert("Escolha uma carta antes de jogar!");
        return;
    }
    escolhaOponente = escolhaAleatoriaOponente();
    const resultado = calcularResultado(escolhaJogador, escolhaOponente);

    // Exibir resultado na página
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <p>Você escolheu: ${escolhaJogador.charAt(0).toUpperCase() + escolhaJogador.slice(1)}</p>
        <p>O oponente escolheu: ${escolhaOponente.charAt(0).toUpperCase() + escolhaOponente.slice(1)}</p>
        <p><strong>${resultado}</strong></p>
    `;
});
