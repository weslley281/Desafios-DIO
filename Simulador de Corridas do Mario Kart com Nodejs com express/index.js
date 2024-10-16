const express = require('express');
const app = express();
const port = 3000;

// Dados simulados de corredores
let players = [
  { name: 'Mario', speed: 0, distance: 0 },
  { name: 'Luigi', speed: 0, distance: 0 },
  { name: 'Peach', speed: 0, distance: 0 },
  { name: 'Bowser', speed: 0, distance: 0 },
];

let raceInProgress = false;

// Iniciar corrida
app.get('/start-race', (req, res) => {
  if (raceInProgress) {
    return res.send('Corrida já está em andamento!');
  }

  players.forEach(player => {
    player.speed = Math.random() * 10 + 5; // Velocidade aleatória entre 5 e 15
    player.distance = 0;
  });

  raceInProgress = true;
  res.send('Corrida iniciada!');
});

// Atualizar progresso da corrida
app.get('/progress', (req, res) => {
  if (!raceInProgress) {
    return res.send('Nenhuma corrida em andamento.');
  }

  players.forEach(player => {
    player.distance += player.speed * (Math.random() * 0.5 + 0.5); // Atualiza distância de forma aleatória
  });

  res.json(players);
});

// Verificar o vencedor
app.get('/check-winner', (req, res) => {
  if (!raceInProgress) {
    return res.send('Nenhuma corrida em andamento.');
  }

  const winner = players.find(player => player.distance >= 100);
  if (winner) {
    raceInProgress = false;
    return res.send(`O vencedor é ${winner.name}!`);
  } else {
    return res.send('Nenhum vencedor ainda, a corrida continua!');
  }
});

app.listen(port, () => {
  console.log(`Simulador de Corridas do Mario Kart rodando em http://localhost:${port}`);
});
