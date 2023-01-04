import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FormatPrice from "../helpers/FormatPrice";
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 400px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 20px;
  overflow: hidden;

  border: 1px solid #333;
`;

const Image = styled.img`
  width: 100%;
  height: 60%;
  object-fit: cover;
`;

const Name = styled.h3`
  margin: 10px 0;
  font-size: 1.5rem;
  text-align: center;
`;

const Category = styled.p`
  margin: 10px 0;
  font-size: 1.2rem;
  color: gray;
`;

const Price = styled.p`
  margin: 10px 0;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Product = (curElem) => {
  const { id, name, image, price, category } = curElem;

  return (
    <>
    
      <Link to={`/singleproduct/${id}`}>
        <Card>
          <Image src={image} alt={name} />
          <Name>{name}</Name>
          <Category>Category: {category}</Category>
          <Price>Price: {<FormatPrice price={price}/>}</Price>
        </Card>
      </Link>
      
    </>
  );
};

export default Product;
