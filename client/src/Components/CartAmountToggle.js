import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import styled from "styled-components";

const Wrapper = styled.section`
margin: 0rem 2rem 0rem 4rem;
.amount-toggle {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1rem;

    button {
      color: yellow;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #333;
      border-radius:50% ;
      padding: 0.4rem;
      background-color: black;
      cursor: pointer;
    }

    .amount-style {

      margin:0.2rem;
      margin-top: 0%;
      font-size: 2rem;
      color: rgb(98 84 243);

    }
  }
`;
const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <Wrapper className="cart-button">
      <div className="amount-toggle">
        <button onClick={() => setDecrease()}>
          <FaMinus />
        </button>
        <div className="amount-style">{amount}</div>
        <button onClick={() => setIncrease()}>
          <FaPlus />
        </button>
      </div>
    </Wrapper>
  );
};

export default CartAmountToggle;