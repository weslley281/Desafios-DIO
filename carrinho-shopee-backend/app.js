const express = require('express');
const app = express();
const cartRoutes = require('./routes/cart');

app.use(express.json());
app.use('/api/cart', cartRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
