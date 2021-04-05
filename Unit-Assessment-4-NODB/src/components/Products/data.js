// const path = require('path')

// const product1 = path.basename('../../images/CFP-counter.jpg'),
      // product2 = path.basename('../../images/CFP-cover-2.jpg'),
      // product3 = path.basename('../../images/CFP-counter.jpg'),
      // product4 = path.basename('../../images/CFP-cover.jpg'),
      // product5 = path.basename('../../images/CFP-cover.jpg')

module.exports = {
  products: [{
    id: 1,
    img: '../../src/images/CFP-counter.jpg', 
    alt: 'fried pie apple',
    name: 'Apple Caramel', 
    desc: 'Fresh apple and Caramel',
    price: 2.99,
    button: 'Add to Cart'
  },
  {
    id: 2,
    img: '/images/CFP-cover-2.jpg',
    alt: 'fried pie',
    name: 'the Cowboy',
    desc: 'Chicken, Carrot, Broth, Heated to perfection',
    price: 3.99,
    button: 'Add to Cart'
  },
  {
    id: 3,
    img: '/images/CFP-cover-2.jpg',
    alt: 'fried pie',
    name: 'Beef & Mushroom',
    desc: '100% Ground Beef with Mushroom and Gravy delight',
    price: 3.99,
    button: 'Add to Cart'
  },
  {
    id: 4,
    img: '/images/CFP-cover-2.jpg',
    alt: 'fried pie',
    name: 'Nutella Banana',
    desc: 'Fresh banana with delicious nutella',
    price: 2.99,
    button: 'Add to Cart'
  },
  {
    id: 5,
    img: '/images/CFP-cover-2.jpg',
    alt: 'fried pie',
    name: 'Blueberry & Cream',
    desc: 'Fresh Blueberries with yummy creamy cheese',
    price: 2.99,
    button: 'Add to Cart'
  }]
}