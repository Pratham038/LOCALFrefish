import React from 'react';
import styled from 'styled-components';
import fish from '../images/fishshop.jpg'
import rtc from '../images/Rtc.jpg'
import meat from '../images/meat.jpg'

const AboutUsContainer = styled.div`
  padding: 1rem;
  
    img{
      width: 100%;
      height : 50%;
      border-radius: 50%;
    }
    .img-cont{
      text-align: center;
    display: grid;
    grid-template-columns:repeat(3,1fr);
    grid-column-gap: 3rem;
    }
    h2,h5{
      padding: 1rem ;
    }
    p{
      font-weight: 400;
      width:80%;
margin-left: 10%;
margin-right: 10%;

    }
`;

const About = () => {

return (<>
   
    <AboutUsContainer>
<h1>About Us</h1>
<div className='img-cont'>
  <div><img src={fish} alt='fish'/>
  <h2>Fresh FISH</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
    </p>
    </div>

  <div>
    <img src={rtc} alt='meat'/>
    <h2>Ready To Cook</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
    </p>
  
  </div>
  <div><img src={meat} alt='egg'/><h5>Juicy and Quality Tested</h5><h3>MEAT</h3>
  <p>Lorem ipsum dolor sit amet. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
    </p>
  </div>
  
    </div>
    </AboutUsContainer>
    </>
      );
};

export default About
