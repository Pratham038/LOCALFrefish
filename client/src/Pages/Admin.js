import React from 'react'
import { useState } from 'react';

const Admin = () => {
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [stock, setStock] = useState('');
    const [category,setCategory ] = useState('');
    const [featured, setFeatured] = useState('');
    const [error,setError]=useState(null)

    

    const prductNewSubmit =async(e) => {
        e.preventDefault()
        
        const product = {name,price,description,id,stock,category,featured}
    
        const response = await fetch('api/products',{
            method:'POST',
            body:JSON.stringify(product),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const json = await response.json()
        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setName('')
            setPrice('')
            setDescription('')
            setCategory('')
            setFeatured('')
            setStock('')
            setId('')
        setError(null)

            console.log('new product added',json);
            
        }
    }
    
    return (
    <>
<form  onSubmit={prductNewSubmit}>
<h3>ADD A new Product</h3>

<label>Product ID :</label>
    
    <input 
    type='text' 
    onChange={(e)=>setId(e.target.value)}
    value={id}
    />

<label>Product Name :</label>
    
    <input 
    type='text' 
    onChange={(e)=>setName(e.target.value)}
    value={name}
    />

<label>Product Price :</label>
<h6>value will be /100 .</h6>
    <input 
    type="number" 
    onChange={(e)=>setPrice(e.target.value)}
    value={price}
    />

<label>Product Description :</label>
    <input 
    type='text' 
    onChange={(e)=>setDescription(e.target.value)}
    value={description}
    />

<label>Product stock :</label>
    <input 
    type='number' 
    onChange={(e)=>setStock(e.target.value)}
    value={stock}
    />

<label>Product Advertise ? :</label>
<h6>true ki false</h6>

    <input 
    type='text' 
    onChange={(e)=>setFeatured(e.target.value)}
    value={featured}
    />


<label>Product category :</label>

<input 
    type='text' 
    onChange={(e)=>setCategory(e.target.value)}
    value={category}
    />
<button onSubmit={prductNewSubmit}>Add Product</button>
{error && <div className='error'>{error}</div>}

</form>
    
    </>
  )
}

export default Admin