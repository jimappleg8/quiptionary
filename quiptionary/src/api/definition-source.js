import axios from 'axios'

export default axios.create({
  baseURL: 'http://quiptionary-api:8888/v1/results/'
})