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

app.listen(PORT, () => {
  console.log(`✅ API сервер запущен на http://localhost:${PORT}`);
});