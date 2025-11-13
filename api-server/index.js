const express = require('express');
const cors = require('cors');
const catalog = require('./data/catalog');
const app = express();
const PORT = 8081;


// ==============================
//            TECHNICAL
// ==============================

// Разрешаем запросы с других доменов (нужно для Angular)
app.use(cors());
app.use(express.json());

// Техническое сообщение: сервер запущен
app.listen(PORT, () => {
  console.log(`✅ API сервер запущен на http://localhost:${PORT}`);


// ==============================
//            CATALOG
// ==============================
app.get('/api/catalog', (req, res) => {
  res.json(catalog);
});

// ==============================
//             CART
// ==============================
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

// ==============================
//            SIGN-IN
// ==============================

// Test credentials data
  const users = [
    { name: 'John', surname: 'Doe', email: 'john.doe@example.com', password: 'test-password-1' },
    { name: 'Jane', surname: 'Smith', email: 'jane.smith@example.com', password: 'test-password-2' }
  ];

  // get/ post
  app.post('/api/sign-in', (req, res) => {
    const { email, password } = req.body;
    console.log('Sign-in attempt:', email, password);

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      console.log('✅ User found:', user.email);
      res.json(user);
    } else {
      console.log('❌ Invalid credentials');
      res.status(401).json({ message: 'Invalid email or password' });
    }
  });

});