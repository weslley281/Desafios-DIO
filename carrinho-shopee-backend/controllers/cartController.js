const cart = require('../models/cart');

exports.getCart = (req, res) => {
  res.json(cart.items);
};

exports.addToCart = (req, res) => {
  const { productId, name, price, quantity } = req.body;

  const existingItem = cart.items.find(item => item.productId === productId);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.items.push({ productId, name, price, quantity });
  }

  res.json({ message: 'Produto adicionado ao carrinho', cart: cart.items });
};

exports.updateItem = (req, res) => {
  const { productId, quantity } = req.body;

  const item = cart.items.find(item => item.productId === productId);
  if (!item) {
    return res.status(404).json({ error: 'Produto não encontrado no carrinho' });
  }

  item.quantity = quantity;
  res.json({ message: 'Quantidade atualizada', cart: cart.items });
};

exports.removeItem = (req, res) => {
  const { productId } = req.params;
  cart.items = cart.items.filter(item => item.productId !== productId);

  res.json({ message: 'Produto removido do carrinho', cart: cart.items });
};

exports.checkout = (req, res) => {
  const total = cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  cart.items = [];
  res.json({ message: 'Compra finalizada', total });
};
