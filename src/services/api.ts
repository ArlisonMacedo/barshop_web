import axios from 'axios'

const api = axios.create({
  baseURL: 'https://barshop.herokuapp.com/'
})

export default api