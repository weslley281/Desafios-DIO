const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.get('/', cartController.getCart);
router.post('/add', cartController.addToCart);
router.put('/update', cartController.updateItem);
router.delete('/remove/:productId', cartController.removeItem);
router.post('/checkout', cartController.checkout);

module.exports = router;
