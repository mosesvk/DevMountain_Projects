
const express = require('express'),
      cartController = require('./cartController'),
      data = require('../src/components/Products/data'),
      port = 4444,
      app = express()
      // publicDir = require('path').join(__dirname, "/src")

app.use(express.json());
// app.use(express.static(__dirname + "../src"))

// endpoints
app.get('/api/products', (req, res) => {
  res.send(data.products);
});

app.post('/api/cart', cartController.addItem);

app.put('/api/cart/:id', cartController.editItem);

app.delete('/api/cart/:id', cartController.deleteItem);

app.delete('/api/cart', cartController.clearCart)

app.listen(port, () => console.log(`Server is running on ${port}`)); 