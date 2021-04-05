const { toast } = require("react-toastify");

let cart = [];
let id = 1; 


module.exports = {
  addItem: (req, res) => {
    const {name, price, quantity} = req.body; 
    
    cart.push({id, name, price, quantity})
    
    id++;
    // toast.success("Added to the cart");
    res.status(200).send(cart)
  },

  editItem: (req, res) => {
    const {quantity} = req.body;
    const {id} = req.params;
    // Remember that we named it id in our index.js server which is why we are getting it from req.params. '/api/cart/:id <-- if it was named anything else then above on line 19 would be const {whatever that name is after the colon : }

    const productItem = cart.find(element => element.id === +id)
    // +id because we are pulling it off of a string. So it is a NUMBER and not a string like "2" instead of 2. Just remember for THIS specific case. 

    productItem.quantity = quantity;
    // toast.success("Item Quantity Edited")
    res.status(200).send(cart)
  },

  deleteItem: (req, res) => {
    const {id} = req.params;

    const deletedItem = cart.find(elem => elem.id === +id)

    cart.splice(deletedItem, 1)
    // toast.error("Item Removed from Cart")
    res.status(200).send(cart)
  },

  clearCart: (req, res) => {
    cart = []

    res.status(200).send(cart)
  }

}