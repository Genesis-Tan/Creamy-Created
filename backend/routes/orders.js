const express = require('express');
const router = express.Router();
const { getAllOrders } = require('../controllers/orderController');

// 👇 This must be a function
router.get('/', getAllOrders);

module.exports = router;
