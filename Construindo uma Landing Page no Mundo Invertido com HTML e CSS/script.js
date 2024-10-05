// script.js

// Seleciona o botão e o body
const themeSwitcher = document.getElementById('theme-switcher');
const body = document.body;

// Adiciona o evento de clique ao botão
themeSwitcher.addEventListener('click', function() {
    // Alterna entre a classe 'light-mode' e 'dark-mode'
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    }
});
