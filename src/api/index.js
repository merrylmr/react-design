import axios from './http.js'

export const getPageData = () => {
  return axios.get('/page')
}