import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8080/api'
})

export const search = words => api.get(`/definitions/search/${words}`);
export const get = id => api.get(`/definitions/${id}`);
export const insert = data => api.post(`/definitions`, data);
export const update = (id, data) => api.put(`/definitions/${id}`, data);
export const remove = id => api.delete(`/definitions/${id}`);


const apis = {
  search,
  get,
  insert,
  update,
  remove
};

export default apis;
