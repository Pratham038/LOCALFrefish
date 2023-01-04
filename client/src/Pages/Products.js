import React,{useState} from "react";
import styled from "styled-components";
import FilterSection from "../Components/FilterSection";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../context/filter_context";
import GridView from "../Components/GridView";
import ListView from "../Components/ListView";

const Products = () => {
  const { filter_products,sorting} = useFilterContext();

  let [ grid, setGrid] = useState(true)
  let gridf = () =>{
 setGrid(true);
   }
  let listf = () => { 
setGrid(false);
 }
  return (
    <Wrapper>
      <div className="filters"><FilterSection /></div>
      <div className="main-products">
        <SortFilter>
          <div className="sort-icons">
          <button onClick={gridf} className={grid ? "active":"normal"} >
          <BsFillGridFill className="icon" />
        </button>

        <button  onClick={listf} className={grid ? "normal":"active"}>
          <BsList className="icon" />
        </button>
          </div>
          <div className="total-items">
          <p>{`${filter_products.length} Products Available`}</p>
          </div>
          <div className="drop-list">
          <form action="#">
          <label htmlFor="sort"></label>
          <select
          onClick={sorting}
            name="sort"
            id="sort"
            className="sort-selection--style">
            <option value="lowest">Price(lowest)</option>
            <option value="#" disabled></option>
            <option value="highest">Price(highest)</option>
            <option value="#" disabled></option>
            <option value="a-z">Price(a-z)</option>
            <option value="#" disabled></option>
            <option value="z-a">Price(z-a)</option>
          </select>
        </form>
          </div>
        </SortFilter>
        <MainroductList>
     { (grid===true)?<GridView  products={filter_products}/>:<ListView  products={filter_products}/>}      
        </MainroductList>
      </div>
    </Wrapper>
  );
};
const SortFilter = styled.div`

display: flex;
justify-content: space-around;
.drop-list{
  padding: 0.2rem 0 0 0 ;
}
.total-items{
  padding: 0.2rem 0 0 0 ;
}
button{
  display: flex;
  justify-content: center;
  align-items: center;
}
.active{
  background-color: black;
  color:white;
}
.sort-icons{
  display: grid;
  grid-template-columns: repeat(2,2rem);
  grid-template-rows: repeat(1,2rem);
  padding: 0.2rem;
  margin: 0%;
  grid-column-gap: 1rem;
}
`;

const MainroductList= styled.div`
background-color: aqua;

`;

const Wrapper = styled.div`
  border: 3px solid aqua;
  display: flex;
  padding: 3rem 5rem;
  .filters {
    border: 3px solid #333;
    width:15%;
  }
  .main-products {
    background-color: yellow;
    border: 3px solid #333;
    width: 85%;
  }
  .sort-filter {
    border: 3px solid #333;
  }
  .products-list {
    border: 3px solid #333;
  }
`;
export default Products;
