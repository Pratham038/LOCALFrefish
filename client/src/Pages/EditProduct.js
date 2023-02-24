import React from 'react'
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/productContext";
import { useEffect } from "react";
import PageNavigation from "../Components/PageNavigation";
import styled from "styled-components";
import EditProductForm from '../Components/EditProductForm';
import AdminNavbar from '../Components/AdminNavbar'

const Container = styled.div`

display: flex;
img{
    width: 30%;
}
`
const API = "http://localhost:4000/api/products";
const EditProduct = () => {
  const { getSingleProduct, singleProduct, isSingleLoading } = useProductContext();

  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    getSingleProduct(`${API}/${id}`);
  }, []);

  const {
    name,
    image,
    featured,
    category,
    stock,
    stars,
    reviews,
    price,
    description,
  } = singleProduct;

  if (isSingleLoading) {
    return <div style={{ backgroundColor: "red" }}>Loading</div>;
  }
  console.log(singleProduct.id);
  return (
    <>
    <AdminNavbar/>
    <Container>
    <div className='product-info'>
    <div className="img">
          <img src={image} alt={name}></img>
        </div>
        <div className="pro-info">
          <h6>ID : {id}</h6>
          <h6>Name : {name}</h6>
          <h6>price : {price} </h6>
          <h6>description : {description}</h6>
          <h6>Stock : {stock}</h6>
          <h6>Reviews : {reviews}</h6>
          <h6>stars : {stars}</h6>
          <h6>category : {category}</h6>
          <h6>Featured: {featured?"Advertised":"nonAdvertised"}</h6>
        </div>
    </div>
    <div className='edit-form'>
    <EditProductForm key={singleProduct._id} singleProduct={singleProduct} />        
    </div>
    </Container>
    </>
    )
}

export default EditProduct