import styled from 'styled-components';

// Main Pink -> #f2b4b4
// Black -> #393232
// Light Brown -> #eabf9f
// Light Gray -> #dddddd

export const ProductsContainer = styled.div`
  /* width: 100; */
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) /2);
  background-image: linear-gradient(
      to bottom, 
      #dddddd,
      #eabf9f
    );
  color: #393232;
`

export const ProductsWrapper = styled.div`
  display: flex; 
  flex-wrap: wrap; 
  justify-content: center; 
  margin: 0 auto;

  @media all and (min-width: 800px){
    margin: auto 150px;
  }
`
export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 1.5;
  width: 200px;

  @media screen and (min-width: 1000px) {
    margin: auto 55px;
  }
  
`

export const ProductImg = styled.img`
  height: 200px;
  min-width: 200px;
  max-width: 100%;
  box-shadow: 8px 8px #f2b4b4;
`

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
  font-family: sans-serif;
  height: 85px;
  align-items: center;

`

export const ProductPrice = styled.p`
  margin-bottom: 1rem; 
  font-size: 2rem;
`

export const ProductButton = styled.button`
  font-size: 1rem;
  padding: 1rem 1rem;
  border: 1px solid #393232;
  border-radius: 7px;
  background: #f2b4b4;
  color: #393232;
  transition: .2s ease-out;

  &:hover {
    color: #dddddd;
    background: #393232;
    transition: .2s ease-out;
    cursor: pointer;
  }
`


