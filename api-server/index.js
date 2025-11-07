const express = require('express');
const cors = require('cors');
const catalog = require('./data/catalog');
const app = express();
const PORT = 8081;

// Разрешаем запросы с других доменов (нужно для Angular)
app.use(cors());
app.use(express.json());

// Отдаём список товаров
app.get('/api/catalog', (req, res) => {
  res.json(catalog);
});

// Принимаем добавление товара в корзину
let cart = [];

app.post('/api/cart', (req, res) => {
  const item = req.body;
  cart.push(item);
  console.log('🛒 New item added to cart:', item);
  res.status(201).json({ message: 'Item added to cart', item });
});

app.get('/api/cart', (req, res) => {
  res.json(cart);
});

// Техническое сообщениеЖ сервер запущен
app.listen(PORT, () => {
  console.log(`✅ API сервер запущен на http://localhost:${PORT}`);
});