import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AdminNavbar from '../Components/AdminNavbar';
import FormatPrice from "../helpers/FormatPrice"

function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('/api/orders')
      .then(response => response.json())
      .then(data => setOrders(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Wrapper>
        <AdminNavbar/>
      <h1>Orders Page</h1>
    <div className='container'>
      {orders.map(order => (
        <div className="orders">
        <div key={order._id}>
          <h2>Order by {order.username} ({order.user_email})</h2>
          <p>Dilever AT : {order.address}</p>
          <p>Order date: {order.createdAt}</p>
        <div className="orders">
          <ul>
            {order.cart.map(item => (
              <li key={item.id}>
                {item.amount} x {item.name} ({item.quantitys}) - {item.price}
              </li>
            ))}
          </ul>
          </div>
          <p>Quantity: {order.quantity}</p>
          <p>Shipping fee: <FormatPrice price={order.shipping_fee} /></p>
          <p>Total price: <FormatPrice price={order.total_price} /></p>
        </div>
        </div>
      ))}
    </div>
    </Wrapper>
  );
}
const Wrapper= styled.div`
padding: 1rem;
.orders{
padding: 1rem;
  border: 3px solid #333;
}
.container{
    display: flex;
    flex-direction: column-reverse;
}
`
export default OrdersPage;
