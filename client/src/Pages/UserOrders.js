import React, { useEffect, useState } from 'react';
import FormatPrice from "../helpers/FormatPrice"
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';

const UserOrders = () => {
const { user, isAuthenticated } = useAuth0();
const [orders, setOrders] = useState([]);

useEffect(() => {
    fetch(`api/orders/${user.email}`)
      .then(response => response.json())
      .then(data => setOrders(data))
      .catch(error => console.error(error));
  }, []);
  return (
  <Wrapper>
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
  )
}

// import React, { useEffect, useState } from 'react';
// import FormatPrice from "../helpers/FormatPrice"
// import { useAuth0 } from '@auth0/auth0-react';
// import styled from 'styled-components';

// const UserOrders = () => {
//   const { user, isAuthenticated } = useAuth0();
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     fetch(`api/orders/${user.email}`)
//       .then(response => response.json())
//       .then(data => setOrders(data))
//       .catch(error => console.error(error));
//   }, []);

//   useEffect(() => {
//     if (orders.length > 0) {
//       const thirtyMinutesInMilliseconds = 1800000; // 30 minutes in milliseconds
//       const latestOrder = orders[0]; // assuming orders are sorted by createdAt in descending order
//       const latestOrderPlacedTime = new Date(latestOrder.createdAt).getTime();

//       const timerId = setTimeout(() => {
//         // check if the latest order is still in the database (in case it was cancelled or deleted)
//         fetch(`api/orders/${latestOrder.user_email}`)
//           .then(response => response.json())
//           .then(data => {
//             const latestOrderFromDb = data.find(order => order._id === latestOrder._id);

//             if (!latestOrderFromDb) {
//               console.log('Latest order not found in database');
//               return;
//             }

//             // check if the latest order has been marked as completed already
//             if (latestOrderFromDb.completed) {
//               console.log('Latest order already completed');
//               return;
//             }

//             // mark the latest order as completed
//             latestOrderFromDb.completed = true;

//             fetch(`api/orders/${latestOrderFromDb._id}`, {
//               method: 'PUT',
//               headers: { 'Content-Type': 'application/json' },
//               body: JSON.stringify(latestOrderFromDb)
//             })
//               .then(response => response.json())
//               .then(data => console.log(`Latest order ${latestOrderFromDb._id} completed`))
//               .catch(error => console.error(error));
//           })
//           .catch(error => console.error(error));
//       }, thirtyMinutesInMilliseconds);

//       return () => clearTimeout(timerId);
//     }
//   }, [orders]);

//   return (
//     <Wrapper>
//       <h1>Orders Page</h1>
//       <div className='container'>
//         {orders.map(order => (
//           <div className="orders" key={order._id}>
//             <h2>Order by {order.username} ({order.user_email})</h2>
//             <p>Deliver AT: {order.address}</p>
//             <p>Order date: {order.createdAt}</p>
//             <div className="orders">
//               <ul>
//                 {order.cart.map(item => (
//                   <li key={item.id}>
//                     {item.amount} x {item.name} ({item.quantitys}) - {item.price}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <p>Quantity: {order.quantity}</p>
//             <p>Shipping fee: <FormatPrice price={order.shipping_fee} /></p>
//             <p>Total price: <FormatPrice price={order.total_price} /></p>
//           </div>
//         ))}
//       </div>
//     </Wrapper>
//   );
// }

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
export default UserOrders