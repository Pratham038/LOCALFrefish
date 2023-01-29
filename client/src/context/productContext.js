import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productReducer";
import axios from "axios";
const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";
//const API = "http://localhost:4000/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      // console.log(products);
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

//2nd API CAll

const getSingleProduct =async(url) =>{
  dispatch({type:"SET_SINGLE_LOADING"});
  try {
    const res = await axios.get(url);
    const singleProduct = await res.data;
    dispatch({type: "SET_SINGLE_PRODUCT",payload:singleProduct});
  } catch (error) {
    dispatch({type:"SET_SINGLE_ERROR"});
  }
};



  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state ,getSingleProduct }}>{children}</AppContext.Provider>
  );
};

//cusastom hooks

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
