import React, {Component} from 'react';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Products from './components/Products/Products';
import './App.css';
import { toast } from 'react-toastify';
import Main from './components/Main/Main'
// import { toast } from 'react-toastify';

class App extends Component {

  constructor(){
    super();

    this.state = {
      cart: [],
      data: []
    }
  }
  

  componentDidMount(){
    axios.get('/api/products')
      .then(res => {
        this.setState({data: res.data})
      })
      .catch()
  }

  addItem = (name, price, quantity) => {
    // console.log(name, price, quantity)

    axios.post('/api/cart', {name, price, quantity})
      .then((res) => {
        toast.success("Added to cart", {
          className: "toast",
          draggable: true,
          position: toast.POSITION.TOP_CENTER,
        })
        this.setState({
          cart: res.data,
        })
      })
      .catch(err => console.log(err))
  } 

  removeItem = (id) => {
    axios.delete(`/api/cart/${id}`)
      .then(res => {
        console.log(res.data)
        this.setState({cart: res.data})
      })
      .catch(err => console.log(err))

  }

  editItem = (id, quantity) => {
    axios.put(`/api/cart/${id}`, {quantity})
      .then(res => {
        this.setState({
          cart: res.data
        })
      })
      .catch(err => console.log(err))
  }

  clearCart = () => {
    axios.delete('/api/cart')
      .then(res => {
        this.setState({cart: res.data})
      })
      .catch(err => console.log(err))
  }

  render(){
    // console.log(this.state.cart + "in app.js")
    return (
      <Router>
        <GlobalStyle />
        <Main />
        <Products removeItem={this.removeItem} editItem={this.editItem} cart={this.state.cart} addItem={this.addItem} data={this.state.data}/>
      </Router>
    );
  }
  
}

export default App;
