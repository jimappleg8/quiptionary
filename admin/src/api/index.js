import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8080/api'
})

export const searchDef = words => api.get(`/definitions/search/${words}`);
export const getDef = id => api.get(`/definitions/${id}`);
export const insertDef = data => api.post(`/definitions`, data);
export const updateDef = (id, data) => api.put(`/definitions/${id}`, data);
export const removeDef = id => api.delete(`/definitions/${id}`);

export const updateSrc = (id, data) => api.put(`/sources/${id}`, data);

export const updateDefSrc = (definitionId, sourceId, data) => api.put(`/definition-source/${definitionId}/${sourceId}`, data);

const apis = {
  searchDef,
  getDef,
  insertDef,
  updateDef,
  removeDef,
  updateSrc,
  updateDefSrc
};

export default apis;
