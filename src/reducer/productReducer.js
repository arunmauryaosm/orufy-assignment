const ProductReducer = (state, action) => {

     
    switch (action.type) {
    case "SET_API_DATA":
        
        return{
            ...state,
            products: action.payload,
        }


        case "API_ERROR":
            return{
            ...state,
            isError: true,
        }

        default:
            return state;
        }
        
    }
    
    
export default ProductReducer;