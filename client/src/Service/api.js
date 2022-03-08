import axios from "axios";

const url = "http://localhost:8000";

export const getUsers = async (id) => {
  id = id || "";
  return await axios.get(`${url}/${id}`);
};

export const addUser = async (user) => {
  return await axios.post(`${url}/add`, user);
};

export const editUser = async (id, userData) => {
  return await axios.put(`${url}/${id}`, userData);
};

export const deleteUserdb = async (id) => {
  return await axios.delete(`${url}/${id}`);
};
