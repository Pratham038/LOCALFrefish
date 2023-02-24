import React from "react";
import styled from "styled-components";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const ProductDetails = ({ product }) => {
  const navigate = useNavigate();

  //DELETE

  // const handleDelete = async (id) => {
  //   console.log(id);
  //   try {
  //     const response = await axios.delete(`/api/products/${id}`);
  //     setId(id.filter((id) => id.id !== id));
  //     navigate("/products"); // Redirect to the home page
  //   } catch (error) {
  //     alert(error.message); // Show an alert
  //     navigate("/contact");
  //   }
  // };
  const handleDelete = (id) => {

    axios.delete(`/api/products/${id}`, {
        headers : {
            'Content-Type': 'application/json'
        },
        params : {
            id: id
        }
    })
        .then( resp => {
            console.log(resp.message);
            alert("PRODUCT DELETED ❌")
        })
        .catch( err => console.error );
}

  return (
    <>
      <Seperateproduct>
        <div className="img">
          <img src={product.image} alt={product.name}></img>
        </div>
        <div className="pro-info">
          <h6>ID : {product.id}</h6>
          <h6>Name : {product.name}</h6>
          <h6>price : {product.price} </h6>
          <h6>description : {product.description}</h6>
          <h6>Stock : {product.stock}</h6>
          <h6>Reviews : {product.reviews}</h6>
          <h6>stars : {product.stars}</h6>
          <h6>category : {product.category}</h6>
          <h6>Featured: {product.featured}</h6>
          <button onClick={() => handleDelete(product.id)}>Delete</button>
        </div>
      </Seperateproduct>
    </>
  );
};

export default ProductDetails;

const Seperateproduct = styled.div`
  background-color: aqua;
  border: 3px solid #333;
  margin: 2rem;
  display: flex;
  padding: 1rem;

  img {
    width: 20rem;
    height: 100%;
    border-radius: 2rem;
  }
  .pro-info {
    padding-left: 2rem;
  }
`;
