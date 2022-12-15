// const BASE_URL = 'http://10.58.52.161:3000';
const BASE_URL = 'http://127.0.0.1:3000';

const API = {
  login: `${BASE_URL}/login`,
  signup: `${BASE_URL}/auth/signUp`,
  signin: `${BASE_URL}/auth/signIn`,
  detail: `${BASE_URL}/detail`,
  products: `${BASE_URL}/products`,
};

export { API, BASE_URL };
