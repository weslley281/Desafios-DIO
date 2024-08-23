#define SENSOR_QUARTO A0 // Sensor de presença no quarto
#define SENSOR_SALA A1   // Sensor de presença na sala
#define SENSOR_COZINHA A2 // Sensor de presença na cozinha
#define LAMPADA_QUARTO 2  // Lâmpada do quarto
#define LAMPADA_SALA 3    // Lâmpada da sala
#define LAMPADA_COZINHA 4 // Lâmpada da cozinha
#define SENSOR_LUMINOSIDADE A3 // Sensor de luminosidade para detectar amanhecer

void setup() {
  pinMode(LAMPADA_QUARTO, OUTPUT);
  pinMode(LAMPADA_SALA, OUTPUT);
  pinMode(LAMPADA_COZINHA, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int luminosidade = analogRead(SENSOR_LUMINOSIDADE); // Leitura da luminosidade
  int presencaQuarto = digitalRead(SENSOR_QUARTO);
  int presencaSala = digitalRead(SENSOR_SALA);
  int presencaCozinha = digitalRead(SENSOR_COZINHA);

  // Lógica para controlar as lâmpadas com base nos sensores
  if (luminosidade < 300) { // Se estiver escuro (valor de luminosidade pode variar conforme o sensor)
    if (presencaQuarto == HIGH) {
      digitalWrite(LAMPADA_QUARTO, HIGH);
    } else {
      digitalWrite(LAMPADA_QUARTO, LOW);
    }
    if (presencaSala == HIGH) {
      digitalWrite(LAMPADA_SALA, HIGH);
    } else {
      digitalWrite(LAMPADA_SALA, LOW);
    }
    if (presencaCozinha == HIGH) {
      digitalWrite(LAMPADA_COZINHA, HIGH);
    } else {
      digitalWrite(LAMPADA_COZINHA, LOW);
    }
  } else { // Se estiver claro, todas as lâmpadas são desligadas
    digitalWrite(LAMPADA_QUARTO, LOW);
    digitalWrite(LAMPADA_SALA, LOW);
    digitalWrite(LAMPADA_COZINHA, LOW);
  }
  delay(1000); // Aguarda 1 segundo antes de verificar novamente
}
