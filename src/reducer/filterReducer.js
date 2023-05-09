const FilterReducer = (state, action) => {


    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":

            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
            }

        case "GET_SORT_VALUE":

            let userSortValue = document.getElementById('sort');
            let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
            console.log(sort_value)
            return {
                ...state,
                sorting_value: sort_value,
            }

        case "SORTING_PRODUCTS":

            let newSortData;
            let tempSortProduct = [...action.payload];


            if (state.sorting_value === "lowest") {
                const sortingProduct = (a, b) => {
                    return a.price - b.price;
                }

                newSortData = tempSortProduct.sort(sortingProduct)
            }
            if (state.sorting_value === "highest") {
                const sortingProduct = (a, b) => {
                    return b.price - a.price;
                }

                newSortData = tempSortProduct.sort(sortingProduct)
            }


            return {
                ...state,
                filter_products: newSortData,
            }

        case "UPDATE_FILTER_VALUE" :
            const {name, value } = action.payload

            return{
                ...state, 
                filters: {
                    ...state.filters,
                    [name]:value,
                    
                },
            }

        case "FILTERS_PRODUCT":
            let {all_products} = state;
            let tempFilterProduct = [...all_products];

            const {text} = state.filters;

            if(text) {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.name.toLowerCase().startsWith(text);
                })
            }

            return {
                ...state,
                filter_products: tempFilterProduct,
            }

        default:
            return state;
    }

}


export default FilterReducer;