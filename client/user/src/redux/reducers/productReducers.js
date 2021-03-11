const initState = {
    allProduct: [],
    searchedProducts: [],
  }
  
  const productReducers = (state = initState, action) => {
    switch (action.type) {
  
     
      case "FETCH_SEARCHED_PRODUCT":
        return {
          ...state,
          searchedProducts: action.payload.searchedProducts,
        }
      default:
        return { ...state };
    }
  }
  
  export default productReducers;