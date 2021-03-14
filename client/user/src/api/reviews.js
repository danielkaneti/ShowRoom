const base_url = "http://localhost:2222/reviews";


export const reviewsURL = () => `${base_url}/`;

//export const searchedReviewsURL = (title, username) => `${base_url}/getReviewByParams/${title}=${rating}=${username}`;

export const reviewsCountURL = () => `${base_url}/countReviews`;


export const latestReviewsURL = () => `${base_url}/latestReviews`;


export const topLatestReviewsURL = (topNumWanted) => `${base_url}/latestReviews/${topNumWanted}`;


export const reviewsByProductIdURL = (id) => `${base_url}/getReviewsByProductId/${id}`;

export const reviewsWithProductsAndUsersURL = () => `${base_url}/getReviewsProductsUsers`;


export const reviewsByIdURL = (id) => `${base_url}/${id}`;
