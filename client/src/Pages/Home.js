import React from 'react'
import styled from 'styled-components';
import CartAmountToggle from '../Components/CartAmountToggle';
import FaetureProduct from '../Components/FaetureProduct';
import adv from "../images/ad.jpg";
const HomePage = styled.nav`
.anil{
  width: 100%;
}
`;

const Home = () => {
  return (
    <>    
    <HomePage>
      <div>
        <img className='anil' src={adv} alt='eve' />
      </div>
    </HomePage>
    <FaetureProduct />
    </>
  )
}

export default Home