import React from 'react'
import { useState} from 'react';
import axios from 'axios';
import {  useParams, useNavigate } from 'react-router-dom';

const EditProductForm = ({singleProduct}) => {
    const [single, setSingle] = useState({
        id: '',
        name: '',
        image: '',
        description: '',
        quantity: '',
        price: '',
        stock: '',
        reviews: '',
        stars: '',
        category: '',
        featured: '',
});
const { id } = useParams();
console.log(id);
  const onChange = (e) => {
    setSingle({ ...single, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      id: singleProduct.id,
      name: singleProduct.name,
      image: singleProduct.image,
      description: singleProduct.description,
      quantity: singleProduct.quantity,
      price: singleProduct.price,
      stock: singleProduct.stock,
      reviews: singleProduct.reviews,
      stars: singleProduct.stars,
      category: singleProduct.category,
      featured: singleProduct.featured,
    };

    axios
      .patch(`http://localhost:4000/api/products/${id}`, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        //alert('UPdated PRESS F8')
      });
  };

  return (
    <>
<div className='UpdateBookInfo'>
      
        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='name'>Name :</label>
              <input
                type='text'
                name='name'
                className='form-control'
                value={single.name}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='id'>ID :</label>
              <input
                type='text'
                placeholder='ID'
                name='id'
                className='form-control'
                value={single.id}
                onChange={onChange}
              />
            </div>
            <br />
            <div className='form-group'>
              <label htmlFor='image'>Image :</label>
              <input
                type='text'
                placeholder='Image link'
                name='image'
                className='form-control'
                value={single.id}
                onChange={onChange}
              />
            </div>
            <br />
            <div className='form-group'>
              <label htmlFor='price'>price :</label>
              <input
                type='number'
                placeholder='price'
                name='price'
                className='form-control'
                value={single.price}
                onChange={onChange}
              />
            </div>
            <br />
            <div className='form-group'>
              <label htmlFor='stock'>stock :</label>
              <input
                type='number'
                placeholder='stock'
                name='stock'
                className='form-control'
                value={single.stock}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='reviews'>reviews :</label>
              <input
                type='number'
                placeholder='reviews'
                name='reviews'
                className='form-control'
                value={single.reviews}
                onChange={onChange}
              />
            </div>
            <br />
            <div className='form-group'>
              <label htmlFor='stars'>stars :</label>
              <input
                type='number'
                placeholder='stars'
                name='stars'
                className='form-control'
                value={single.stars}
                onChange={onChange}
              />
            </div>
            <br/>
            <div className='form-group'>
              <label htmlFor='category'>category :</label>
              <input
                type='text'
                placeholder='category'
                name='category'
                className='form-control'
                value={single.category}
                onChange={onChange}
              />
            </div>
            <br/>
            <div className='form-group'>
              <label htmlFor='featured'>featured :</label>
              <input
                type='text'
                placeholder='featured'
                name='featured'
                className='form-control'
                value={single.featured}
                onChange={onChange}
              />
            </div>

            <br/>
            <div className='form-group'>
              <label htmlFor='description'>description :</label>
              <input
                type='text'
                placeholder='description'
                name='description'
                className='form-control'
                value={single.description}
                onChange={onChange}
              />
            </div>
            <br/>
            <div className='form-group'>
              <label htmlFor='quantity'>quantity :</label>
              <input
                type='text'
                placeholder='quantity'
                name='quantity'
                className='form-control'
                value={single.quantity}
                onChange={onChange}
              />
            </div>

            <button
              type='submit'
              className='btn btn-outline-info btn-lg btn-block'
            >
              Update Product
            </button>
          </form>
          
        </div>
      </div>
    </>
  )
}

export default EditProductForm