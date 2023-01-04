import { NavLink } from "react-router-dom";
import styled from "styled-components";
import FormatPrice from "../helpers/FormatPrice"

const ListView = ({ products }) => {
  return (
    <Wrapper className="section">
      <div className="container grid">
        {products.map((curElem) => {
          const { id, name, image, price, description } = curElem;
          return (
            <div className="card grid grid-two-column">
                <NavLink to={`/singleproduct/${id}`} >

              <figure>
                <img src={image} alt={name} />
              </figure>
              </NavLink>

              <div className="card-data">
                <h3>{name}</h3>
                <p>
                  <FormatPrice price={price} />
                </p>
                <p>{description.slice(0, 90)}...</p>

                <NavLink to={`/singleproduct/${id}`} className="btn-main">
                  <button className="btn">Read More</button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 2rem 0;

  .container {
    max-width: 120rem;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(1,1fr);
    gap: 1rem;
  }
.grid-two-column{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    
}
  figure {
    width: auto;
    display: flex;
    justify-content: flex-start;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
   height: 17rem;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      opacity: 50%;
      cursor: pointer;
    }
    &:hover::after {
      width: 78%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      margin-left: 2rem;
      max-width: 90%;
      margin-top: 1.5rem;
   height: 15rem;
      transition: all 0.2s linear;
    }
  }

  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);

    .card-data {
      padding: 0 2rem;
    }

    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
      text-transform: capitalize;
    }

    .btn {
      margin: 2rem 0;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(98 84 243);

      &:hover {
        background-color: rgb(98 84 243);
      }

      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }

    .btn-main .btn:hover {
      color: #fff;
    }
  }
`;

export default ListView;