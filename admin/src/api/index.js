import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8080/api'
})

export const searchDef = words => api.get(`/definitions/search/${words}`);
export const getDef = id => api.get(`/definitions/${id}`);
export const getOneDef = data => api.get(`/definitions/one`, data);
export const insertDef = data => api.post(`/definitions`, data);
export const updateDef = (id, data) => api.put(`/definitions/${id}`, data);
export const removeDef = id => api.delete(`/definitions/${id}`);

export const createSrc = data => api.post(`/sources/`, data);
export const updateSrc = (id, data) => api.put(`/sources/${id}`, data);

export const createDefSrc = data => api.post(`/definition-source/`, data);
export const updateDefSrc = (definitionId, sourceId, data) => api.put(`/definition-source/${definitionId}/${sourceId}`, data);
export const deleteDefSrc = (definitionId, sourceId) => api.delete(`/definition-source/${definitionId}/${sourceId}`);

const apis = {
  searchDef,
  getDef,
  getOneDef,
  insertDef,
  updateDef,
  removeDef,
  createSrc,
  updateSrc,
  createDefSrc,
  updateDefSrc,
  deleteDefSrc
};

export default apis;
