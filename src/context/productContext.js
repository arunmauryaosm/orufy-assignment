import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productReducer"

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
    isError: false,
    products: [],
}

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const getProducts = async (url) => {
        try {
            const res = await axios.get(url);
            const products = await res.data;
            dispatch({ type: "SET_API_DATA", payload: products })
            // console.log(products)
        } catch (error) {
            dispatch({type:"API_ERROR"})

        }
    }

    useEffect(() => {
        getProducts(API);
    }, []);


    return (
        <AppContext.Provider value={{ ...state }}>
            {children}
        </AppContext.Provider>
    );
};

// custom hooks

const useProductContext = () => {
    return useContext(AppContext)
}

export { AppProvider, AppContext, useProductContext };
