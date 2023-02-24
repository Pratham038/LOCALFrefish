import React from 'react'
import styled from 'styled-components';
import { useState , useEffect } from 'react';
import AdminNavbar from '../Components/AdminNavbar'

import { NavLink } from 'react-router-dom';
const AdminOrder = () => {
  const [orders,setOrders] = useState(null);
  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch("/api/orders");
      const json = await response.json();
      console.log(json);
      if (response.ok) {
        setOrders(json);
      }
    };

    fetchOrders();
  }, []);
  return (<>
    <AdminNavbar/>

  <Wrapper>
    <div className="orders">
          {orders &&
            orders.map((order) => (
              <>
                <NavLink to={`/order/${order.id}`}>
                <div className='orders'>
                  {order.username}
                  </div>
                </NavLink>
              </>
            ))}
        </div>
    </Wrapper>
    </>
  )
}
const Wrapper= styled.div`
.orders{
  border: 3px solid #333;
}
`
export default AdminOrder