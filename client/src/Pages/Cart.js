import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import CartItem from "../Components/CartItem";
import { NavLink } from "react-router-dom";
import { Button } from "../Components/AddToCart";
import FormatPrice from "../helpers/FormatPrice";
import { useAuth0 } from "@auth0/auth0-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Cart = () => {
  const [address, setAddress] = useState("");
  const navigate = useNavigate();
  const { user, loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  const { cart, total_item, clearCart, total_price, shipping_fee } =
    useCartContext();

  const notify = () => {
    toast.success("Order Placed Successfully 💕", {
      position: toast.POSITION.TOP_RIGHT,
      className: "toast-message",
    });
    // setTimeout(() => {
    //   navigate('/');
    // }, 3000);
  };

  //  console.log(cart);

  if (cart.length === 0) {
    return <EmptyDiv> NO ITEMS IN CART</EmptyDiv>;
  }

  const placeOrder = async () => {
    try {
      const orderData = {
        username: user.name,
        user_email: user.email,
        cart: cart,
        quantity: total_item,
        shipping_fee: shipping_fee,
        total_price: total_price,
        address: address,
      };

      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        alert("Invalid Address");
      }
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        notify();
        setTimeout(() => {
          navigate("/");
          clearCart();
        }, 2000);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Wrapper>
      <div className="container">
        <div className="cart_heading grid grid-five-column">
          <p>Item</p>
          <p className="cart-hide">Price</p>
          <p>Quantity</p>
          <p className="cart-hide">Subtotal</p>
          <p>Remove</p>
        </div>
        <hr />

        <div className="cart-item">
          {cart.map((curElem) => {
            return <CartItem key={curElem.id} {...curElem} />;
          })}
        </div>
        <hr />
        <div className="cart-two-button">
          <NavLink to="/products">
            <Button>continue Shopping</Button>
          </NavLink>
          <Button onClick={clearCart}>clear cart</Button>
        </div>
        <div className="address">
          Enter Dilevery address :
          <input
            type="text"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          />
        </div>
        {/* order total_amount */}
        <div className="order-total--amount">
          <div className="order-total--subdata">
            <div>
              <p>subtotal:</p>
              <p>
                <FormatPrice price={total_price} />
              </p>
            </div>
            <div>
              <p>shipping fee:</p>
              <p>
                <FormatPrice price={shipping_fee} />
              </p>
            </div>
            <hr />
            <div>
              <p>order total:</p>
              <p>
                <FormatPrice price={shipping_fee + total_price} />
              </p>
            </div>
            {isAuthenticated ? (
              <div>
                <Button variant="contained" onClick={placeOrder}>
                  Place Order
                </Button>
                <ToastContainer />
              </div>
            ) : (
              <div>
                <h5>Login to Place Order </h5>
                <br />
                <Button onClick={() => loginWithRedirect()}>Login</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const EmptyDiv = styled.div`
  display: grid;
  place-items: center;
  height: 50vh;
  background-color: #eaeaea;
  h3 {
    font-size: 4.3rem;
    text-transform: capitalize;
    font-weight: 300;
  }
`;
const Wrapper = styled.section`
  padding: 1rem 0;

  .toast-message {
    background: darkblue;
  }
  .grid {
    display: grid;
    gap: 9rem;
  }

  .grid-four-column {
    grid-template-columns: repeat(4, 1fr);
  }

  .grid-five-column {
    grid-template-columns: repeat(4, 1fr) 0.3fr;
    text-align: center;
    align-items: center;
  }
  .cart-heading {
    text-align: center;
    text-transform: uppercase;
  }
  hr {
    margin-top: 0rem;
  }
  .cart-item {
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
  }

  .cart-user--profile {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 5.4rem;

    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }
    h2 {
      font-size: 2.4rem;
    }
  }
  .cart-user--name {
    text-transform: capitalize;
  }
  .cart-image--name {
    /* background-color: red; */
    align-items: center;
    display: grid;
    gap: 1rem;
    grid-template-columns: 0.4fr 1fr;
    text-transform: capitalize;
    text-align: left;
    img {
      max-width: 5rem;
      height: 5rem;
      object-fit: contain;
      color: transparent;
    }

    .color-div {
      display: flex;
      justify-content: flex-start;
      gap: 0.5rem;

      .color-style {
        width: 1.3rem;
        height: 1.3rem;
        border-radius: 50%;
      }
    }
  }

  .cart-two-button {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;

    .btn-clear {
      background-color: #e74c3c;
    }
  }

  .amount-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: red;
    }
  }

  .remove_icon {
    font-size: 1.6rem;
    color: #e74c3c;
    cursor: pointer;
  }

  .order-total--amount {
    width: 100%;
    margin: 4.8rem 0;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    .order-total--subdata {
      border: 0.1rem solid #f0f0f0;
      display: flex;
      flex-direction: column;
      gap: 1.8rem;
      padding: 3.2rem;
    }
    div {
      display: flex;
      gap: 3.2rem;
      justify-content: space-between;
    }

    div:last-child {
      background-color: #fafafa;
    }

    div p:last-child {
      font-weight: bold;
      color: #333;
    }
  }

  @media (max-width: 984px) {
    .grid-five-column {
      grid-template-columns: 1.5fr 1fr 0.5fr;
    }
    .cart-hide {
      display: none;
    }

    .cart-two-button {
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
      gap: 2.2rem;
    }

    .order-total--amount {
      width: 100%;
      text-transform: capitalize;
      justify-content: flex-start;
      align-items: flex-start;

      .order-total--subdata {
        width: 100%;
        border: 0.1rem solid #f0f0f0;
        display: flex;
        flex-direction: column;
        gap: 1.8rem;
        padding: 3.2rem;
      }
    }
  }
`;

export default Cart;
