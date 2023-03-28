import { API, BASE_URL } from "./constant.api";

// export const LoginApi = (email, password) => {
//   const data = { email, password };
//   return axios.post(`${BASE_URL}/login`, data);
// };

// export const getAllUsersApi = () => {
//   return axios.get(`${BASE_URL}/users`);
// };

// export const getUserByIdApi = (idUser) => {
//   return axios.get(`${BASE_URL}/users/${idUser}`);
// };

// export const addNewUserApi = (data) => {
//   return axios.post(`${BASE_URL}/users`, data);
// };

// export const updateUserApi = (id, data) => {
//   return axios.put(`${BASE_URL}/users/${id}`, data);
// };

// export const deleteUserApi = (id) => {
//   return axios.delete(`${BASE_URL}/users/${id}`);
// };

export const authApi = {
  login: (data) => API.post(`${BASE_URL}/login`, data),
  register: (data) => API.post(`${BASE_URL}/register`, data),
};
