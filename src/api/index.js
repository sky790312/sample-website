import axios from 'axios'

axios.defaults.timeout = 20000
axios.defaults.baseURL = process.env.BASE_URL
axios.interceptors.request.use(
  config => {
    config.data = JSON.stringify(config.data)
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error && error.response) {
      switch (error.response.status) {
        default:
          console.log(error.response.status)
      }
    } else {
      console.log('something wrong')
    }
    return Promise.resolve(error.response)
  }
)

export const get = (url, params = {}) => {
  console.log('url: ', url)
  console.log('params: ', params)
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}
