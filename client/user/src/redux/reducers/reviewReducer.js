const initState = {
  allReviews: [],
  allReviewsWithData: [],
  topLatestReviews: [],
  searchedReviews: [],
  addReview: []
}

const reviewsReducer = (state = initState, action) => {
  switch (action.type) {

    case "FETCH_REVIEWS":
      return {
        ...state,
        allReviews: action.payload.allReviews,
      };
    case "FETCH_REVIEWS_WITH_DATA":
      return {
        ...state,
        allReviewsWithData: action.payload.allReviewsWithData,
      };
    case "FETCH_TOP_LATEST_REVIEWS":
      return {
        ...state,
        topLatestReviews: action.payload.topLatestReviews,
      };
    case "FETCH_SEARCHED_REVIEWS":
      return {
        ...state,
        searchedReviews: action.payload.searchedReviews,
      }
    case "ADD_REVIEW":
      return{
        ...state,
        addReview: action.payload.addReview,
      }
    default:
      return { ...state };
  }
}

export default reviewsReducer;