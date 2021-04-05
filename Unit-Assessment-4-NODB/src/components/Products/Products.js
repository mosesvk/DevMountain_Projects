import React, {useState, useEffect} from 'react';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  ProductsContainer,
  ProductsWrapper,  
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton
} from './ProductElements';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar'
import img from '../../images/CFP-counter.jpg'

const Products = (props) => {

  const {addItem, data, cart, editItem, removeItem, clearCart} = props;

  const [total, setTotal] = useState()
  const [isOpen, setIsOpen] = useState(false) 

  useEffect(() => {
    //useEffect (in place of the Lifecycle methods since you have to have a class component to do that) 
    //Everything in this function will happen when our application renders
    const total = cart.reduce((acc, product) => {
      return Math.round(100 * (acc + (product.price * product.quantity)))/100
    }, 0)
    // console.log(total)
    setTotal(total)
  }, [cart])
      //Whenever the cart is changed (in this case, whenever we add or take away from the cart), then "setTotal(total)" will be ran and the cart.reduce function will be applied.

  const toggle = () => {
      setIsOpen(!isOpen) //We DON'T want it to be open to begin with that's why we put !isOpen
    }
  
  // console.log(props.data)
  console.log(cart + "in products/index.js")

  return (
    <ProductsContainer>
      <Navbar toggle={toggle}/>
      <Sidebar clearCart={clearCart} removeItem={removeItem} total={total} editItem={editItem} cart={cart} isOpen={isOpen} toggle={toggle} />
      <ProductsWrapper>
        {data.map((prod, index) => {
          //Deconstruct prod (data array)
          const {name, desc, price, button} = prod;
          return (
            <ProductCard key={index}>
              <ProductImg src={img} alt={prod.alt}/>
              <ProductInfo>
                <ProductTitle>{name}</ProductTitle>
                <ProductDesc>{desc}</ProductDesc>
                <ProductPrice>$ {price}</ProductPrice>
                <ProductButton onClick={() => addItem(name, price, 1)}>{button}</ProductButton>
                <ToastContainer />
              </ProductInfo>
            </ProductCard>
          )
        })}
      </ProductsWrapper>
    </ProductsContainer>
  )
}

export default Products
