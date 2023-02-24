import React from "react";
import { useState, useEffect } from "react";
import ProductDetails from "../Components/ProductDetails";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../Components/AddToCart";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import AdminNavbar from '../Components/AdminNavbar'

const Admin = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [reviews, setReviews] = useState("");
  const [stars, setStars] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [featured, setFeatured] = useState("");
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState([]);

  //fetcch
  const [products, setProducts] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/api/products");
      const json = await response.json();

      if (response.ok) {
        setProducts(json);
      }
    };

    fetchProducts();
  }, []);

  const prductNewSubmit = async (e) => {
    e.preventDefault();
    const product = {
      name,
      image,
      quantity,
      price,
      description,
      id,
      stock,
      reviews,
      stars,
      category,
      featured,
    };

    const response = await fetch("api/products", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setName("");
      setPrice("");
      setDescription("");
      setCategory("");
      setFeatured("");
      setStock("");
      setId("");
      setReviews("");
      setStars("");
      setImage("");
      setError(null);
      // console.log("new product added", json);
      toast.success("Product Added💕",{
        position: toast.POSITION.TOP_RIGHT,
        className: 'toast-message'
      })
    }
    if (!response.ok){
      toast.error("Product not Added",{
        position: toast.POSITION.TOP_RIGHT,
        className: 'toast-message'
      })
    }
  };
  const handleColorsChange = (event) => {
    setQuantity(event.target.value.split(","));
  };

  return (
    <>
    <AdminNavbar/>
      <Wrapper>
        <Seperateproduct>
          <form onSubmit={prductNewSubmit}>
            <h3>ADD A new Product</h3>

            <input
            placeholder="Product ID"
              type="text"
              onChange={(e) => setId(e.target.value)}
              value={id}
            />

            <input
            placeholder="Product Name"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />

            <input
            placeholder="Product Price"
              type="number"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />

            <input
            placeholder="Product Description"
              type="text"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />

            <input
            placeholder="Product stock"
              type="number"
              onChange={(e) => setStock(e.target.value)}
              value={stock}
            />

            <input
            placeholder="Product Reviews"
              type="number"
              onChange={(e) => setReviews(e.target.value)}
              value={reviews}
            />

            <input
            placeholder="Product stars"
              type="number"
              onChange={(e) => setStars(e.target.value)}
              value={stars}
            />

            <input
            placeholder="Product Advertised ? "
              type="text"
              onChange={(e) => setFeatured(e.target.value)}
              value={featured}
            />

            <input
            placeholder="Product category"
              type="text"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            />

            <input
            placeholder="Product Image link"
              type="text"
              onChange={(e) => setImage(e.target.value)}
              value={image}
            />

            {/* TRY0 */}
            <div>
              <input
              placeholder="Size"
                type="text"
                id="quantity"
                name="quantity"
                value={quantity.join(",")}
                onChange={handleColorsChange}
              />
            </div>

            <Button type="submit" onSubmit={prductNewSubmit}>
              Add Product
            </Button>
            {error && <div className="error">{error}</div>}
          </form>
        </Seperateproduct>
        <div className="products">
          {products &&
            products.map((product) => (
              <>
                <NavLink to={`/editproduct/${product.id}`}>
                  <ProductDetails key={product._id} product={product} />
                </NavLink>
              </>
            ))}
        </div>
      </Wrapper>
    </>
  );
};

export default Admin;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row-reverse;

  .products{
    width: 100%;
  }
  h3{
    text-align:center;
  }
`;

const Seperateproduct = styled.div`
width: 30%;
  background-color: aqua;
  margin: 1rem;
  padding: 1rem;
  border-radius: 7%;
  height: 100%;

`;
