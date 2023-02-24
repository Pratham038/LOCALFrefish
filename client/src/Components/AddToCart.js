import { useState } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/cart_context";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { id, stock, quantity } = product;

  const [amount, setAmount] = useState(1);
  const [quantitys, setQuantitys] = useState(quantity[0]);

  const handleChange = event => {
    setQuantitys(event.target.value);
  };

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(0);
  };

  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };
// console.log(quantitys);
  return (
    <Wrapper>
      <div className="out">
        <p>
          Quantity:
          <select onChange={handleChange}>
            {quantity.map((index) => (
              <option key={index} value={index}>
                {index}
              </option>
            ))}
          </select>
        </p>
      </div>
      {/* add to cart  */}
      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      <NavLink
        to="/cart"
        onClick={() => addToCart(id, quantitys, amount, product)}
      >
        <Button className="btn">Add To Cart</Button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;

  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 7%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  /* we can use it as a global one too  */
`;
export const Button = styled.button`
  text-decoration: none;
  max-width: auto;
  background-color: rgb(98 84 243);
  color: rgb(255 255 255);
  padding: 0.7rem 1.2rem;
  border: none;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: all 0.4s ease;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  &:hover,
  &:active {
    font-weight: 700;
    border-radius: 7px;
    box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    transform: scale(0.96);
  }
  a {
    text-decoration: none;
    color: rgb(255 255 255);
    font-size: 1.8rem;
  }
`;
export default AddToCart;
