import { API, BASE_URL } from "./constant.api";

export const getAllUsers = () => API.get(`${BASE_URL}/users`);
// {
//   return axios.get("/api/users");
// };

// export const getUserById = (idUser) => {
//   return axios.get(`/api/users/${idUser}`);
// };

// export const addNewUser = (data) => {
//   return axios.post(`api/users`, data);
// };

// export const updateUser = (id, data) => {
//   return axios.put(`api/users/${id}`, data);
// };

// export const deleteUser = (id) => {
//   return axios.delete(`api/users/${id}`);
// };
