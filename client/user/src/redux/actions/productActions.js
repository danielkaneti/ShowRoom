import axios from 'axios';
import { searchedProductURL } from '../../api/wine';




export const loadSearchedProduct = (title, genre, year) => async (dispatch) => {
    const response = await axios.get(searchedProductURL(title, genre, year));
    const searchedProductData = [...response.data].reverse();
    dispatch({
      type: "FETCH_SEARCHED_PRODUCT",
      payload: {
        searchedProducts: searchedProductData,
      },
    });
  };