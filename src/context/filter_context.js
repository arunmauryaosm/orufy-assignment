import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productContext";
import reducer from "../reducer/filterReducer"

const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    sorting_value: "lowest",
    filters : {
        text: "",
    }
}

export const FilterContextProvider = ({children}) => {

    const {products} = useProductContext();
    
    const [state, dispatch] = useReducer(reducer, initialState);

    
    
    // sorting function 
    
    const sorting = () => {
        dispatch({type: "GET_SORT_VALUE"});
    }
    
    // update filter value search
    const updateFilterValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        return dispatch({type: "UPDATE_FILTER_VALUE", payload: {name, value}})
    }

    // sort the product
    useEffect(() => {
        dispatch({type: "FILTERS_PRODUCT"});
        dispatch({type:"SORTING_PRODUCTS", payload:products})
    }, [state.sorting_value, state.filters])

    useEffect(() => {
        dispatch({type: "LOAD_FILTER_PRODUCTS", payload: products})
    }, [products])

    return(
        <FilterContext.Provider value={{ ...state , sorting, updateFilterValue}} >
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterContext = () => {
    return useContext(FilterContext);
}