const BASE_URL = 'http://10.58.52.245:3000';

const API = {
  login: `${BASE_URL}/login`,
  signup: `${BASE_URL}/auth/signUp`,
  signin: `${BASE_URL}/auth/signIn`,
  detail: `${BASE_URL}/products/detail`,
  products: `${BASE_URL}/products/category`,
  cart: `${BASE_URL}/cart/insertion`,
  cartPage: `${BASE_URL}/cart/retrieval`,
  cartEdit: `${BASE_URL}/cart/edition`,
  cartDelete: `${BASE_URL}/cart/deletion`,
};

export { API, BASE_URL };
