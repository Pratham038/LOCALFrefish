import React from 'react'
import styled from 'styled-components';
import Product from './Product';
import { useProductContext } from '../context/productContext'

const Cord = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1rem 0rem 1rem 0rem;
  background-color: #333;

`;

const FaetureProduct = () => {
    
  const { isLoading , featureProducts} = useProductContext();
    // console.log(featureProducts);
    
    if (isLoading){
        return <div style={{backgroundColor : "blue"}}>LOADING </div>
    }

  return (<>
    <h1>Our New Featured Products..</h1>
      <h3>Must try ...</h3>
    <Cord>
      
     {featureProducts.map((curElem) =>{
      return <Product key={curElem.id} {...curElem} />;
     })}
    </Cord>
   </>)
}

export default FaetureProduct