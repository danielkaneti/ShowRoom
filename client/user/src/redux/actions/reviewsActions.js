import axios from 'axios';
import {
  reviewsURL,
  searchedReviewsURL,
  reviewsCountURL,
  latestReviewsURL,
  topLatestReviewsURL,
  reviewsByProductIdURL,
  reviewsWithProductsAndUsersURL,
  reviewsByIdURL
} from '../../api/reviews';

//Action creator - async using thunk

export const loadAllReviews = () => async (dispatch) => {
  //FETCH AXIOS
  const response = await axios.get(reviewsURL());
  const allReviewsData = [...response.data].reverse();
  dispatch({
    type: "FETCH_REVIEWS",
    payload: {
      allReviews: allReviewsData,
    },
  });
};

export const loadAllReviewsWithData = () => async (dispatch) => {
  const response = await axios.get(reviewsWithProductsAndUsersURL());
  const allReviewsWithData = [...response.data].reverse();
  dispatch({
    type: "FETCH_REVIEWS_WITH_DATA",
    payload: {
      allReviewsWithData: allReviewsWithData,
    },
  });
};

export const loadTopLatestReviews = (numWanted) => async (dispatch) => {
  const topLatestReviewsData = await axios.get(topLatestReviewsURL(numWanted));
  dispatch({
    type: "FETCH_TOP_LATEST_REVIEWS",
    payload: {
      topLatestReviews: topLatestReviewsData.data,
    },
  });
};

export const loadSearchedReviews = (title, username) => async (dispatch) => {
  const response = await axios.get(searchedReviewsURL(title, username));
  const searchedReviewsData = [...response.data].reverse();
  dispatch({
    type: "FETCH_SEARCHED_REVIEWS",
    payload: {
      searchedReviews: searchedReviewsData,
    },
  });
};
export const WineDetails = (reviewInput , history) =>async (dispatch)=> {
  try{
    const response = await axios.post(
      updateReviewByUserIdURL(),
      {
        reviewInput,
        history
      }
    );
    dispatch({
      type: "ADD_REVIEW",
      payload: {
        isLogged: true,
        user: response.data,
      },
    });
    history.push('/');
  } catch (exception) {
    alert(exception.response.data);
  }
  
  
  }