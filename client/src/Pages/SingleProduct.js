import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/productContext";
import FormatPrice from "../helpers/FormatPrice";
import PageNavigation from "../Components/PageNavigation";
import MyImage from "../Components/MyImage";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import Star from "../Components/Star";
import AddToCart from "../Components/AddToCart";

const API = "https://api.pujakaitem.com/api/products";

function SingleProduct() {
  const { getSingleProduct, singleProduct, isSingleLoading } =
    useProductContext();

  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);
  
  const {
    name,
    image,
    company,
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
  return (
    <Container>
      <PageNavigation title={name} />
      <div className="info">
        <div className="img1">
          {/* product Images  */}
          <div className="product_images">
            <MyImage imgs={image} />
          </div>
        </div>
        {/* product dAta  */}
        <div className="info1">
          <h2>{name}</h2>
          <Star stars={stars} reviews={reviews} />

          <p className="product-data-price">
            MRP:
            <del>
              <FormatPrice price={price + 250000} />
            </del>
          </p>
          <p className="product-data-price product-data-real-price">
            Deal of the Day: <FormatPrice price={price} />
          </p>

          <p>{description}</p>
          <div className="product-data-warranty">
            <div className="product-warranty-data">
              <TbTruckDelivery className="warranty-icon" />
              <p>Free Delivery</p>
            </div>

            <div className="product-warranty-data">
              <TbReplace className="warranty-icon" />
              <p>30 Days Replacement</p>
            </div>

            <div className="product-warranty-data">
              <TbTruckDelivery className="warranty-icon" />
              <p>Freshed Delivered </p>
            </div>

            <div className="product-warranty-data">
              <MdSecurity className="warranty-icon" />
              <p>2 Year Warranty </p>
            </div>
          </div>

          <div className="product-data-info">
            <p>
              Available:
              <span> {stock > 0 ? "In Stock" : "Not Available"}</span>
            </p>
            {/* <p>
              ID : <span> {id} </span>
            </p> */}
            <p>
              Brand :<span> {company} </span>
            </p>
            <p>
              Category:<span> {category} </span>
            </p>
            <hr />
            {stock > 0 && <AddToCart product={singleProduct} />}
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;

  .info {

    padding: 2rem 10rem;
    gap: 5rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .img1{
    padding-top: 4rem;
  }

  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
  }
  .product-data-warranty {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    margin-bottom: 1rem;
  }
  .product-warranty-data {
    text-align: center;
  }
  .warranty-icon {
    background-color: rgba(220, 220, 220, 0.5);
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    color: rgb(98 84 243);
    padding: 0.6rem;
  }
  
  hr {
    max-width: 100%;
    padding: 0;
    margin: 0.2rem;
  }
  .product_images {
    display: flex;
    align-items: center;
  }

  .product-data-price {
    font-weight: bold;
  }
  .product-data-real-price {
    color: rgb(98 84 243);
  }
  .product-data-info {
    display: flex;
    flex-direction: column;

    
    font-size: 1rem;
    p {
    font-size: 1rem;
    line-height: 0.5rem;
  }
    span {
      font-weight: 700;
      font-stretch: expanded;
    }
  }  
`;

export default SingleProduct;
