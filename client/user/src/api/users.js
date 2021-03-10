const base_url = "http://localhost:2222/users";


export const usersURL = () => `${base_url}/`;
export const usersByParamsURL = () => `${base_url}/getUserByParam/:param`;
export const updateReviewByUserIdURL = () => `${base_url}/updateReviewOfUser/:id`;
export const usersCountURL = () => `${base_url}/countUsers`;
export const userByUserNameURL = (username) => `${base_url}/getUsername/${username}`;
export const userByEmailURL = (email) => `${base_url}/getUserByEmail/${email}`;
export const userByUserIdURL = () => `${base_url}/:id`;




