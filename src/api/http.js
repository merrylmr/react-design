import axios from 'axios'

axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5f96a3b134c55d14fda96e5a/example';

axios.interceptors.request.use(function (config) {
  config.headers['content-type'] = 'application/json';
  return config
}, function (error) {
  return Promise.reject(error)
})


axios.interceptors.response.use(function (response) {
  if (response.status !== 200) {
    return Promise.reject(response.data);
  }
  return response.data;
}, function (err) {
  return Promise.reject(err);
})


export default axios;