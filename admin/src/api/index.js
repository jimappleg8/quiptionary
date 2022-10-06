import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8080/api'
})

export const getAll = () => api.get(`/tutorials`);
export const get = id => api.get(`/tutorials/${id}`);
export const insert = data => api.post(`/tutorials`, data);
export const update = (id, data) => api.put(`/tutorials/${id}`, data);
export const remove = id => api.delete(`/tutorials/${id}`);
export const removeAll = () => api.delete(`/tutorials`);
export const findByTitle = title => api.get(`/tutorials?title=${title}`);

const apis = {
  getAll,
  get,
  insert,
  update,
  remove,
  removeAll,
  findByTitle
};

export default apis;
