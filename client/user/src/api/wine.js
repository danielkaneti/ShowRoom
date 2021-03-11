const base_url = "http://localhost:2222/products";

export const productsURL = () => `${base_url}/`;
export const getWineURL = (wineId) => productsURL() + wineId;
export const searchedProductURL = (title, genre, year) => `${base_url}/getProductByParams/${title}=${genre}=${year}`;



